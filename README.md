# Diagnostic Test Simulator

[Català](README.ca.md) · [Español](README.es.md) · [English](README.md)

An interactive educational tool for understanding how thresholds, test distributions and prevalence affect results and disease probability. Intended for biomedical, biostatistics and health sciences students, educators and anyone interested in diagnostic testing.

## Getting started

Open `index.html` in your browser. No installation, account or server is required. The simulator works offline; external links require Internet access.

Choose a scenario, predict what will happen and adjust one variable at a time. Compare curves, counts and disease probability before and after testing.

## What is included

- **Interactive simulator:** adjustable distributions and thresholds, sensitivity and specificity, confusion matrix, predictive values, likelihood ratios, ROC and precision–recall curves with their areas. The matrix summary can remain visible while you adjust the model.
- **Theoretical foundations and clinical guide:** explanations, formulas, examples, scenario guide, glossary and references covering interpretation and model limitations.
- **Cases and self-assessment:** twenty challenges with answer explanations and examples that load into the simulator.

The ten scenarios cover elevated and decreased markers, different degrees of overlap and spread, sensitivity- or specificity-oriented strategies, low-prevalence screening, Bayes and AI scores. The integrated guide explains each scenario’s context and suggests an experiment.

Available in Catalan, Spanish and English for classroom teaching, practical sessions, independent study and public education.

## Model and interpretation

The data are **synthetic**. Clinical names provide context; they do not represent validated tests or care protocols. This tool is not intended to interpret personal results or make clinical decisions.

The model compares a continuous result against a binary reference. It uses normal distributions; the AI scenario transforms these into logit-normal scores between 0 and 1 without assuming calibration. With fixed distributions, changing prevalence alone preserves ROC but changes predictive values and PR. AUPRC integrates the continuous model; it is not sample average precision.

The matrix shows rounded expected counts for 1,000 people. Probabilities are calculated without this rounding. Maximum Youden is an approximate single-threshold search and does not account for clinical costs. Consult the handbook for formulas, assumptions and detailed examples.

## Accessibility and verification

Labelled controls, keyboard navigation, textual chart summaries and a table of counts are provided. Line styles, patterns and labels complement colour. These measures do not constitute a full accessibility audit.

Run `node tests/verify.mjs` to check the calculations. Automated checks do not replace visual or assistive-technology review. Evolution and verification history are recorded in [CANVIS.md](CANVIS.md).

## Authorship and contributors

- **Author:** [Daniel Alomar-Claramonte](https://github.com/daniel-alomar).
- **Co-authors:** Jordi Piera-Jimenez, Ferran Torres, Laia Humbert-Vidan, Caridad Pontes, Gerard Carot-Sans.
- **Development assistance:** Google Gemini and Codex.

## Feedback and issues

Please use [GitHub Issues](https://github.com/daniel-alomar/SimuladorProvesDiag/issues).

## Licence

[Creative Commons Attribution–NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/). Sharing and adaptation are permitted with attribution and for non-commercial purposes, subject to the licence terms.
