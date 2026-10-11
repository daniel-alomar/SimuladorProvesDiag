# Diagnostic Test Performance Simulator

<p align="center">
  <b><a href="README.md">English</a></b> · 
  <a href="README.ca.md">Català</a>
</p>

<p align="center">
  <a href="https://pages.github.com/"><img src="https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=github" alt="GitHub Pages"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg" alt="CC BY-NC 4.0 License"></a>
  <img src="https://img.shields.io/badge/Languages-EN%20%7C%20CA%20%7C%20ES-orange" alt="Multilingual">
  <img src="https://img.shields.io/badge/Dependencies-Zero-success" alt="Zero Dependencies">
</p>

An interactive, client-side web application designed for students, educators, and researchers in epidemiology, biostatistics, and medicine. It provides real-time visualization and tactile manipulation of the statistical mechanics behind quantitative diagnostic testing.

---

## 🎯 Purpose and Overview

In clinical diagnostics and biomarker discovery, measurements are rarely clear-cut binary values. Instead, biomarkers exhibit continuous distributions that naturally overlap between healthy and diseased individuals. Deciding where to place the decision threshold (*cutoff*) critically governs the clinical trade-off between false positives and false negatives.

This simulator allows you to interactively explore:
* **The decision threshold:** Drag the cutoff line directly across the distribution curves.
* **Clinical directionality:** Understand biomarkers where elevated values indicate disease (e.g., Troponin, CRP) versus markers where deficiency indicates pathology (e.g., Platelets, Hemoglobin, CD4 count).
* **Unequal population variances:** Model real-world clinical heterogeneity where diseased individuals exhibit higher biological variance ($\sigma$) than healthy controls.
* **Prevalence dynamics:** Observe how disease prevalence dramatically alters Positive Predictive Value (PPV) and Negative Predictive Value (NPV) without changing intrinsic Sensitivity or Specificity.
* **ROC curve generation:** Trace the complete Receiver Operating Characteristic (ROC) curve and calculate the Area Under the Curve (AUC) dynamically.

---

## ✨ Features

* **Interactive Canvas:** Direct mouse/touch dragging of the decision cutoff line with instant visual recalculation of density regions.
* **Reversible Test Direction:** Instant toggle between *High Value $\rightarrow$ Diseased* and *Low Value $\rightarrow$ Diseased*.
* **Dynamic Confusion Matrix:** Real-time calculation of True Positives (TP), False Positives (FP), False Negatives (FN), and True Negatives (TN) scaled to a reference cohort of $N = 1,000$.
* **Integrated Metrics:** Instant evaluation of Sensitivity, Specificity, PPV, NPV, and Youden's Index ($J$).
* **Synchronized Mini ROC Plot:** Real-time marker tracking your current operating threshold alongside the non-discrimination diagonal.
* **Native Trilingual Support:** Seamless switching between English, Catalan, and Spanish with persistent client-side storage (`localStorage`).
* **Zero Dependencies:** Pure standalone HTML5 + Vanilla JavaScript + Tailwind CSS via CDN. No build steps, bundlers, or package managers required.

---

## 📐 Mathematical Formulation

### 1. Intrinsic Properties (Prevalence-Independent)

Assuming healthy population $X_H \sim \mathcal{N}(\mu_H, \sigma_H^2)$ and diseased population $X_D \sim \mathcal{N}(\mu_D, \sigma_D^2)$ with cumulative distribution function $\Phi(x; \mu, \sigma)$:

* **For tests where higher values indicate pathology ($X \ge c$):**
  $$\text{Sensitivity} = 1 - \Phi(c; \mu_D, \sigma_D) = \frac{\text{TP}}{\text{TP} + \text{FN}}$$
  $$\text{Specificity} = \Phi(c; \mu_H, \sigma_H) = \frac{\text{TN}}{\text{TN} + \text{FP}}$$

* **For tests where lower values indicate pathology ($X \le c$):**
  $$\text{Sensitivity} = \Phi(c; \mu_D, \sigma_D)$$
  $$\text{Specificity} = 1 - \Phi(c; \mu_H, \sigma_H)$$

* **Youden's Index ($J$):**
  $$J = \text{Sensitivity} + \text{Specificity} - 1$$

---

### 2. Clinical Predictive Values (Prevalence-Dependent)

For a population with prevalence $P = P(\text{Disease})$:

* **Positive Predictive Value (PPV / Precision):**
  $$\text{PPV} = \frac{\text{Sensitivity} \cdot P}{\text{Sensitivity} \cdot P + (1 - \text{Specificity}) \cdot (1 - P)}$$

* **Negative Predictive Value (NPV):**
  $$\text{NPV} = \frac{\text{Specificity} \cdot (1 - P)}{\text{Specificity} \cdot (1 - P) + (1 - \text{Sensitivity}) \cdot P}$$

---

## 📄 License

This project is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)](LICENSE) — free to share and adapt for educational, academic, and non-commercial purposes with appropriate attribution.
