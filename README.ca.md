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

## 👥 Autoria i Equip Docent

* **Autor principal:** [Daniel Alomar-Claramonte](https://github.com/daniel-alomar)
* **Coautors:** Jordi Piera-Jimenez, Ferran Torres, Laia Humbert-Vidan
* **Desenvolupament tècnic assistit:** Google Gemini

---

## ✨ Característiques Principals

* **Arquitectura 100% Offline (Zero-CDN):** Funciona sense connexió a Internet obrint directament el fitxer HTML en qualsevol navegador. Incorpora el seu propi motor CSS, iconografia SVG i tipografia nativa sense dependre de cap servidor extern.
* **Estructura pedagògica en 3 pestanyes:**
  1. **Simulador Interactiu Concís:** Visualització neta d'alt impacte amb motor anticol·lisió 2D per a etiquetes dinàmiques, veredicte clínic en temps real, escala de llindars d'AUC i matriu iconogràfica de 100 blocs ($N = 1.000$ pacients).
  2. **Fonaments Teòrics i Guia Clínica:** Manual acadèmic extens de 6 capítols sobre el paradigma continu, regles *SnNout* i *SpPin*, la Paradoxa de l'Exactitud, corbes ROC/AUC, el Pont de Bayes (càlcul pas a pas amb *Odds* i Nomograma de Fagan) i 9 referències bibliogràfiques fonamentals.
  3. **Banc de 20 Casos Clínics i Autoavaluació:** 20 reptes clínics interactius organitzats en 5 blocs temàtics (Llindar i Polaritat, Matriu i Mètriques Intrínseques, Prevalença i Paradoxa d'Exactitud, Corba ROC i Youden, i Raons de Versemblança i Bayes), amb filtre per categories, marcador de puntuació en viu i càrrega directa a l'escenari del simulador.
* **8 Escenaris Clínics Preconfigurats amb Distribucions Diferenciades:**
  1. *Troponina d'alta sensibilitat* ($\mu_S=38, \sigma_S=8 \mid \mu_M=62, \sigma_M=8, c=50, P=15\%$ — Marcador elevat clàssic).
  2. *Plaquetes en trombocitopènia* ($\mu_S=68, \sigma_S=7 \mid \mu_M=34, \sigma_M=10, c=49, P=18\%$ — Marcador disminuït / polaritat inversa).
  3. *Test excel·lent* ($\mu_S=26, \sigma_S=5.5 \mid \mu_M=74, \sigma_M=6, c=49.5, P=20\%$ — Alta separació poblacional, $\text{AUC} > 0,99$).
  4. *Test feble* ($\mu_S=46, \sigma_S=11 \mid \mu_M=54, \sigma_M=11, c=50, P=25\%$ — Gran solapament biològic).
  5. *Dispersió asimètrica* ($\mu_S=34, \sigma_S=4.5 \mid \mu_M=62, \sigma_M=16, c=45, P=15\%$ — Heteroscedasticitat biològica $\sigma_M > \sigma_S$).
  6. *Exclusió a Urgències amb Dímer-D* ($\mu_S=32, \sigma_S=9 \mid \mu_M=64, \sigma_M=11, c=42, P=12\%$ — Regla *SnNout*, $\text{RV}^- < 0,1$).
  7. *Confirmació Oncològica* ($\mu_S=42, \sigma_S=6 \mid \mu_M=68, \sigma_M=10, c=60, P=30\%$ — Regla *SpPin*, $\text{RV}^+ > 10$).
  8. *Cribratge Poblacional de Malaltia Rara* ($\mu_S=28, \sigma_S=5 \mid \mu_M=58, \sigma_M=12, c=41, P=1\%$ — Paradoxa del VPP i de l'Exactitud).
* **Trilingüe natiu amb autodetecció:** Detecció intel·ligent de l'idioma del navegador de l'usuari amb selector manual (català, castellà i anglès) i persistència segura a `localStorage`.

---

## 📐 Fonaments Matemàtics

### 1. Mètriques Intrínseques (Independents de la Prevalença)

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

## 💻 Execució en Local (100% Offline)

1. Clona o descarrega el repositori:
   ```bash
   git clone https://github.com/daniel-alomar/SimuladorProvesDiag.git
   ```
2. Fes doble clic directament sobre `simulador_diagnostic.html` (o `index.html`) per obrir-lo a qualsevol navegador web modern (Chrome, Firefox, Safari, Edge). **Funciona immediatament sense connexió a Internet.**

---

## 💬 Suggeriments i Errors

Qualsevol suggeriment de millora, nou escenari clínic o notificació d'errors es pot enviar directament a través de la pestanya de [**GitHub Issues**](https://github.com/daniel-alomar/SimuladorProvesDiag/issues) del repositori.

---

## 📄 Llicència

Aquest projecte es distribueix sota la llicència [Creative Commons Reconeixement-NoComercial 4.0 Internacional (CC BY-NC 4.0)](LICENSE) — ets lliure de compartir, copiar, distribuir i adaptar el material per a qualsevol finalitat docent, de recerca o no comercial, sempre que se'n reconegui l'autoria original (**Daniel Alomar-Claramonte, Jordi Piera-Jimenez, Ferran Torres, Laia Humbert-Vidan**).
