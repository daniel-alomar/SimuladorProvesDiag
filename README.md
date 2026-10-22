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

## 👥 Authorship & Academic Team

* **Lead Author:** [Daniel Alomar-Claramonte](https://github.com/daniel-alomar)
* **Co-authors:** Jordi Piera-Jimenez, Ferran Torres, Laia Humbert-Vidan
* **AI-Assisted Engineering:** Google Gemini

---

## ✨ Key Features

* **100% Offline Architecture (Zero-CDN):** Runs completely offline by simply double-clicking the HTML file in any modern browser. Built with a self-contained CSS design system, inline SVG iconography, and native system typography—zero external network calls.
* **3-Tab Pedagogical Architecture:**
  1. **Concise Interactive Simulator:** Clutter-free visual workspace featuring a 2D AABB anti-collision label engine, a live clinical verdict banner, an active AUC grade reference table, and a 100-block patient cohort icon array ($N = 1,000$).
  2. **Theoretical Handbook & Clinical Guide:** Comprehensive 6-chapter academic reference covering continuous distributions, *SnNout* and *SpPin* clinical rules, the Accuracy Paradox, ROC/AUC geometry, the Bayesian Bridge (step-by-step *Odds* updating and Fagan's Nomogram), and 9 foundational peer-reviewed references.
  3. **20 Clinical Vignettes & Self-Assessment Bank:** 20 graded clinical decision challenges across 5 thematic blocks (Cutoff & Polarity, Confusion Matrix & Intrinsic Metrics, Prevalence & Accuracy Paradox, ROC Curve & Youden's Index, and Likelihood Ratios & Bayes), complete with category filtering, live score tracking, and one-click simulator loading.
* **8 Built-in Clinical Scenarios with Distinct Geometries:**
  1. *High-Sensitivity Troponin* ($\mu_H=38, \sigma_H=8 \mid \mu_D=62, \sigma_D=8, c=50, P=15\%$ — Classic elevated biomarker).
  2. *Platelets in Thrombocytopenia* ($\mu_H=68, \sigma_H=7 \mid \mu_D=34, \sigma_D=10, c=49, P=18\%$ — Decreased marker / inverse clinical polarity).
  3. *Excellent Assay* ($\mu_H=26, \sigma_H=5.5 \mid \mu_D=74, \sigma_D=6, c=49.5, P=20\%$ — High population separation, $\text{AUC} > 0.99$).
  4. *Weak Assay* ($\mu_H=46, \sigma_H=11 \mid \mu_D=54, \sigma_D=11, c=50, P=25\%$ — Substantial biological overlap).
  5. *Unequal Variance* ($\mu_H=34, \sigma_H=4.5 \mid \mu_D=62, \sigma_D=16, c=45, P=15\%$ — Biological heteroscedasticity $\sigma_D > \sigma_H$).
  6. *Emergency Rule-Out D-Dimer* ($\mu_H=32, \sigma_H=9 \mid \mu_D=64, \sigma_D=11, c=42, P=12\%$ — Clinical *SnNout* application, $\text{LR}^- < 0.1$).
  7. *Oncology Confirmation* ($\mu_H=42, \sigma_H=6 \mid \mu_D=68, \sigma_D=10, c=60, P=30\%$ — Clinical *SpPin* application, $\text{LR}^+ > 10$).
  8. *Population Screening for Rare Disease* ($\mu_H=28, \sigma_H=5 \mid \mu_D=58, \sigma_D=12, c=41, P=1\%$ — Demonstrating the PPV and Accuracy Paradox).
* **Trilingual with Auto-Detection:** Automatically detects user browser language preference (Catalan, Spanish, English) with manual override and fault-tolerant `localStorage` persistence.

---

## 📐 Mathematical Foundations

### 1. Intrinsic Metrics (Prevalence-Independent)

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

## 💻 Local Usage (100% Offline)

1. Clone or download this repository:
   ```bash
   git clone https://github.com/daniel-alomar/SimuladorProvesDiag.git
   ```
2. Double-click `simulador_diagnostic.html` (or `index.html`) to open it directly in any modern browser (Chrome, Firefox, Safari, Edge). **Works completely offline without internet access, local servers, or build tools.**

---

## 💬 Feedback & Bug Reports

Suggestions, new clinical scenarios, and bug reports are welcome! Please submit them via [**GitHub Issues**](https://github.com/daniel-alomar/SimuladorProvesDiag/issues).

---

## 📄 License

This project is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)](LICENSE) — you are free to share, copy, distribute, and adapt this work for non-commercial educational and research purposes, provided appropriate attribution is given (**Daniel Alomar-Claramonte, Jordi Piera-Jimenez, Ferran Torres, Laia Humbert-Vidan**).
