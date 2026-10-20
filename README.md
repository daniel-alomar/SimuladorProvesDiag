# Diagnostic Test Performance Lab (100% Offline)

<p align="center">
  <b><a href="README.md">English</a></b> · 
  <a href="README.ca.md">Català</a> · 
  <a href="README.es.md">Español</a>
</p>

<p align="center">
  <a href="https://pages.github.com/"><img src="https://img.shields.io/badge/Deployment-GitHub%20Pages-blue?logo=github" alt="GitHub Pages"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg" alt="CC BY-NC 4.0 License"></a>
  <img src="https://img.shields.io/badge/Languages-EN%20%7C%20CA%20%7C%20ES-orange" alt="Multilingual">
  <img src="https://img.shields.io/badge/Offline-100%25%20Autonomous-success" alt="100% Offline">
</p>

An autonomous, interactive web laboratory designed for students, educators, clinicians, and researchers in epidemiology, biostatistics, and medicine. It enables real-time visualization and manipulation of the mathematical and probabilistic foundations governing continuous quantitative diagnostic tests.

---

## ✨ Key Features

* **100% Offline Architecture (Zero-CDN):** Runs completely offline by simply double-clicking the HTML file in any modern browser. Built with a self-contained CSS design system, inline SVG iconography, and native system typography—zero external network calls.
* **3-Tab Pedagogical Architecture:**
  1. **Concise Interactive Simulator:** Clutter-free visual workspace featuring a live clinical verdict banner and a 100-block patient cohort icon array ($N = 1,000$).
  2. **Theoretical Handbook & Clinical Guide:** Comprehensive academic chapters covering continuous distributions, *SnNout* and *SpPin* clinical rules, the Accuracy Paradox, ROC/AUC geometry, and Bayesian Likelihood Ratios.
  3. **20 Clinical Vignettes & Self-Assessment Bank:** 20 graded clinical decision challenges across 5 thematic blocks (Cutoff & Polarity, Confusion Matrix & Intrinsic Metrics, Prevalence & Accuracy Paradox, ROC Curve & Youden's Index, and Likelihood Ratios & Bayes), complete with category filtering, live score tracking, and one-click simulator loading.
* **Direct Canvas Interaction:** Click and drag the decision threshold to instantly recompute shaded distribution areas and clinical metrics.
* **Biomarker Inspection Probe:** Hover over the density chart to get a continuous real-time readout of biomarker values along with their binary test classification (Test + or Test -).
* **Clinical Polarity Toggle:** Switch effortlessly between *High Value $\rightarrow$ Diseased* and *Low Value $\rightarrow$ Diseased*.
* **Youden Index Optimizer:** One-click automated threshold placement maximizing the Youden statistic ($J$).
* **Dynamic Confusion Matrix:** Real-time calculation of True Positives (TP), False Positives (FP), False Negatives (FN), and True Negatives (TN) scaled to a standardized cohort of $N = 1,000$ individuals.
* **Comprehensive Metrics Dashboard:** Exact real-time calculation of Sensitivity, Specificity, PPV, NPV, Overall Accuracy, Youden's $J$, $LR^+$, and $LR^-$.
* **Synchronized ROC Curve:** Mini ROC canvas depicting the full trajectory with an active operating point tracker.
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

### 2. Predictive Clinical Metrics (Prevalence-Dependent)

Given a pre-test disease prevalence $P = P(\text{Disease})$:

* **Positive Predictive Value (PPV):**
  $$\text{PPV} = \frac{\text{Sensitivity} \cdot P}{\text{Sensitivity} \cdot P + (1 - \text{Specificity}) \cdot (1 - P)}$$

* **Negative Predictive Value (NPV):**
  $$\text{NPV} = \frac{\text{Specificity} \cdot (1 - P)}{\text{Specificity} \cdot (1 - P) + (1 - \text{Sensitivity}) \cdot P}$$

* **Overall Accuracy:**
  $$\text{Accuracy} = \text{Sensitivity} \cdot P + \text{Specificity} \cdot (1 - P) = \frac{\text{TP} + \text{TN}}{N}$$

---

## 💻 Local Usage (100% Offline)

Because this application is 100% self-contained in a single file with zero external dependencies:

1. Clone or download this repository:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   ```
2. Double-click `simulador_diagnostic.html` (or `index.html`) to open it directly in any modern browser (Chrome, Firefox, Safari, Edge). **Works completely offline without internet access, local servers, or build tools.**

---

## 📄 License

This project is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)](LICENSE) — you are free to share, copy, distribute, and adapt this work for non-commercial educational and research purposes, provided appropriate attribution is given.