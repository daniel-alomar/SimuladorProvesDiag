# Diagnostic Test Performance Simulator

<p align="center">
  <b><a href="README.md">English</a></b> · 
  <a href="README.ca.md">Català</a> · 
  <a href="README.es.md">Español</a>
</p>

<p align="center">
  <a href="https://pages.github.com/"><img src="https://img.shields.io/badge/Deployment-GitHub%20Pages-blue?logo=github" alt="GitHub Pages"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg" alt="CC BY-NC 4.0 License"></a>
  <img src="https://img.shields.io/badge/Languages-CA%20%7C%20EN%20%7C%20ES-orange" alt="Multilingual">
  <img src="https://img.shields.io/badge/Dependencies-Zero-success" alt="Zero Dependencies">
</p>

An interactive web simulator built for students, educators, and researchers in epidemiology, biostatistics, and evidence-based medicine. It provides real-time mathematical and probabilistic visualization of diagnostic test performance, continuous biomarker cutoffs, and ROC curve dynamics.

---

## 🎯 Purpose and Overview

In clinical diagnostics and biomarker discovery, measurements are rarely clear-cut binary flags; they follow continuous distributions that overlap between healthy and diseased individuals. Establishing a decision threshold (*cutoff*) critically dictates the clinical tradeoff between false positive alarms and missed diagnoses (false negatives).

This simulator allows direct exploration of:

* **The Decision Threshold:** Drag the dashed cutoff line directly across the probability density canvas or apply the automatic Youden optimizer.
* **Clinical Directionality:** Study biomarkers where elevated concentrations indicate pathology (e.g., troponin in myocardial infarction, C-reactive protein) as well as conditions where marker depletion indicates disease (e.g., platelet count in thrombocytopenia, hemoglobin in anemia, CD4+ T cells).
* **Heterogeneous Population Dispersion:** Model realistic biological variability where diseased cohorts often display greater dispersion ($\sigma_D^2$) than healthy baseline controls.
* **Prevalence Impact:** Observe how disease prevalence heavily dictates Positive Predictive Value (PPV), Negative Predictive Value (NPV), and Overall Accuracy without altering intrinsic Sensitivity or Specificity.
* **ROC Curves and Likelihood Ratios:** Real-time generation of the Receiver Operating Characteristic (ROC) trajectory, closed-form Area Under the Curve (AUC) derivation with qualitative ratings, and calculation of positive ($LR^+$) and negative ($LR^-$) likelihood ratios.

---

## ✨ Key Features

* **Direct Canvas Interaction:** Click and drag the decision threshold to instantly recompute shaded distribution areas and clinical metrics.
* **Biomarker Inspection Probe:** Hover over the density chart to get a continuous real-time readout of biomarker values along with their binary test classification (Test + or Test -).
* **Clinical Polarity Toggle:** Switch effortlessly between *High Value $\rightarrow$ Diseased* and *Low Value $\rightarrow$ Diseased*.
* **Youden Index Optimizer:** One-click automated threshold placement maximizing the Youden statistic ($J$).
* **Dynamic Confusion Matrix:** Real-time calculation of True Positives (TP), False Positives (FP), False Negatives (FN), and True Negatives (TN) scaled to a standardized cohort of $N = 1,000$ individuals.
* **Comprehensive Metrics Dashboard:** Real-time calculation of Sensitivity, Specificity, PPV, NPV, Overall Accuracy, Youden's $J$, $LR^+$, and $LR^-$.
* **Synchronized ROC Curve:** Mini ROC canvas depicting the full trajectory with an active operating point tracker.
* **Trilingual with Auto-Detection:** Automatically detects user browser language preference (Catalan, Spanish, English) with manual override and `localStorage` persistence.
* **Zero Dependencies:** Fully self-contained single-file architecture (HTML5 + vanilla JavaScript + Tailwind CSS via CDN). No build tools, packages, or servers required.

---

## 📐 Mathematical Foundations

### 1. Intrinsic Performance Metrics (Prevalence-Independent)

Let the healthy population be distributed as $X_H \sim \mathcal{N}(\mu_H, \sigma_H^2)$ and the diseased population as $X_D \sim \mathcal{N}(\mu_D, \sigma_D^2)$, with standard normal cumulative distribution function $\Phi(z)$ and decision cutoff $c$:

* **When higher values indicate disease ($X \ge c$):**
  $$\text{Sensitivity} = 1 - \Phi\left(\frac{c - \mu_D}{\sigma_D}\right) = \frac{\text{TP}}{\text{TP} + \text{FN}}$$
  $$\text{Specificity} = \Phi\left(\frac{c - \mu_H}{\sigma_H}\right) = \frac{\text{TN}}{\text{TN} + \text{FP}}$$

* **When lower values indicate disease ($X \le c$):**
  $$\text{Sensitivity} = \Phi\left(\frac{c - \mu_D}{\sigma_D}\right)$$
  $$\text{Specificity} = 1 - \Phi\left(\frac{c - \mu_H}{\sigma_H}\right)$$

* **Youden's Index ($J$):**
  Quantifies overall operating effectiveness without penalizing one type of classification error over another. Geometrically corresponds to the maximum vertical distance from the ROC diagonal:
  $$J = \text{Sensitivity} + \text{Specificity} - 1 \quad (0 \le J \le 1)$$

* **Likelihood Ratios ($LR^+$ and $LR^-$):**
  Express how many times more likely a given test result is observed in diseased versus non-diseased individuals:
  $$\text{LR}^+ = \frac{\text{Sensitivity}}{1 - \text{Specificity}} = \frac{\text{Sensitivity}}{\text{False Positive Rate}}$$
  $$\text{LR}^- = \frac{1 - \text{Sensitivity}}{\text{Specificity}} = \frac{\text{False Negative Rate}}{\text{Specificity}}$$
  *(Values of $\text{LR}^+ > 10$ or $\text{LR}^- < 0.1$ generate decisive diagnostic shifts via Fagan's nomogram).*

* **Analytical Area Under the ROC Curve (AUC):**
  For two normal distributions, the AUC equals the probability that a randomly chosen diseased subject has a more abnormal test result than a randomly chosen healthy subject:
  $$\text{AUC} = \Phi\left(\frac{|\mu_D - \mu_H|}{\sqrt{\sigma_D^2 + \sigma_H^2}}\right)$$

---

### 2. Clinical Predictive Metrics (Prevalence-Dependent)

For a known disease prevalence $P = P(\text{Disease})$:

* **Positive Predictive Value (PPV / Precision):**
  $$\text{PPV} = \frac{\text{Sensitivity} \cdot P}{\text{Sensitivity} \cdot P + (1 - \text{Specificity}) \cdot (1 - P)}$$

* **Negative Predictive Value (NPV):**
  $$\text{NPV} = \frac{\text{Specificity} \cdot (1 - P)}{\text{Specificity} \cdot (1 - P) + (1 - \text{Sensitivity}) \cdot P}$$

* **Overall Accuracy:**
  The total proportion of correctly categorized individuals across the entire population cohort:
  $$\text{Accuracy} = \frac{\text{TP} + \text{TN}}{\text{Total } (N)} = \text{Sensitivity} \cdot P + \text{Specificity} \cdot (1 - P)$$

> ⚠️ **The Accuracy Paradox:**
> Overall Accuracy is heavily driven by baseline disease prevalence. In rare conditions (e.g., $P = 1\%$), a naive test that unconditionally predicts "healthy" achieves a misleading **99% Accuracy**, despite having **0% Sensitivity** and failing to identify every single patient. Clinical machine learning and biomedical diagnostics must therefore rely on ROC/AUC, sensitivity, specificity, and predictive values rather than uncritical accuracy figures.

---

## 🤝 How to Contribute

This simulator is open source and actively welcomes contributions from educators, clinicians, researchers, and developers. You can contribute in several ways:

1. **Add new clinical scenarios:** Presets for routinely measured biomarkers (e.g., D-dimer, PSA, HbA1c, procalcitonin).
2. **Pedagogical enhancements:** Propose self-assessment exercises, clinical vignettes, or classroom workshop templates.
3. **Translations:** Refine phrasing or add new languages.
4. **Code & visual improvements:** Canvas accessibility, mobile optimizations, or decision-analytic curve integration.

### Steps to contribute:
1. **Fork** this repository.
2. Create a dedicated feature branch (`git checkout -b feature/new-biomarker-scenario`).
3. Commit your changes with a clear explanation (`git commit -m "feat: add D-dimer clinical preset"`).
4. Push your branch (`git push origin feature/new-biomarker-scenario`).
5. Open a **Pull Request** detailing your proposal.

---

## 💡 Suggestions & Feedback (Spam-Free)

To protect the project from email harvesting bots and inbox spam, **no personal email addresses are published in this repository**.

All inquiries and recommendations are handled through GitHub's community channels:

* **Feature requests & bug reports:** Open a ticket on [GitHub Issues](https://github.com/<your-username>/<repo-name>/issues/new?labels=enhancement,feedback&title=%5BSuggestion%5D+).
* **General questions & academic discussions:** Join the conversation on [GitHub Discussions](https://github.com/<your-username>/<repo-name>/discussions).

---

## 🚀 Deployment to GitHub Pages

To publish this simulator on your own GitHub account:

1. Create a new GitHub repository (e.g., `diagnostic-simulator`).
2. Upload this HTML file as **`index.html`** in the repository root directory:
   ```bash
   git init
   git add index.html README.md README.ca.md README.es.md LICENSE
   git commit -m "feat: initial commit for diagnostic test simulator"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. Navigate to repository **Settings** $\rightarrow$ **Pages**.
4. Under **Build and deployment** / **Branch**, select `main` and root `/`, then click **Save**.
5. Within seconds, your live simulator will be available at:
   `https://<your-username>.github.io/<repo-name>/`

---

## 💻 Local Usage

Because this application is 100% self-contained in a single file:

1. Clone or download this repository:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   ```
2. Double-click `index.html` (or `simulador_diagnostic.html`) to open it directly in any modern browser (Chrome, Firefox, Safari, Edge). No local server, node installation, or build step required.

---

## 📄 License

This project is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)](LICENSE) — you are free to share, copy, distribute, and adapt this work for non-commercial educational and research purposes, provided appropriate attribution is given.