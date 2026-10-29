// Run with Node.js: node tests/verify.mjs. No third-party dependencies.
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
new vm.Script(script); // Validate syntax of the entire application, not only the math module.
const context = vm.createContext({});
vm.runInContext(script.slice(0, script.indexOf('    /* Safe storage helpers */')), context);
vm.runInContext(script.slice(script.indexOf('    const I18N ='), script.indexOf('    function initAuthorship()')), context);
const api = vm.runInContext('({ buildPrPoints, computeAuprc, scorePdf, scoreFromLatent, latentFromScore, normalCdf, normalSf, normalPdf, computeMetrics, ratesAt, buildRocPoints, optimizeYouden, densityDomain, PRESETS, QUIZ_BANK, I18N, HANDBOOK })', context);
const near = (actual, expected, tolerance = 1e-7) => assert.ok(Math.abs(actual - expected) <= tolerance, `${actual} != ${expected} (tolerance ${tolerance})`);
const evaluate = (s, direction = s.dir) => api.computeMetrics(s.cutoff, s.meanH, s.stdH, s.meanD, s.stdD, direction, s.prev);
const model = s => ({ ...s, direction: s.dir });
let passed = 0;
function test(name, run) { run(); passed++; console.log(`PASS ${name}`); }

test('Gaussian CDF agrees with independent reference values', () => {
  for (const [z,p] of [[-3,0.0013498980316301],[-1,0.1586552539314571],[0,0.5],[1,0.8413447460685429],[1.96,0.9750021048517795],[3,0.9986501019683699]]) near(api.normalCdf(z,0,1),p);
  near(api.normalPdf(0,0,1),1 / Math.sqrt(2*Math.PI),1e-15);
});
test('Gaussian symmetry, finite tails and location-scale invariance', () => {
  for (let z=-8; z<=8; z+=0.125) {
    near(api.normalCdf(z,0,1)+api.normalSf(z,0,1),1,1e-15);
    near(api.normalCdf(50+3*z,50,3),api.normalCdf(z,0,1),1e-14);
  }
  assert.ok(api.normalSf(10,0,1)>0);
  near(api.normalCdf(-Infinity,0,1),0,0); near(api.normalCdf(Infinity,0,1),1,0);
});
test('Default reference result', () => {
  const m=evaluate(api.PRESETS.troponin);
  near(m.sens,0.9331927987311419); near(m.spec,0.9331927987311419);
  near(m.auc,0.9830525732376554); near(m.vpp,0.711401374,2e-7);
  assert.equal(m.vp+m.fn,150); assert.equal(m.vn+m.fp,850);
});
test('Reversing polarity reverses AUC and both classifications', () => {
  for (const s of Object.values(api.PRESETS)) {
    const a=evaluate(s,'higher'),b=evaluate(s,'lower');
    near(a.auc+b.auc,1,1e-15); near(a.sens+b.sens,1,1e-15); near(a.spec+b.spec,1,1e-15);
    near(a.youden,-b.youden,1e-15);
  }
  assert.ok(evaluate(api.PRESETS.troponin,'lower').auc<0.02);
});
test('No artificial 0.9999 probability ceiling', () => {
  const m=evaluate({...api.PRESETS.highSeparation,prev:1});
  assert.ok(m.sens>0.9999 && m.spec>0.9999 && m.lrPlus>100000);
  assert.ok(m.vpp>0.999 && m.vpp<1);
});
test('Identical distributions are uninformative at extreme and central cutoffs', () => {
  for(const cutoff of [5,50,95]) {
    const m=evaluate({...api.PRESETS.troponin,meanH:50,meanD:50,cutoff,prev:50});
    near(m.vpp,.5,1e-12); near(m.postNegative,.5,1e-12);
    near(m.lrPlus,1,1e-12); near(m.lrMinus,1,1e-12); near(m.youden,0,1e-12);
  }
});
test('AUC=0.5 permits a crossing ROC with unequal variances', () => {
  const m=api.computeMetrics(55,50,3,50,25,'higher',50);
  near(m.auc,.5,0); assert.ok(m.youden>.37);
});
test('Bayesian odds identities and fixed-distribution prevalence effects', () => {
  for(const s of Object.values(api.PRESETS)) {
    for(const prev of [1,15,50,90]) {
      const m=evaluate({...s,prev}),o=prev/(100-prev);
      near(m.vpp,(o*m.lrPlus)/(1+o*m.lrPlus),1e-12);
      near(m.postNegative,(o*m.lrMinus)/(1+o*m.lrMinus),1e-12);
      near(m.vpn+m.postNegative,1,1e-12);
      near(m.sens,evaluate(s).sens,0); near(m.spec,evaluate(s).spec,0);
    }
  }
});
test('Population counts preserve total and disease margins', () => {
  for(const s of Object.values(api.PRESETS)) for(const prev of [1,15,50,90]) for(const cutoff of [5,41,50,95]) {
    const m=evaluate({...s,prev,cutoff});
    assert.equal(m.vp+m.fn+m.vn+m.fp,1000);
    assert.equal(m.vp+m.fn,10*prev);
    for(const k of ['vp','fp','fn','vn']) assert.ok(Number.isInteger(m[k]) && m[k]>=0);
  }
});
test('ROC endpoints, monotonicity and numerical area match directional AUC', () => {
  const extra={...api.PRESETS.troponin,meanH:10,stdH:25,meanD:90,stdD:3};
  for(const s of [...Object.values(api.PRESETS),extra]) for(const dir of ['higher','lower']) {
    const points=api.buildRocPoints(model({...s,dir}));
    near(points[0].fpr,0,0); near(points[0].sens,0,0);
    near(points.at(-1).fpr,1,0); near(points.at(-1).sens,1,0);
    let area=0;
    for(let i=1;i<points.length;i++) {
      const a=points[i-1],b=points[i];
      assert.ok(b.fpr>=a.fpr && b.sens>=a.sens);
      area+=(b.fpr-a.fpr)*(a.sens+b.sens)/2;
    }
    near(area,evaluate(s,dir).auc,0.0001);
  }
});
test('Density viewport covers six standard deviations and allowed cutoffs', () => {
  const s=model({...api.PRESETS.troponin,meanH:10,stdH:25,meanD:90,stdD:25});
  const d=api.densityDomain(s);
  assert.ok(d.min<=s.meanH-6*s.stdH && d.max>=s.meanD+6*s.stdD);
  assert.ok(d.min<=5 && d.max>=95);
});
test('Youden finds the analytic midpoint for equal variances', () => {
  near(api.optimizeYouden(model(api.PRESETS.troponin)).cutoff,50,1e-12);
  const s={...api.PRESETS.troponin,meanH:30,meanD:70};
  near(api.optimizeYouden(model(s)).cutoff,50,1e-12);
});
test('Youden includes a boundary optimum', () => {
  const s={...api.PRESETS.troponin,dir:'lower'};
  const best=api.optimizeYouden(model(s));
  assert.ok(best.cutoff===5 || best.cutoff===95);
  assert.ok(best.youden>=evaluate({...s,cutoff:50}).youden);
});
test('Invalid model parameters throw rather than manufacture metrics', () => {
  for(const args of [[50,38,0,62,8,'higher',15],[50,38,-1,62,8,'higher',15],[50,38,8,62,8,'higher',101],[NaN,38,8,62,8,'higher',15],[50,38,8,62,8,'invalid',15]]) assert.throws(()=>api.computeMetrics(...args));
});
test('Impossible-result predictive values and zero denominators are explicit', () => {
  const m=api.computeMetrics(1000,38,8,62,8,'higher',50);
  assert.equal(m.vpp,null); assert.equal(m.lrPlus,null); near(m.vpn,.5,1e-15);
  const isolated=api.computeMetrics(50,10,0.01,90,0.01,'higher',50);
  assert.equal(isolated.lrPlus,Infinity); assert.equal(isolated.lrMinus,0);
});
test('Rare-screening preset reproduces the Q9 statement', () => {
  const q=api.QUIZ_BANK.find(q=>q.id==='Q9'),m=evaluate(q.scenario);
  near(m.sens,.93); near(m.spec,.99); near(m.vpp,93/192,1e-6);
  assert.ok(m.fp>m.vp); assert.equal(m.fp,10); assert.equal(m.vp,9);
  near(evaluate(api.PRESETS.rareScreening).vpp,m.vpp,0);
});
test('Q14, Q17 and Q20 load the numbers used in their questions', () => {
  const q=id=>evaluate(api.QUIZ_BANK.find(q=>q.id===id).scenario);
  near(q('Q14').auc,.5,0); near(q('Q17').sens,.9); near(q('Q17').spec,.9);
  near(q('Q17').lrPlus,9,1e-5); near(q('Q20').vpp,9/13,1e-6);
});
test('Quiz has balanced, valid correct-answer positions in all languages', () => {
  assert.equal(api.QUIZ_BANK.length,20);
  const positions=[0,0,0];
  for(const q of api.QUIZ_BANK) {
    positions[q.correct]++;
    for(const lang of ['ca','es','en']) { assert.equal(q.options[lang].length,3); assert.ok(q.question[lang] && q.explanation[lang]); }
    assert.doesNotThrow(()=>evaluate(q.scenario));
  }
  assert.ok(Math.max(...positions)-Math.min(...positions)<=1);
});
test('All languages contain matching keys and nine handbook sections', () => {
  for(const lang of ['ca','es','en']) {
    assert.deepEqual(Object.keys(api.I18N[lang]).sort(),Object.keys(api.I18N.ca).sort());
    assert.equal((api.HANDBOOK[lang].match(/<section /g)||[]).length,9);
  }
});
test('PR baseline, prevalence dependence, undefined no-case population and threshold invariance', () => {
  const neutral={meanH:50,stdH:10,meanD:50,stdD:10,direction:'higher',prevPct:1};
  near(api.computeAuprc(neutral),0.01,1e-12);
  near(api.computeAuprc({...neutral,prevPct:20}),0.2,1e-12);
  assert.equal(api.computeAuprc({...neutral,prevPct:0}),null);
  near(api.computeAuprc({...neutral,prevPct:100}),1,1e-12);
  const ai={...api.PRESETS.radiographyAI,direction:'higher',prevPct:1};
  // 1e-5 tolerance includes the existing Gaussian-tail approximation error.
  // Independent references: Python math.erfc + midpoint quadrature, 200,000 intervals.
  near(api.computeAuprc(ai),0.548303672253414,1e-5);
  near(api.computeAuprc({...ai,prevPct:20}),0.9118498262448719,1e-5);
  near(api.computeAuprc({...ai,cutoff:20}),api.computeAuprc({...ai,cutoff:80}),0);
  const points=api.buildPrPoints(ai);
  near(points.at(-1).recall,1,0);near(points.at(-1).precision,0.01,1e-15);
  for(let i=0;i<points.length;i++) {
    assert.ok(points[i].precision>=0 && points[i].precision<=1);
    if(i) assert.ok(points[i].recall>=points[i-1].recall);
  }
});
test('Logit-normal scores are bounded, invertible, normalized and preserve tail probabilities', () => {
  for(const x of [5,10,30,50,62,90,95]) {
    const score=api.scoreFromLatent(x);assert.ok(score>0 && score<1);
    near(api.latentFromScore(score),x,1e-12);
  }
  const n=100000,step=1/n;
  for(const [mean,sd] of [[30,12],[62,12]]) {
    let total=0,above=0;
    for(let i=0;i<n;i++) {const score=(i+0.5)*step,mass=api.scorePdf(score,mean,sd)*step;total+=mass;if(score>=0.5)above+=mass;}
    near(total,1,1e-8);near(above,api.normalSf(50,mean,sd),2e-7);
  }
  assert.equal(api.scorePdf(0,30,12),0);assert.equal(api.scorePdf(1,30,12),0);
});

console.log(`\n${passed} regression groups passed.`);
