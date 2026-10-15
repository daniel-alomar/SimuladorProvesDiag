# Simulador de Rendiment de Proves Diagnòstiques

<p align="center">
  <a href="README.md">English</a> · 
  <b><a href="README.ca.md">Català</a></b> · 
  <a href="README.es.md">Español</a>
</p>

<p align="center">
  <a href="https://pages.github.com/"><img src="https://img.shields.io/badge/Desplegament-GitHub%20Pages-blue?logo=github" alt="GitHub Pages"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/Llicència-CC%20BY--NC%204.0-lightgrey.svg" alt="Llicència CC BY-NC 4.0"></a>
  <img src="https://img.shields.io/badge/Idiomes-CA%20%7C%20EN%20%7C%20ES-orange" alt="Multilingüe">
  <img src="https://img.shields.io/badge/Dependències-Zero-success" alt="Zero Dependències">
</p>

Un simulador web interactiu dissenyat per a estudiants, docents i investigadors dels àmbits de l'epidemiologia, la bioestadística i la medicina basada en l'evidència. Permet visualitzar i manipular en temps real els fonaments matemàtics i probabilístics que regeixen el rendiment d'una prova diagnòstica quantitativa contínua, l'establiment de punts de tall i l'anàlisi de corbes ROC.

---

## 🎯 Objectiu i Visió General

En el diagnòstic clínic i l'anàlisi de biomarcadors, els resultats rarament es presenten com a categories binàries pures; la immensa majoria segueixen distribucions contínues que se superposen entre individus sans i malalts. L'elecció del punt de tall (*cutoff*) determina de manera crítica l'equilibri clínic entre falsos positius i falsos negatius.

Aquest simulador permet experimentar com interactuen:

* **El llindar de decisió:** Arrossega la línia discontínua directament damunt del gràfic de densitat o utilitza l'optimitzador automàtic de Youden.
* **La direccionalitat clínica:** Comprèn tant els marcadors on concentracions elevades indiquen patologia (ex: troponina en infart de miocardi, proteïna C reactiva) com aquells on el dèficit indica malaltia (ex: recompte plaquetari en trombocitopènia, hemoglobina en anèmia, limfòcits CD4).
* **Dispersió poblacional heterogènia:** Modela la variabilitat biològica real on els individus malalts solen presentar una variància ($\sigma_M^2$) superior a la dels controls sans.
* **La influència de la prevalença:** Observa com la prevalença altera de forma determinant el Valor Predictiu Positiu (VPP), el Valor Predictiu Negatiu (VPN) i l'Exactitud Global (*Accuracy*), sense alterar la Sensibilitat ni l'Especificitat intrínseques.
* **Corba ROC i Raons de Versemblança:** Traçat automàtic de la corba ROC (*Receiver Operating Characteristic*), càlcul analític de l'àrea sota la corba (AUC) amb qualificació qualitativa, i obtenció de les Raons de Versemblança positiva ($RV^+$) i negativa ($RV^-$).

---

## ✨ Característiques Principals

* **Interacció directa amb el gràfic:** Arrossega el llindar amb el ratolí o pantalla tàctil per recalcular instantàniament les àrees de densitat.
* **Sonda d'inspecció dinàmica:** En desplaçar el cursor sobre el gràfic de densitats, s'obté una lectura contínua del valor del biomarcador i la seva classificació binària resultant (Test + o Test -).
* **Inversió de sentit clínic:** Commuta en un sol clic entre *Valor Alt $\rightarrow$ Malalt* i *Valor Baix $\rightarrow$ Malalt*.
* **Optimitzador de Youden:** Botó per calcular i situar instantàniament el llindar en el punt de màxima eficàcia conjunta ($J$).
* **Matriu de confusió dinàmica:** Càlcul en temps real de Veritables Positius (VP), Falsos Positius (FP), Falsos Negatius (FN) i Veritables Negatius (VN) escalats per a una cohort estàndard de $N = 1.000$ pacients.
* **Panell de mètriques complet:** Càlcul instantani de Sensibilitat, Especificitat, VPP, VPN, Exactitud (*Accuracy*), Índex de Youden ($J$), $RV^+$ i $RV^-$.
* **Mini-gràfic ROC sincronitzat:** Mostra la trajectòria completa de la corba ROC i la posició exacta del punt operatiu actual.
* **Trilingüe natiu amb autodetecció:** Detecció intel·ligent de l'idioma del navegador de l'usuari amb selector manual (català, castellà i anglès) i persistència a `localStorage`.
* **Zero dependències:** Un sol fitxer autònom HTML5 + JavaScript pur + Tailwind CSS per CDN. Sense necessitat d'eines de compilació, servidors ni `npm`.

---

## 📐 Fonaments Matemàtics

### 1. Mètriques Intrínseques (Independents de la Prevalença)

Considerant la població sana $X_S \sim \mathcal{N}(\mu_S, \sigma_S^2)$ i la població malalta $X_M \sim \mathcal{N}(\mu_M, \sigma_M^2)$, amb funció de distribució acumulada de la normal estàndard $\Phi(z)$ i llindar de decisió $c$:

* **Quan valors més alts indiquen patologia ($X \ge c$):**
  $$\text{Sensibilitat} = 1 - \Phi\left(\frac{c - \mu_M}{\sigma_M}\right) = \frac{\text{VP}}{\text{VP} + \text{FN}}$$
  $$\text{Especificitat} = \Phi\left(\frac{c - \mu_S}{\sigma_S}\right) = \frac{\text{VN}}{\text{VN} + \text{FP}}$$

* **Quan valors més baixos indiquen patologia ($X \le c$):**
  $$\text{Sensibilitat} = \Phi\left(\frac{c - \mu_M}{\sigma_M}\right)$$
  $$\text{Especificitat} = 1 - \Phi\left(\frac{c - \mu_S}{\sigma_S}\right)$$

* **Índex de Youden ($J$):**
  Mesura l'eficàcia global del tall sense ponderar asimètricament els errors. Geomètricament equival a la distància vertical màxima sobre la diagonal d'atzar a la corba ROC:
  $$J = \text{Sensibilitat} + \text{Especificitat} - 1 \quad (0 \le J \le 1)$$

* **Raons de Versemblança (*Likelihood Ratios*):**
  Indiquen quantes vegades és més probable obtenir un determinat resultat en un individu malalt respecte a un de sa:
  $$\text{RV}^+ = \frac{\text{Sensibilitat}}{1 - \text{Especificitat}} = \frac{\text{Sensibilitat}}{\text{Taxa Falsos Positius}}$$
  $$\text{RV}^- = \frac{1 - \text{Sensibilitat}}{\text{Especificitat}} = \frac{\text{Taxa Falsos Negatius}}{\text{Especificitat}}$$
  *(Valors de $\text{RV}^+ > 10$ o de $\text{RV}^- < 0.1$ generen canvis diagnòstics concloents segons el nomograma de Fagan).*

* **Àrea Sota la Corba ROC (AUC analítica):**
  Per a dues distribucions normals, l'AUC correspon a la probabilitat que un malalt a l'atzar presenti un valor més indicatiu de patologia que un sa:
  $$\text{AUC} = \Phi\left(\frac{|\mu_M - \mu_S|}{\sqrt{\sigma_M^2 + \sigma_S^2}}\right)$$

---

### 2. Mètriques Clíniques Predictives (Dependents de la Prevalença)

Per a una prevalença poblacional coneguda $P = P(\text{Malalt})$:

* **Valor Predictiu Positiu (VPP):**
  $$\text{VPP} = \frac{\text{Sensibilitat} \cdot P}{\text{Sensibilitat} \cdot P + (1 - \text{Especificitat}) \cdot (1 - P)}$$

* **Valor Predictiu Negatiu (VPN):**
  $$\text{VPN} = \frac{\text{Especificitat} \cdot (1 - P)}{\text{Especificitat} \cdot (1 - P) + (1 - \text{Sensibilitat}) \cdot P}$$

* **Exactitud Global (*Accuracy*):**
  Proporció total d'individus classificats de forma correcta (sans i malalts) sobre el conjunt de la cohort:
  $$\text{Accuracy} = \frac{\text{VP} + \text{VN}}{\text{Total } (N)} = \text{Sensibilitat} \cdot P + \text{Especificitat} \cdot (1 - P)$$

> ⚠️ **La Paradoxa de l'Exactitud (*Accuracy Paradox*):**
> L'exactitud diagnòstica depèn directament de la prevalença. En patologies poc freqüents (ex: $P = 1\%$), un model trivial que predigui sistemàticament que tothom està sa aconseguirà una *Accuracy* enganyosa del **99%**, malgrat tenir una Sensibilitat del **0%** i no detectar cap cas real. Per aquest motiu, en biomedicina i ciència de dades clíniques mai s'avalua una prova exclusivament mitjançant l'*Accuracy*.

---

## 🤝 Com col·laborar

Aquest projecte és de codi obert i dóna la benvinguda a aportacions de docents, professionals clínics, estudiants i desenvolupadors. Pots contribuir de diverses maneres:

1. **Afegir nous casos clínics preconfigurats:** Biomarcadors d'ús habitual en cardiologia, oncologia, nefrologia o hematologia.
2. **Millores pedagògiques:** Propostes d'explicacions teòriques, exercicis docents autònoms o guies d'ús per a seminaris universitaris.
3. **Traduccions:** Millora dels textos existents o incorporació de nous idiomes.
4. **Optimitzacions de codi:** Millores d'accessibilitat, rendiment gràfic al Canvas o noves mètriques (ex: corbes de decisió clínica / *Decision Curve Analysis*).

### Passos per col·laborar:
1. Fes un **Fork** d'aquest repositori.
2. Crea una branca nova amb la teva millora (`git checkout -b feature/nou-marcador`).
3. Fes els teus canvis i desa'ls amb un missatge clar (`git commit -m "feat: afegeix cas de dímer D per a tromboembolisme"`).
4. Puja la branca al teu fork (`git push origin feature/nou-marcador`).
5. Obre un **Pull Request** a GitHub explicant el motiu de la proposta.

---

## 💡 Suggeriments i Feedback (Sense Spam)

Per protegir la seguretat del projecte i evitar l'spam als correus personals mitjançant rastrejadors automatitzats, **no publiquem adreces de correu electrònic en aquest repositori**.

Totes les propostes i consultes es canalitzen de manera transparent i comunitària:

* **Per proposar una millora o reportar una errada:** Obre directament un tiquet a la secció d'[Issues de GitHub](https://github.com/<el-teu-usuari>/<nom-del-repositori>/issues/new?labels=enhancement,feedback&title=%5BSuggeriment%5D+).
* **Per a dubtes docents o debats conceptuals:** Obre un fil a la pestanya de [Discussions de GitHub](https://github.com/<el-teu-usuari>/<nom-del-repositori>/discussions).

---

## 🚀 Desplegament a GitHub Pages

Per publicar el simulador al teu propi compte de GitHub de manera gratuïta i pública:

1. Crea un repositori nou a GitHub (ex: `simulador-diagnostic`).
2. Puja aquest fitxer HTML reanomenant-lo com a **`index.html`** a l'arrel del repositori:
   ```bash
   git init
   git add index.html README.md README.ca.md README.es.md LICENSE
   git commit -m "feat: publicació inicial del simulador diagnòstic"
   git branch -M main
   git remote add origin https://github.com/<el-teu-usuari>/<nom-del-repositori>.git
   git push -u origin main
   ```
3. Al repositori de GitHub, ves a **Settings** $\rightarrow$ **Pages**.
4. A la secció **Build and deployment** / **Branch**, selecciona la branca `main` i la carpeta `/ (root)`, i prem **Save**.
5. En pocs segons, el teu simulador estarà operatiu a:
   `https://<el-teu-usuari>.github.io/<nom-del-repositori>/`

---

## 💻 Execució en Local

Com que és una aplicació autònoma en un sol fitxer:

1. Clona o descarrega el repositori:
   ```bash
   git clone https://github.com/<el-teu-usuari>/<nom-del-repositori>.git
   ```
2. Fes doble clic directament sobre `index.html` (o `simulador_diagnostic.html`) per obrir-lo a qualsevol navegador web modern (Chrome, Firefox, Safari, Edge). No cal connexió a Internet si es manté la càrrega de Tailwind per CDN en memòria cau.

---

## 📄 Llicència

Aquest projecte es distribueix sota la llicència [Creative Commons Reconeixement-NoComercial 4.0 Internacional (CC BY-NC 4.0)](LICENSE) — ets lliure de compartir, copiar, distribuir i adaptar el material per a qualsevol finalitat docent, de recerca o no comercial, sempre que se'n reconegui l'autoria original.