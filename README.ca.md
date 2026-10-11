# Simulador de Rendiment de Proves Diagnòstiques

<p align="center">
  <a href="README.md">English</a> · 
  <b><a href="README.ca.md">Català</a></b>
</p>

<p align="center">
  <a href="https://pages.github.com/"><img src="https://img.shields.io/badge/Desplegament-GitHub%20Pages-blue?logo=github" alt="GitHub Pages"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/Llicència-CC%20BY--NC%204.0-lightgrey.svg" alt="Llicència CC BY-NC 4.0"></a>
  <img src="https://img.shields.io/badge/Idiomes-CA%20%7C%20EN%20%7C%20ES-orange" alt="Multilingüe">
  <img src="https://img.shields.io/badge/Dependències-Zero-success" alt="Zero Dependències">
</p>

Un simulador web interactiu dissenyat per a estudiants, docents i investigadors dels camps de l'epidemiologia, la bioestadística i la medicina. Permet visualitzar i manipular en temps real els fonaments matemàtics i probabilístics darrere del rendiment d'una prova diagnòstica quantitativa contínua.

---

## 🎯 Objectiu i Visió General

En el diagnòstic clínic i l'anàlisi de biomarcadors, els resultats rarament són categories binàries pures; la majoria segueixen distribucions contínues que se superposen entre individus sans i malalts. L'elecció del punt de tall (*cutoff*) determina de manera crítica l'equilibri clínic entre falsos positius i falsos negatius.

Aquest simulador permet experimentar com interactuen:

* **El llindar de decisió:** Arrossega la línia discontínua directament damunt del gràfic de densitat.
* **La direccionalitat clínica:** Entén tant els marcadors on valors elevats indiquen malaltia (ex: troponina, proteïna C reactiva) com aquells on el dèficit indica patologia (ex: plaquetes en trombocitopènia, hemoglobina en anèmia, limfòcits CD4).
* **Dispersió poblacional heterogènia:** Modela la variabilitat biològica real on els individus malalts solen presentar una dispersió ($\sigma$) superior a la dels controls sans.
* **La influència de la prevalença:** Observa com la prevalença altera de forma determinant el Valor Predictiu Positiu (VPP) i Negatiu (VPN) sense modificar la Sensibilitat ni l'Especificitat intrínseques.
* **Corba ROC:** Traçat automàtic de la corba ROC (*Receiver Operating Characteristic*) i càlcul de l'àrea sota la corba (AUC).

---

## ✨ Característiques Principals

* **Interacció directa amb el gràfic:** Arrossega el llindar amb el ratolí o pantalla tàctil per recalcular instantàniament les àrees de densitat.
* **Inversió de sentit clínic:** Commuta en un clic entre *Valor Alt $\rightarrow$ Malalt* i *Valor Baix $\rightarrow$ Malalt*.
* **Matriu de confusió dinàmica:** Càlcul en temps real de Veritables Positius (VP), Falsos Positius (FP), Falsos Negatius (FN) i Veritables Negatius (VN) per a una cohort estàndard de $N = 1.000$ persones.
* **Mètriques completes:** Càlcul instantani de Sensibilitat, Especificitat, VPP, VPN i l'Índex de Youden ($J$).
* **Mini-gràfic ROC sincronitzat:** Mostra la posició del punt operatiu actual damunt de la corba ROC completa.
* **Trilingüe natiu:** Canvi immediat entre català, anglès i castellà amb persistència local (`localStorage`).
* **Zero dependències:** Un únic fitxer autònom HTML5 + JavaScript pur + Tailwind CSS per CDN. Sense necessitat d'eines de compilació o `npm`.

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

---

### 2. Mètriques Clíniques Predictives (Dependents de la Prevalença)

Per a una prevalença poblacional $P = P(\text{Malalt})$:

* **Valor Predictiu Positiu (VPP):**
  $$\text{VPP} = \frac{\text{Sensibilitat} \cdot P}{\text{Sensibilitat} \cdot P + (1 - \text{Especificitat}) \cdot (1 - P)}$$

* **Valor Predictiu Negatiu (VPN):**
  $$\text{VPN} = \frac{\text{Especificitat} \cdot (1 - P)}{\text{Especificitat} \cdot (1 - P) + (1 - \text{Sensibilitat}) \cdot P}$$

---

## 📄 Llicència

Aquest projecte es distribueix sota la llicència [Creative Commons Reconeixement-NoComercial 4.0 Internacional (CC BY-NC 4.0)](LICENSE) — lliure per a compartir, adaptar i utilitzar amb finalitats educatives, de recerca i no comercials, sempre citant l'autoria original.
