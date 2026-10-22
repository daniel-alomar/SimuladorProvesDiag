# Simulador de Pruebas Diagnósticas (100% Offline)

<p align="center">
  <a href="README.md">English</a> · 
  <a href="README.ca.md">Català</a> · 
  <b><a href="README.es.md">Español</a></b>
</p>

<p align="center">
  <a href="https://daniel-alomar.github.io/SimuladorProvesDiag/"><img src="https://img.shields.io/badge/Despliegue-GitHub%20Pages-blue?logo=github" alt="GitHub Pages"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/Licencia-CC%20BY--NC%204.0-lightgrey.svg" alt="Licencia CC BY-NC 4.0"></a>
  <img src="https://img.shields.io/badge/Idiomas-ES%20%7C%20CA%20%7C%20EN-orange" alt="Multilingüe">
  <img src="https://img.shields.io/badge/Offline-100%25%20Autónomo-success" alt="100% Offline">
</p>

Un simulador web interactivo y 100% autónomo diseñado para estudiantes, docentes e investigadores en epidemiología, bioestadística y medicina. Permite visualizar y manipular en tiempo real los fundamentos matemáticos y probabilísticos detrás del rendimiento de una prueba diagnóstica cuantitativa continua.

---

## 👥 Autoría y Equipo Docente

* **Autor principal:** [Daniel Alomar-Claramonte](https://github.com/daniel-alomar)
* **Coautores:** Jordi Piera-Jimenez, Ferran Torres, Laia Humbert-Vidan
* **Desarrollo técnico asistido:** Google Gemini

---

## ✨ Características Principales

* **Arquitectura 100% Offline (Zero-CDN):** Funciona completamente sin conexión a Internet abriendo directamente el archivo HTML en cualquier navegador. Incluye su propio motor CSS, iconografía SVG vectorial y tipografía del sistema sin depender de servidores externos.
* **Diseño pedagógico en 3 pestañas:**
  1. **Simulador Interactivo Conciso:** Espacio de trabajo limpio con motor anticolisión 2D para etiquetas dinámicas, diagnóstico operativo en tiempo real, tabla de umbrales de AUC y matriz visual de proporciones ($N = 1.000$ pacientes).
  2. **Fundamentos Teóricos y Guía Clínica:** Manual académico exhaustivo de 6 capítulos sobre distribuciones continuas, reglas clínicas *SnNout* y *SpPin*, la Paradoja de la Exactitud, curvas ROC/AUC, el Puente de Bayes (cálculo paso a paso mediante *Odds* y Nomograma de Fagan) y 9 referencias bibliográficas esenciales.
  3. **Banco de 20 Casos Clínicos y Autoevaluación:** 20 retos clínicos interactivos estructurados en 5 bloques temáticos (Umbral y Polaridad, Matriz y Métricas Intrínsecas, Prevalencia y Paradoja de Exactitud, Curva ROC y Youden, y Razones de Verosimilitud y Bayes), con filtro por categorías, marcador de aciertos en vivo y botón para cargar cada escenario en el simulador.
* **8 Escenarios Clínicos Preconfigurados con Distribuciones Diferenciadas:**
  1. *Troponina de alta sensibilidad* ($\mu_S=38, \sigma_S=8 \mid \mu_E=62, \sigma_E=8, c=50, P=15\%$ — Marcador elevado clásico).
  2. *Plaquetas en trombocitopenia* ($\mu_S=68, \sigma_S=7 \mid \mu_E=34, \sigma_E=10, c=49, P=18\%$ — Marcador disminuido / polaridad inversa).
  3. *Test excelente* ($\mu_S=26, \sigma_S=5.5 \mid \mu_E=74, \sigma_E=6, c=49.5, P=20\%$ — Alta separación poblacional, $\text{AUC} > 0,99$).
  4. *Test débil* ($\mu_S=46, \sigma_S=11 \mid \mu_E=54, \sigma_E=11, c=50, P=25\%$ — Gran solapamiento biológico).
  5. *Dispersión asimétrica* ($\mu_S=34, \sigma_S=4.5 \mid \mu_E=62, \sigma_E=16, c=45, P=15\%$ — Heterocedasticidad biológica $\sigma_E > \sigma_S$).
  6. *Exclusión en Urgencias con Dímero-D* ($\mu_S=32, \sigma_S=9 \mid \mu_E=64, \sigma_E=11, c=42, P=12\%$ — Regla *SnNout*, $\text{RV}^- < 0,1$).
  7. *Confirmación Oncológica* ($\mu_S=42, \sigma_S=6 \mid \mu_E=68, \sigma_E=10, c=60, P=30\%$ — Regla *SpPin*, $\text{RV}^+ > 10$).
  8. *Cribado Poblacional de Enfermedad Rara* ($\mu_S=28, \sigma_S=5 \mid \mu_E=58, \sigma_E=12, c=41, P=1\%$ — Paradoja del VPP y la Exactitud).
* **Trilingüe nativo con autodetección:** Detección inteligente del idioma del navegador del usuario con selector manual (catalán, español e inglés) y persistencia segura en `localStorage`.

---

## 📐 Fundamentos Matemáticos

### 1. Métricas Intrínsecas (Independientes de la Prevalencia)

Considerando la población sana $X_S \sim \mathcal{N}(\mu_S, \sigma_S^2)$ y la población enferma $X_E \sim \mathcal{N}(\mu_E, \sigma_E^2)$ con función de distribución acumulada $\Phi(x; \mu, \sigma)$:

* **Cuando valores más altos indican patología ($X \ge c$):**
  $$\text{Sensibilidad} = 1 - \Phi(c; \mu_E, \sigma_E) = \frac{\text{VP}}{\text{VP} + \text{FN}}$$
  $$\text{Especificidad} = \Phi(c; \mu_S, \sigma_S) = \frac{\text{VN}}{\text{VN} + \text{FP}}$$

* **Cuando valores más bajos indican patología ($X \le c$):**
  $$\text{Sensibilidad} = \Phi(c; \mu_E, \sigma_E)$$
  $$\text{Especificidad} = 1 - \Phi(c; \mu_S, \sigma_S)$$

* **Índice de Youden ($J$):**
  $$J = \text{Sensibilidad} + \text{Especificidad} - 1$$

* **Razones de Verosimilitud ($RV^+$ y $RV^-$):**
  $$RV^+ = \frac{\text{Sensibilidad}}{1 - \text{Especificidad}}, \qquad RV^- = \frac{1 - \text{Sensibilidad}}{\text{Especificidad}}$$

---

### 2. Métricas Clínicas Predictivas y Puente de Bayes

Para una prevalencia poblacional $P = P(\text{Enfermo})$ y oportunidad relativa pre-test $\text{Odds}_{\text{pre}} = \frac{P}{1 - P}$:

* **Actualización Bayesiana mediante Odds:**
  $$\text{Odds}_{\text{post}} = \text{Odds}_{\text{pre}} \times RV, \qquad P_{\text{post}} = \frac{\text{Odds}_{\text{post}}}{1 + \text{Odds}_{\text{post}}}$$

* **Valor Predictivo Positivo (VPP) y Negativo (VPN):**
  $$\text{VPP} = \frac{\text{Sensibilidad} \cdot P}{\text{Sensibilidad} \cdot P + (1 - \text{Especificidad}) \cdot (1 - P)}, \qquad \text{VPN} = \frac{\text{Especificidad} \cdot (1 - P)}{\text{Especificidad} \cdot (1 - P) + (1 - \text{Sensibilidad}) \cdot P}$$

* **Exactitud Global (*Accuracy*):**
  $$\text{Exactitud} = \text{Sensibilidad} \cdot P + \text{Especificidad} \cdot (1 - P) = \frac{\text{VP} + \text{VN}}{N}$$

---

## 💻 Ejecución en Local (100% Offline)

1. Clona o descarga el repositorio:
   ```bash
   git clone https://github.com/daniel-alomar/SimuladorProvesDiag.git
   ```
2. Haz doble clic directamente sobre `simulador_diagnostic.html` (o `index.html`) para abrirlo en cualquier navegador web moderno (Chrome, Firefox, Safari, Edge). **Funciona íntegramente sin conexión a Internet.**

---

## 💬 Sugerencias y Errores

Cualquier sugerencia de mejora, propuesta de caso clínico o reporte de errores puede enviarse directamente a través de la sección de [**GitHub Issues**](https://github.com/daniel-alomar/SimuladorProvesDiag/issues) del repositorio.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia [Creative Commons Reconocimiento-NoComercial 4.0 Internacional (CC BY-NC 4.0)](LICENSE) — eres libre de compartir, copiar, distribuir y adaptar el material para cualquier propósito educativo, de investigación o no comercial, siempre que se reconozca la autoría original (**Daniel Alomar-Claramonte, Jordi Piera-Jimenez, Ferran Torres, Laia Humbert-Vidan**).
