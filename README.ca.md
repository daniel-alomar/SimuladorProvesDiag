# Simulador de Proves Diagnòstiques (100% Offline)

<p align="center">
  <a href="README.md">English</a> · 
  <b><a href="README.ca.md">Català</a></b> · 
  <a href="README.es.md">Español</a>
</p>

<p align="center">
  <a href="https://daniel-alomar.github.io/SimuladorProvesDiag/"><img src="https://img.shields.io/badge/Desplegament-GitHub%20Pages-blue?logo=github" alt="GitHub Pages"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/Llicència-CC%20BY--NC%204.0-lightgrey.svg" alt="Llicència CC BY-NC 4.0"></a>
  <img src="https://img.shields.io/badge/Idiomes-CA%20%7C%20EN%20%7C%20ES-orange" alt="Multilingüe">
  <img src="https://img.shields.io/badge/Offline-100%25%20Autònom-success" alt="100% Offline">
</p>

Un simulador web interactiu i 100% autònom dissenyat per a estudiants, docents i investigadors dels camps de l'epidemiologia, la bioestadística i la medicina. Permet visualitzar i manipular en temps real els fonaments matemàtics i probabilístics darrere del rendiment d'una prova diagnòstica quantitativa contínua.

---


En pantalles de com a mínim 1.100 × 650 píxels CSS, un resum fix mostra VP, FP, FN i VN mentre ajustes els controls. Es pot desactivar amb «Mostrar resum de la matriu de confusió» o Esc. S’amaga a les altres pestanyes i en pantalles petites. El gràfic de densitat té una alçada limitada a 260–360 píxels en pantalla ampla; la matriu completa continua disponible.


La capçalera presenta un únic títol, una frase explicativa i l’enllaç als destinataris i usos del manual. La nota de dades sintètiques acompanya l’escenari actiu. El capítol 3 diferencia explícitament «95% de fiabilitat» de la probabilitat de malaltia després d’un positiu. El capítol 5 afegeix un exemple de dues proves positives: amb prevalença de l’1% i sensibilitat i especificitat del 95%, el risc passa de l’1% al 16,1% i després al 78,5%, només sota independència condicional. Repetir la mateixa prova no garanteix aquesta condició. És un exemple teòric del manual; els controls continuen modelant una única prova.

## Lectura visual i accessibilitat

L’entrada principal continua sent el simulador. Els experiments indiquen l’escenari que carreguen (1, 8 i 9). Els capítols de sensibilitat i especificitat, valors predictius i Bayes incorporen una introducció abans de les taules i fórmules.

La ROC té una mida màxima de 260 píxels i els quadres de la cohort tenen alçada limitada per evitar panells excessivament grans. La matriu conserva els denominadors, les etiquetes i els valors.

Les corbes de població es distingeixen amb línies contínues i discontínues. Els quatre resultats tenen també trames: VP sense trama, FP amb diagonals, FN amb diagonals creuades i VN amb línies horitzontals. Les trames es mostren a les àrees del gràfic, la llegenda i les dues graelles de població; les fraccions de quadre conserven el seu patró. Les etiquetes i els recomptes permeten consultar la informació sense dependre del color. Aquestes millores segueixen el criteri WCAG 1.4.1, però no constitueixen una certificació ni una auditoria completa d’accessibilitat.

## Abans de començar: per a qui és i com utilitzar-lo

Una eina oberta a qualsevol persona que vulgui entendre com una prova aporta informació i per què també pot equivocar-se.

### A qui va adreçat?

El simulador està pensat principalment per a estudiants de biomedicina i bioestadística, i també de medicina, infermeria, farmàcia, biologia, epidemiologia i altres ciències de la salut. Pot donar suport a docents, professionals en formació i persones que vulguin reforçar la seva comprensió de les proves diagnòstiques.

No cal tenir una titulació sanitària ni dominar les fórmules. També s’adreça a qualsevol persona interessada a entendre què són els falsos positius i els falsos negatius, per què un resultat no és una certesa i com influeix la freqüència d’una malaltia en la interpretació d’un test.

### Què hi pots aprendre?

- Relacionar el punt de tall amb la sensibilitat, l’especificitat i els dos tipus d’error.
- Distingir la probabilitat d’un resultat en persones amb o sense malaltia de la probabilitat de malaltia després d’un resultat.
- Entendre la matriu de confusió, els valors predictius, les raons de versemblança i les corbes ROC.
- Veure com la prevalença canvia el significat d’un positiu o d’un negatiu, encara que el rendiment condicional de la prova es mantingui fix.

### Quan i com es pot utilitzar?

- A classe: projecta un escenari, demana què passarà en moure el llindar i contrasta les prediccions amb les corbes i els recomptes.
- En seminaris i pràctiques: compara escenaris en petits grups i explica quin tipus d’error augmenta o disminueix, i per què.
- En estudi autònom: segueix el manual, prova els experiments guiats i utilitza els casos d’autoavaluació per comprovar què has entès.
- En formació i divulgació: il·lustra el cribratge de malalties poc freqüents o explica per què cal interpretar els resultats dins d’un context.

### Un recorregut senzill per començar

1. Tria un experiment guiat i llegeix-ne l’objectiu.
2. Abans de tocar res, prediu què canviarà. Modifica una sola variable cada vegada.
3. Observa conjuntament les corbes, els quatre recomptes i la probabilitat de malaltia abans i després del test.
4. Explica amb les teves paraules el resultat i consulta el capítol corresponent del manual.

### Abast i límits

És un simulador educatiu amb dades sintètiques i unitats arbitràries. Els noms dels escenaris serveixen per contextualitzar conceptes: no reprodueixen necessàriament el rendiment d’un test comercial ni els llindars d’un laboratori. No està dissenyat per interpretar una analítica personal, validar una prova ni prendre decisions assistencials. L’aplicació clínica requereix dades validades, un patró de referència adequat i el context de cada pacient.

Es pot obrir al navegador sense instal·lar programes ni crear un compte, i funciona sense connexió un cop tens el fitxer. Les referències externes sí que requereixen Internet. Pots explorar-lo amb el ratolí o el teclat i consultar-lo en català, castellà o anglès. Per reutilitzar-lo o adaptar-lo, consulta la llicència CC BY-NC 4.0 indicada als crèdits.

## Composició i experiments guiats

En pantalles amples, els panells flueixen en dues columnes independents: distribucions, probabilitats i recomptes a l’esquerra; controls i ROC a la dreta. S’eviten així les cel·les buides entre panells de diferent alçada. Per sota de 1.100 píxels, l’ordre és distribucions, controls, probabilitats, recomptes i ROC.

Les tres targetes d’inici indiquen el model i l’objectiu de l’experiment. «Interpretar un positiu» carrega l’escenari identificable «Bayes · sensibilitat i especificitat del 90%»: prevalença del 20%, VPP del 69,23% i risc després d’un negatiu del 2,70%. El focus passa al control de prevalença. Qualsevol canvi dels paràmetres continua marcant el model com a personalitzat.

## Organització didàctica i guia clínica

El simulador segueix tres passos: **observar les distribucions, modificar el model i interpretar els resultats**. Les targetes de probabilitat mostren el risc previ, el risc després d’un positiu i el risc residual després d’un negatiu. Les ajudes sobre densitat, recomptes i AUC es poden desplegar quan calen.

El manual inclou «Abans de començar», amb destinataris i usos, i set capítols: distribucions i llindar; sensibilitat i especificitat; valors predictius; ROC, AUC i Youden; Bayes i raons de versemblança; guia d’interpretació clínica; glossari i bibliografia. Cada capítol comença amb una idea clau i les fórmules es poden desplegar.

Els exemples es carreguen directament al simulador: llindar, cribratge rar, marcador disminuït, actualització bayesiana i ROC que creua la diagonal. El cas bayesià compara riscos previs del 5%, 20% i 80% mantenint sensibilitat i especificitat del 90%. El cas de cribratge diferencia els recomptes esperats fraccionaris dels enters que mostra la matriu.

La guia clínica proposa definir la pregunta, estimar el risc previ, comprovar l’aplicabilitat de l’evidència, actualitzar el risc, valorar les conseqüències i comunicar la incertesa. Distingeix el llindar del biomarcador dels llindars de decisió clínica. Els exemples són sintètics i no constitueixen protocols assistencials.

La navegació inclou accés directe al contingut, indicador de capítol actiu i focus de teclat als controls dels exemples. En imprimir el manual, les fórmules es despleguen temporalment.

## 👥 Autoria i Equip Docent

* **Autor principal:** [Daniel Alomar-Claramonte](https://github.com/daniel-alomar)
* **Coautors:** Jordi Piera-Jimenez, Ferran Torres, Laia Humbert-Vidan, Caridad Pontes, Gerard Carod-Rovira
* **Desenvolupament tècnic assistit:** Google Gemini; revisió i correccions amb assistència de Codex

---

## ✨ Característiques Principals

* **Arquitectura 100% Offline (Zero-CDN):** Funciona sense connexió a Internet obrint directament el fitxer HTML en qualsevol navegador. Incorpora el seu propi motor CSS, iconografia SVG i tipografia nativa sense dependre de cap servidor extern.
* **Estructura pedagògica en 3 pestanyes:**
  1. **Simulador Interactiu Concís:** Visualització neta d'alt impacte amb motor anticol·lisió 2D per a etiquetes dinàmiques, resum de probabilitat de malaltia abans i després del test, escala de llindars d'AUC i matriu iconogràfica de 100 blocs amb colors fraccionats ($N = 1.000$ pacients).
  2. **Fonaments Teòrics i Guia Clínica:** Manual acadèmic extens de 6 capítols sobre el paradigma continu, regles *SnNout* i *SpPin*, la Paradoxa de l'Exactitud, corbes ROC/AUC, el Pont de Bayes (càlcul pas a pas amb *Odds* i Nomograma de Fagan) i referències bibliogràfiques fonamentals.
  3. **Banc de 20 Casos Clínics i Autoavaluació:** 20 reptes clínics interactius organitzats en 5 blocs temàtics (Llindar i Polaritat, Matriu i Mètriques Intrínseques, Prevalença i Paradoxa d'Exactitud, Corba ROC i Youden, i Raons de Versemblança i Bayes), amb filtre per categories, marcador de puntuació en viu i càrrega directa a l'escenari del simulador.
* **8 Escenaris Clínics Preconfigurats amb Distribucions Diferenciades:**
  1. *Troponina d'alta sensibilitat* ($\mu_S=38, \sigma_S=8 \mid \mu_M=62, \sigma_M=8, c=50, P=15\%$ — Marcador elevat clàssic).
  2. *Plaquetes en trombocitopènia* ($\mu_S=68, \sigma_S=7 \mid \mu_M=34, \sigma_M=10, c=49, P=18\%$ — Marcador disminuït / polaritat inversa).
  3. *Test excel·lent* ($\mu_S=26, \sigma_S=5.5 \mid \mu_M=74, \sigma_M=6, c=49.5, P=20\%$ — Alta separació poblacional, $\text{AUC} > 0,99$).
  4. *Test feble* ($\mu_S=46, \sigma_S=11 \mid \mu_M=54, \sigma_M=11, c=50, P=25\%$ — Gran solapament biològic).
  5. *Variàncies desiguals* ($\mu_S=34, \sigma_S=4.5 \mid \mu_M=62, \sigma_M=16, c=45, P=15\%$ — Heteroscedasticitat biològica $\sigma_M > \sigma_S$).
  6. *Exclusió a Urgències amb Dímer-D* ($\mu_S=32, \sigma_S=9 \mid \mu_M=64, \sigma_M=11, c=42, P=12\%$ — Exemple sintètic de sensibilitat, $\text{RV}^- < 0,1$).
  7. *Confirmació Oncològica* ($\mu_S=42, \sigma_S=6 \mid \mu_M=68, \sigma_M=10, c=60, P=30\%$ — Exemple sintètic d’especificitat, $\text{RV}^+ > 10$).
  8. *Cribratge de Malaltia Rara* ($\mu_S\approx29.368261, \sigma_S=5 \mid \mu_M\approx58.709492, \sigma_M=12, c=41, P=1\%$ — Calibrat a Sens≈93%, Esp≈99%, VPP≈48,4%; l’aplicació conserva tota la precisió).
* **Trilingüe natiu amb autodetecció:** Detecció intel·ligent de l'idioma del navegador de l'usuari amb selector manual (català, castellà i anglès) i persistència segura a `localStorage`.

---

## 📐 Fonaments Matemàtics

### 1. Mètriques Condicionals (Distribucions Fixes)

Considerant la població sana $X_S \sim \mathcal{N}(\mu_S, \sigma_S^2)$ i la població malalta $X_M \sim \mathcal{N}(\mu_M, \sigma_M^2)$ amb funció de distribució acumulada $\Phi(x; \mu, \sigma)$:

* **Quan valors més alts indiquen patologia ($X \ge c$):**
  $$\text{Sensibilitat} = 1 - \Phi(c; \mu_M, \sigma_M) = \frac{\text{VP}}{\text{VP} + \text{FN}}$$
  $$\text{Especificitat} = \Phi(c; \mu_S, \sigma_S) = \frac{\text{VN}}{\text{VN} + \text{FP}}$$

* **Quan valors més baixos indiquen patologia ($X \le c$):**
  $$\text{Sensibilitat} = \Phi(c; \mu_M, \sigma_M)$$
  $$\text{Especificitat} = 1 - \Phi(c; \mu_S, \sigma_S)$$

* **Índex de Youden ($J$):**
  $$J = \text{Sensibilitat} + \text{Especificitat} - 1$$

* **Raons de Versemblança ($RV^+$ i $RV^-$):**
  $$RV^+ = \frac{\text{Sensibilitat}}{1 - \text{Especificitat}}, \qquad RV^- = \frac{1 - \text{Sensibilitat}}{\text{Especificitat}}$$

---

### 2. Mètriques Clíniques Predictives i Pont de Bayes

Per a una prevalença poblacional $P = P(\text{Malalt})$ i oportunitat relativa pre-test $\text{Odds}_{\text{pre}} = \frac{P}{1 - P}$:

* **Actualització Bayesiana per Odds:**
  $$\text{Odds}_{\text{post}} = \text{Odds}_{\text{pre}} \times RV, \qquad P_{\text{post}} = \frac{\text{Odds}_{\text{post}}}{1 + \text{Odds}_{\text{post}}}$$

* **Valor Predictiu Positiu (VPP) i Negatiu (VPN):**
  $$\text{VPP} = \frac{\text{Sensibilitat} \cdot P}{\text{Sensibilitat} \cdot P + (1 - \text{Especificitat}) \cdot (1 - P)}, \qquad \text{VPN} = \frac{\text{Especificitat} \cdot (1 - P)}{\text{Especificitat} \cdot (1 - P) + (1 - \text{Sensibilitat}) \cdot P}$$

* **Exactitud Global (*Accuracy*):**
  $$\text{Exactitud} = \text{Sensibilitat} \cdot P + \text{Especificitat} \cdot (1 - P) = \frac{\text{VP} + \text{VN}}{N}$$

---

## Hipòtesis del model i interpretació

Els vuit escenaris són **exemples docents sintètics en unitats arbitràries**, no proves calibrades clínicament ni protocols terapèutics. «Sense malaltia» indica absència de la malaltia d’interès segons un patró de referència.

- Les dues corbes són densitats gaussianes condicionals; cada àrea completa val u. L’alçada no és un recompte de persones. Canviar només la prevalença no modifica les distribucions.
- Sensibilitat, especificitat i raons de versemblança són independents de la prevalença **si mantenim fixes les distribucions condicionals i el llindar**. Les poblacions clíniques reals poden diferir per l’efecte d’espectre.
- La finestra de densitat inclou almenys sis desviacions estàndard a cada costat de cada mitjana. Les cues normals s’estenen més enllà; els valors negatius són una propietat del model matemàtic.
- La ROC completa inclou (0,0) i (1,1). L’AUC respecta la polaritat seleccionada i pot ser inferior a 0,5. AUC=0,5 no implica per si sola distribucions iguals ni una ROC diagonal si les variàncies difereixen.
- La interpretació mostra probabilitat prèvia de malaltia, VPP i risc després d’un negatiu (1−VPN). SnNout, SpPin, RV+>10 i RV−<0,1 no garanteixen confirmació ni exclusió. Amb probabilitat prèvia del 90%, RV−=0,1 encara deixa un risc posterior del 47,4%.
- La taula de N=1.000 conté **recomptes esperats arrodonits**, no una mostra aleatòria. Els percentatges de les cel·les es refereixen a tota la cohort. Els valors predictius es calculen sense arrodonir i poden diferir dels quocients de la taula. Els colors fraccionats dels 100 pictogrames preserven tots els recomptes enters (un quadre = deu persones).
- Els valors predictius no definits es mostren com «—» i les RV infinites com «∞». Les probabilitats molt petites es formaten sense alterar-ne el valor. El model no estima intervals de confiança clínics.

### AUC i Youden

Per a mesures gaussianes independents de cas i control:

$$AUC_{alt}=\Phi\!\left(\frac{\mu_M-\mu_S}{\sqrt{\sigma_M^2+\sigma_S^2}}\right),\qquad AUC_{baix}=1-AUC_{alt}.$$

$$J(c)=Sens(c)-FPR(c),\qquad Exactitud\ equilibrada=\frac{J(c)+1}{2}.$$

L’optimitzador cerca en **[5,95], amb pas 0,1**, incloent-hi els extrems. Troba un màxim aproximat dins d’aquest interval, pondera igual les taxes d’error dels grups i no incorpora prevalença ni costos per pacient. No cerca regles sense restricció ni de dos llindars.

### Accessibilitat i validació

Els controls tenen etiquetes associades; les pestanyes admeten fletxes, Home i End; les gràfiques tenen resums textuals i la matriu és una taula semàntica. El canvi d’idioma actualitza la llengua del document. Les ajudes funcionen amb focus de teclat, el retorn dels exercicis s’anuncia i el focus de la resposta es conserva. Les entrades numèriques es validen abans de modificar l’estat.

Executa les proves numèriques amb `node tests/verify.mjs`. Comproven cues gaussianes, polaritat, identitats de Bayes, totals poblacionals, integració ROC, Youden i escenaris calibrats. Aquestes proves no substitueixen una auditoria visual de navegador o de tecnologies de suport.

Referències: [distribució normal, NIST](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3661.htm), [raons de versemblança, BMJ](https://www.bmj.com/content/329/7458/168), [efecte d’espectre, BMJ](https://www.bmj.com/content/353/bmj.i3139).

---

## 💻 Execució en Local (100% Offline)

1. Clona o descarrega el repositori:
   ```bash
   git clone https://github.com/daniel-alomar/SimuladorProvesDiag.git
   ```
2. Fes doble clic directament sobre `index.html` per obrir-lo a qualsevol navegador web modern (Chrome, Firefox, Safari, Edge). **Funciona immediatament sense connexió a Internet.**

---

## 💬 Suggeriments i Errors

Qualsevol suggeriment de millora, nou escenari clínic o notificació d'errors es pot enviar directament a través de la pestanya de [**GitHub Issues**](https://github.com/daniel-alomar/SimuladorProvesDiag/issues) del repositori.

---

## 📄 Llicència

Aquest projecte es distribueix sota la llicència [Creative Commons Reconeixement-NoComercial 4.0 Internacional (CC BY-NC 4.0)](LICENSE) — ets lliure de compartir, copiar, distribuir i adaptar el material per a qualsevol finalitat docent, de recerca o no comercial, reconeixent degudament l'autoria de l'equip docent esmentat anteriorment.

## Precision–recall i IA de radiografies

La ROC i la PR apareixen juntes, amb el punt del llindar actual. La PR mostra sensibilitat (recall), VPP (precision), la prevalença de referència i AUPRC. Amb distribucions fixes, la prevalença canvia PR i VPP però no ROC. L’àrea PR s’integra amb Simpson en 4.096 intervals sobre ±10 desviacions dels casos; no és average precision mostral. El resultat es reutilitza quan només canvia el llindar.

L’escenari 10 representa scores sintètics entre 0 i 1 davant d’un patró binari. Les distribucions són logit-normals: els controls μ i σ descriuen logit(score). La transformació creixent conserva l’ordenació i els càlculs de classificació; els valors visibles i el llindar s’expressen en l’escala corresponent. No és un model calibrat ni dades d’una IA real. El manual explica també la diferència respecte d’una distribució d’incertesa individual.

Prova suggerida: escenari 10, prevalença 1% → 20%, sense canviar distribucions. L’AUPRC passa aproximadament de 0,5483 a 0,9118; l’AUROC no canvia. La PR no és independent de la prevalença i no substitueix els costos clínics.

Verificació: 21 grups numèrics i 23 grups d’interacció en DOM simulat. Inclou referències independents amb erfc, normalització de densitats, transformació de scores i actualització dels controls. No s’ha verificat visualment aquesta versió en un navegador real.
