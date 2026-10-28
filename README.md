# Diagnostic Test Simulator (100% Offline)

<p align="center">
  <b><a href="README.md">English</a></b> · 
  <a href="README.ca.md">Català</a> · 
  <a href="README.es.md">Español</a>
</p>

<p align="center">
  <a href="https://daniel-alomar.github.io/SimuladorProvesDiag/"><img src="https://img.shields.io/badge/Deployment-GitHub%20Pages-blue?logo=github" alt="GitHub Pages"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg" alt="CC BY-NC 4.0 License"></a>
  <img src="https://img.shields.io/badge/Languages-EN%20%7C%20CA%20%7C%20ES-orange" alt="Multilingual">
  <img src="https://img.shields.io/badge/Offline-100%25%20Autonomous-success" alt="100% Offline">
</p>

An autonomous, interactive web simulator designed for students, educators, clinicians, and researchers in epidemiology, biostatistics, and medicine. It enables real-time visualization and manipulation of the mathematical and probabilistic foundations governing continuous quantitative diagnostic tests.

---


On screens of at least 1,100 × 650 CSS pixels, a fixed summary shows TP, FP, FN and TN while controls are adjusted. Disable it with “Show confusion matrix summary” or Escape. It is hidden in other tabs and on small screens. The density chart is capped at 260–360 pixels high on wide screens; the full matrix remains available.


The header contains one heading, one explanatory sentence and a link to the handbook’s audience and usage guide. The synthetic-data note appears alongside the active scenario. Chapter 3 distinguishes “95% reliable” from disease probability after a positive result. Chapter 5 adds a two-positive-test example: at 1% prevalence and 95% sensitivity and specificity, risk changes from 1% to 16.1% and then 78.5%, only under conditional independence. Repeating the same test does not guarantee this condition. This is a theoretical handbook example; the controls still model a single test.

## Visual interpretation and accessibility

The simulator remains the starting tab. Guided experiments identify the scenarios they load (1, 8 and 9). Sensitivity and specificity, predictive values, and Bayes chapters now introduce the concepts before their tables and formulas.

The ROC plot is capped at 260 pixels and cohort cells have a bounded height. The matrix retains its denominators, labels and values.

Solid and dashed lines distinguish the population curves. Outcome patterns provide an additional cue: TP solid, FP diagonal, FN crosshatched and TN horizontal. Patterns appear in plot regions, the legend and both population grids, including fractional cells. Labels and counts also make information available without colour alone. These changes follow WCAG 1.4.1 but do not constitute certification or a complete accessibility audit.

## Before you start: who it is for and how to use it

An open learning tool for anyone who wants to understand how a test provides information—and why it can also be wrong.

### Who is it for?

The simulator is primarily intended for biomedical and biostatistics students, as well as learners in medicine, nursing, pharmacy, biology, epidemiology and other health sciences. It also supports educators, professionals in training and anyone revisiting diagnostic testing.

You do not need a healthcare qualification or prior mastery of the formulas. Anyone can use it to explore false positives and false negatives, understand why a result is not a certainty, and see how disease frequency affects interpretation.

### What can you learn?

- Connect the cutoff with sensitivity, specificity and both types of error.
- Distinguish the probability of a result among people with or without disease from disease probability after a result.
- Understand confusion matrices, predictive values, likelihood ratios and ROC curves.
- See how prevalence changes the meaning of a positive or negative result while conditional test performance remains fixed.

### When and how can you use it?

- In class: display a scenario, ask learners to predict the effect of moving the cutoff, then compare their predictions with the curves and counts.
- In seminars and practical sessions: compare scenarios in small groups and explain which errors increase or decrease, and why.
- For independent study: follow the handbook, try guided experiments and check your understanding with the self-assessment cases.
- For training and public education: illustrate rare-disease screening or explain why test results need context.

### A simple starting route

1. Choose a guided experiment and read its objective.
2. Predict what will change, then adjust one variable at a time.
3. Compare the curves, four counts and disease probability before and after the test.
4. Explain the result in your own words and consult the relevant handbook chapter.

### Scope and limits

This is an educational simulator using synthetic data and arbitrary units. Scenario names provide context; they do not necessarily reproduce a commercial test’s performance or laboratory cutoffs. It is not designed to interpret personal laboratory results, validate a test or make patient-care decisions. Clinical application requires validated evidence, a suitable reference standard and the individual patient’s context.

Open it in a browser without installing software or creating an account. Once you have the file, it works offline; external references require Internet access. Explore with a mouse or keyboard in Catalan, Spanish or English. For reuse or adaptation, see the CC BY-NC 4.0 licence in the credits.

## Layout and guided experiments

Wide screens use two independently flowing columns: distributions, probabilities and counts on the left; controls and ROC on the right. This removes empty grid cells between panels of different heights. Below 1,100 pixels, the order is distributions, controls, probabilities, counts and ROC.

The three starting cards explain the model and purpose of each experiment. “Interpret a positive result” loads the named “Bayes · 90% sensitivity and specificity” preset: 20% prevalence, 69.23% PPV and 2.70% disease probability after a negative result. Focus moves to the prevalence control. Editing parameters still marks the model as custom.

## Teaching structure and clinical interpretation guide

The simulator follows three steps: **observe distributions, adjust the model, and interpret results**. Probability cards show prior risk, disease probability after a positive result, and residual disease risk after a negative result. Density, count and AUC explanations can be expanded on demand.

The handbook includes “Before you start”, covering its audience and uses, followed by seven chapters: distributions and thresholds; sensitivity and specificity; predictive values; ROC, AUC and Youden; Bayes and likelihood ratios; clinical interpretation; glossary and references. Each chapter starts with a key idea, with expandable formulas.

Worked examples load directly into the simulator: thresholds, rare screening, a decreased marker, Bayesian updating, and a crossing ROC. The Bayesian example compares prior risks of 5%, 20% and 80% at 90% sensitivity and specificity. The screening example distinguishes fractional expected counts from rounded matrix counts.

The clinical guide covers the diagnostic question, prior risk, applicability of evidence, risk updating, consequences and remaining uncertainty. It distinguishes biomarker cutoffs from clinical decision thresholds. Examples are synthetic and are not clinical protocols.

Navigation includes a skip link, an active chapter indicator and keyboard focus on example controls. Printing the handbook temporarily expands its formulas.

## 👥 Authorship & Academic Team

* **Lead Author:** [Daniel Alomar-Claramonte](https://github.com/daniel-alomar)
* **Co-authors:** Jordi Piera-Jimenez, Ferran Torres, Laia Humbert-Vidan, Caridad Pontes, Gerard Carod-Rovira
* **AI-Assisted Engineering:** Google Gemini; review and corrections assisted by Codex

---

## ✨ Key Features

* **100% Offline Architecture (Zero-CDN):** Runs completely offline by simply double-clicking the HTML file in any modern browser. Built with a self-contained CSS design system, inline SVG iconography, and native system typography—zero external network calls.
* **3-Tab Pedagogical Architecture:**
  1. **Concise Interactive Simulator:** Clutter-free visual workspace featuring a 2D AABB anti-collision label engine, a prior/post-test disease probability summary, an active AUC grade reference table, and a 100-block cohort icon array with fractional colors ($N = 1,000$).
  2. **Theoretical Handbook & Clinical Guide:** Comprehensive 6-chapter academic reference covering continuous distributions, *SnNout* and *SpPin* clinical rules, the Accuracy Paradox, ROC/AUC geometry, the Bayesian Bridge (step-by-step *Odds* updating and Fagan's Nomogram), and foundational peer-reviewed references.
  3. **20 Clinical Vignettes & Self-Assessment Bank:** 20 graded clinical decision challenges across 5 thematic blocks (Cutoff & Polarity, Confusion Matrix & Intrinsic Metrics, Prevalence & Accuracy Paradox, ROC Curve & Youden's Index, and Likelihood Ratios & Bayes), complete with category filtering, live score tracking, and one-click simulator loading.
* **8 Built-in Clinical Scenarios with Distinct Geometries:**
  1. *High-Sensitivity Troponin* ($\mu_H=38, \sigma_H=8 \mid \mu_D=62, \sigma_D=8, c=50, P=15\%$ — Classic elevated biomarker).
  2. *Platelets in Thrombocytopenia* ($\mu_H=68, \sigma_H=7 \mid \mu_D=34, \sigma_D=10, c=49, P=18\%$ — Decreased marker / inverse clinical polarity).
  3. *Excellent Assay* ($\mu_H=26, \sigma_H=5.5 \mid \mu_D=74, \sigma_D=6, c=49.5, P=20\%$ — High population separation, $\text{AUC} > 0.99$).
  4. *Weak Assay* ($\mu_H=46, \sigma_H=11 \mid \mu_D=54, \sigma_D=11, c=50, P=25\%$ — Substantial biological overlap).
  5. *Unequal Variance* ($\mu_H=34, \sigma_H=4.5 \mid \mu_D=62, \sigma_D=16, c=45, P=15\%$ — Biological heteroscedasticity $\sigma_D > \sigma_H$).
  6. *Emergency Rule-Out D-Dimer* ($\mu_H=32, \sigma_H=9 \mid \mu_D=64, \sigma_D=11, c=42, P=12\%$ — Synthetic sensitivity example, $\text{LR}^- < 0.1$).
  7. *Oncology Confirmation* ($\mu_H=42, \sigma_H=6 \mid \mu_D=68, \sigma_D=10, c=60, P=30\%$ — Synthetic specificity example, $\text{LR}^+ > 10$).
  8. *Rare Disease Screening* ($\mu_H\approx29.368261, \sigma_H=5 \mid \mu_D\approx58.709492, \sigma_D=12, c=41, P=1\%$ — Calibrated to Sens≈93%, Spec≈99%, PPV≈48.4%; full precision is retained in the application).
* **Trilingual with Auto-Detection:** Automatically detects user browser language preference (Catalan, Spanish, English) with manual override and fault-tolerant `localStorage` persistence.

---

## 📐 Mathematical Foundations

### 1. Conditional Metrics (Fixed Distributions)

Considering the healthy control population $X_H \sim \mathcal{N}(\mu_H, \sigma_H^2)$ and the diseased population $X_D \sim \mathcal{N}(\mu_D, \sigma_D^2)$ with cumulative distribution function $\Phi(x; \mu, \sigma)$:

* **When higher values indicate pathology ($X \ge c$):**
  $$\text{Sensitivity} = 1 - \Phi(c; \mu_D, \sigma_D) = \frac{\text{TP}}{\text{TP} + \text{FN}}$$
  $$\text{Specificity} = \Phi(c; \mu_H, \sigma_H) = \frac{\text{TN}}{\text{TN} + \text{FP}}$$

* **When lower values indicate pathology ($X \le c$):**
  $$\text{Sensitivity} = \Phi(c; \mu_D, \sigma_D)$$
  $$\text{Specificity} = 1 - \Phi(c; \mu_H, \sigma_H)$$

* **Youden's Index ($J$):**
  $$J = \text{Sensitivity} + \text{Specificity} - 1$$

* **Likelihood Ratios ($LR^+$ and $LR^-$):**
  $$LR^+ = \frac{\text{Sensitivity}}{1 - \text{Specificity}}, \qquad LR^- = \frac{1 - \text{Sensitivity}}{\text{Specificity}}$$

---

### 2. Predictive Clinical Metrics & The Bayesian Bridge

Given a pre-test disease prevalence $P = P(\text{Disease})$ and pre-test odds $\text{Odds}_{\text{pre}} = \frac{P}{1 - P}$:

* **Bayesian Odds Updating:**
  $$\text{Odds}_{\text{post}} = \text{Odds}_{\text{pre}} \times LR, \qquad P_{\text{post}} = \frac{\text{Odds}_{\text{post}}}{1 + \text{Odds}_{\text{post}}}$$

* **Positive Predictive Value (PPV) & Negative Predictive Value (NPV):**
  $$\text{PPV} = \frac{\text{Sensitivity} \cdot P}{\text{Sensitivity} \cdot P + (1 - \text{Specificity}) \cdot (1 - P)}, \qquad \text{NPV} = \frac{\text{Specificity} \cdot (1 - P)}{\text{Specificity} \cdot (1 - P) + (1 - \text{Sensitivity}) \cdot P}$$

* **Overall Accuracy:**
  $$\text{Accuracy} = \text{Sensitivity} \cdot P + \text{Specificity} \cdot (1 - P) = \frac{\text{TP} + \text{TN}}{N}$$

---

## Model assumptions and interpretation

The eight named scenarios are **synthetic teaching examples in arbitrary units**, not clinically calibrated assays or treatment protocols. “No disease” means absence of the target disease according to a reference standard.

- The two curves are conditional Gaussian densities; each full area is one. Their height is not a patient count. Changing prevalence alone leaves these distributions unchanged.
- Sensitivity, specificity and likelihood ratios remain prevalence-independent **only while the conditional distributions and cutoff stay fixed**. Real clinical populations can differ through the spectrum effect.
- The density viewport covers at least six standard deviations on both sides of each mean. Gaussian tails extend beyond it; negative values are a mathematical model feature.
- The full ROC includes (0,0) and (1,1). Its AUC respects the chosen polarity and can fall below 0.5. AUC=0.5 alone does not imply identical distributions or a diagonal ROC when variances differ.
- Clinical interpretation reports prior disease probability, PPV and disease probability after a negative (1−NPV). SnNout, SpPin, LR+>10 and LR−<0.1 do not guarantee confirmation or exclusion. At 90% prior probability, LR−=0.1 still leaves 47.4% post-test probability.
- The N=1,000 table contains **rounded expected counts**, not a random sample. Cell percentages use the whole cohort. Predictive values use unrounded probabilities and may differ from ratios based on the displayed counts. Fractional colors in 100 icons preserve all integer table counts (one icon = ten people).
- Undefined predictive values are displayed as “—”; infinite likelihood ratios as “∞”. Very small probabilities are formatted without changing their values. The model does not estimate clinical confidence intervals.

### AUC and Youden

For independent Gaussian case and control measurements:

$$AUC_{higher}=\Phi\!\left(\frac{\mu_D-\mu_H}{\sqrt{\sigma_D^2+\sigma_H^2}}\right),\qquad AUC_{lower}=1-AUC_{higher}.$$

$$J(c)=Sensitivity(c)-FPR(c),\qquad Balanced\ accuracy=\frac{J(c)+1}{2}.$$

The optimizer searches **[5,95] in steps of 0.1**, including both endpoints. It finds an approximate maximum over that range, weights group error rates equally, and does not incorporate prevalence or costs per patient. It does not search for unrestricted or two-cutoff decision rules.

### Accessibility and validation

Controls have programmatic labels; tabs support arrow keys, Home and End; chart summaries and the confusion matrix are available as text and a semantic table. Language changes update the document language. Tooltips work with keyboard focus, quiz feedback is announced, and answer focus is preserved. Numeric entries are validated before state changes.

Run the standalone numerical regression checks with `node tests/verify.mjs`. They cover Gaussian tails, polarity, Bayesian identities, population totals, ROC integration, Youden and calibrated quiz scenarios. These checks do not replace a visual browser or assistive-technology audit.

References: [NIST normal distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3661.htm), [BMJ likelihood ratios](https://www.bmj.com/content/329/7458/168), [BMJ spectrum effect](https://www.bmj.com/content/353/bmj.i3139).

---

## 💻 Local Usage (100% Offline)

1. Clone or download this repository:
   ```bash
   git clone https://github.com/daniel-alomar/SimuladorProvesDiag.git
   ```
2. Double-click `index.html` to open it directly in any modern browser (Chrome, Firefox, Safari, Edge). **Works completely offline without internet access, local servers, or build tools.**

---

## 💬 Feedback & Bug Reports

Suggestions, new clinical scenarios, and bug reports are welcome! Please submit them via [**GitHub Issues**](https://github.com/daniel-alomar/SimuladorProvesDiag/issues).

---

## 📄 License

This project is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)](LICENSE) — you are free to share, copy, distribute, and adapt this work for non-commercial educational and research purposes, provided appropriate attribution is given to the academic team listed above.

## Precision–recall and radiography AI

ROC and PR are shown together with the current operating point. PR plots recall (sensitivity) against precision (PPV), with a prevalence baseline and AUPRC. With conditional distributions fixed, prevalence changes PR but not ROC. Simpson integration uses 4,096 intervals over ±10 case standard deviations. This continuous-model area is not sample average precision; it is cached when only the threshold changes.

Scenario 10 uses synthetic scores in (0,1) against a binary reference. The distributions are logit-normal: μ and σ describe logit(score). The increasing transformation preserves ranking and classification calculations. It is neither a calibrated model nor real AI validation data, and does not represent uncertainty for a single radiograph.

Try scenario 10 and change prevalence from 1% to 20%: AUPRC ≈ 0.5483 → 0.9118 while AUROC remains unchanged. The trilingual handbook explains interpretation and limitations.

Validation: 21 numerical and 23 simulated-DOM interaction groups, including independent erfc references, density normalization and score/control conversions. This version has not been visually verified in a real browser.
