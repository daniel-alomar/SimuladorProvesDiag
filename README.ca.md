# Laboratori de Rendiment de Proves Diagnòstiques (100% Offline)

<p align="center">
  <a href="README.md">English</a> · 
  <b><a href="README.ca.md">Català</a></b> · 
  <a href="README.es.md">Español</a>
</p>

<p align="center">
  <a href="https://pages.github.com/"><img src="https://img.shields.io/badge/Desplegament-GitHub%20Pages-blue?logo=github" alt="GitHub Pages"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/Llicència-CC%20BY--NC%204.0-lightgrey.svg" alt="Llicència CC BY-NC 4.0"></a>
  <img src="https://img.shields.io/badge/Idiomes-CA%20%7C%20EN%20%7C%20ES-orange" alt="Multilingüe">
  <img src="https://img.shields.io/badge/Offline-100%25%20Autònom-success" alt="100% Offline">
</p>

Un laboratori web interactiu i 100% autònom dissenyat per a estudiants, docents i investigadors dels camps de l'epidemiologia, la bioestadística i la medicina. Permet visualitzar i manipular en temps real els fonaments matemàtics i probabilístics darrere del rendiment d'una prova diagnòstica quantitativa contínua.

---

## ✨ Característiques Principals

* **Arquitectura 100% Offline (Zero-CDN):** Funciona sense connexió a Internet obrint directament el fitxer HTML en qualsevol navegador. Incorpora el seu propi motor CSS, iconografia SVG i tipografia nativa sense dependre de cap servidor extern.
* **Estructura pedagògica en 3 pestanyes:**
  1. **Simulador Interactiu Concís:** Visualització neta d'alt impacte amb veredicte clínic dinàmic en temps real i matriu iconogràfica de 100 blocs ($N = 1.000$ pacients).
  2. **Fonaments Teòrics i Guia Clínica:** Manual acadèmic integrat sobre el paradigma continu, regles *SnNout* i *SpPin*, la Paradoxa de l'Exactitud, corbes ROC/AUC i les Raons de Versemblança de Bayes.
  3. **Banc de 20 Casos Clínics i Autoavaluació:** 20 reptes clínics interactius organitzats en 5 blocs temàtics (Llindar i Polaritat, Matriu i Mètriques Intrínseques, Prevalença i Paradoxa d'Exactitud, Corba ROC i Youden, i Raons de Versemblança i Bayes), amb filtre per categories, marcador de puntuació en viu i càrrega directa a l'escenari del simulador.
* **Interacció directa amb el gràfic:** Arrossega el llindar amb el ratolí o pantalla tàctil per recalcular instantàniament les àrees de densitat.
* **Sonda d'inspecció dinàmica:** En desplaçar el cursor sobre el gràfic de densitats, s'obté una lectura contínua del valor del biomarcador i la seva classificació binària resultant (Test + o Test -).
* **Inversió de sentit clínic:** Commuta en un sol clic entre *Valor Alt $\rightarrow$ Malalt* i *Valor Baix $\rightarrow$ Malalt*.
* **Optimitzador de Youden:** Botó per calcular i situar instantàniament el llindar en el punt de màxima eficàcia conjunta ($J$).
* **Matriu de confusió dinàmica:** Càlcul en temps real de Veritables Positius (VP), Falsos Positius (FP), Falsos Negatius (FN) i Veritables Negatius (VN) escalats per a una cohort estàndard de $N = 1.000$ pacients.
* **Panell de mètriques complet:** Càlcul instantani i exacte de Sensibilitat, Especificitat, VPP, VPN, Exactitud (*Accuracy*), Índex de Youden ($J$), $RV^+$ i $RV^-$.
* **Mini-gràfic ROC sincronitzat:** Mostra la trajectòria completa de la corba ROC i la posició exacta del punt operatiu actual.
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

### 2. Mètriques Clíniques Predictives (Dependents de la Prevalença)

Per a una prevalença poblacional $P = P(\text{Malalt})$:

* **Valor Predictiu Positiu (VPP):**
  $$\text{VPP} = \frac{\text{Sensibilitat} \cdot P}{\text{Sensibilitat} \cdot P + (1 - \text{Especificitat}) \cdot (1 - P)}$$

* **Valor Predictiu Negatiu (VPN):**
  $$\text{VPN} = \frac{\text{Especificitat} \cdot (1 - P)}{\text{Especificitat} \cdot (1 - P) + (1 - \text{Sensibilitat}) \cdot P}$$

* **Exactitud Global (*Accuracy*):**
  $$\text{Exactitud} = \text{Sensibilitat} \cdot P + \text{Especificitat} \cdot (1 - P) = \frac{\text{VP} + \text{VN}}{N}$$

---

## 💻 Execució en Local (100% Offline)

Com que és una aplicació totalment autònoma en un sol fitxer i sense dependències externes:

1. Clona o descarrega el repositori:
   ```bash
   git clone https://github.com/<el-teu-usuari>/<nom-del-repositori>.git
   ```
2. Fes doble clic directament sobre `simulador_diagnostic.html` (o `index.html`) per obrir-lo a qualsevol navegador web modern (Chrome, Firefox, Safari, Edge). **Funciona immediatament fins i tot sense connexió a Internet.**

---

## 📄 Llicència

Aquest projecte es distribueix sota la llicència [Creative Commons Reconeixement-NoComercial 4.0 Internacional (CC BY-NC 4.0)](LICENSE) — ets lliure de compartir, copiar, distribuir i adaptar el material per a qualsevol finalitat docent, de recerca o no comercial, sempre que se'n reconegui l'autoria original.