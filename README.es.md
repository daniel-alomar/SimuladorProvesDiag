# Laboratorio de Rendimiento de Pruebas Diagnósticas (100% Offline)

<p align="center">
  <a href="README.md">English</a> · 
  <a href="README.ca.md">Català</a> · 
  <b><a href="README.es.md">Español</a></b>
</p>

<p align="center">
  <a href="https://pages.github.com/"><img src="https://img.shields.io/badge/Despliegue-GitHub%20Pages-blue?logo=github" alt="GitHub Pages"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/Licencia-CC%20BY--NC%204.0-lightgrey.svg" alt="Licencia CC BY-NC 4.0"></a>
  <img src="https://img.shields.io/badge/Idiomas-ES%20%7C%20CA%20%7C%20EN-orange" alt="Multilingüe">
  <img src="https://img.shields.io/badge/Offline-100%25%20Autónomo-success" alt="100% Offline">
</p>

Un laboratorio web interactivo y 100% autónomo diseñado para estudiantes, docentes e investigadores en epidemiología, bioestadística y medicina. Permite visualizar y manipular en tiempo real los fundamentos matemáticos y probabilísticos detrás del rendimiento de una prueba diagnóstica cuantitativa continua.

---

## ✨ Características Principales

* **Arquitectura 100% Offline (Zero-CDN):** Funciona completamente sin conexión a Internet abriendo directamente el archivo HTML en cualquier navegador. Incluye su propio motor CSS, iconografía SVG vectorial y tipografía del sistema sin depender de servidores externos.
* **Diseño pedagógico en 3 pestañas:**
  1. **Simulador Interactivo Conciso:** Espacio de trabajo limpio con diagnóstico operativo en tiempo real y matriz visual de proporciones ($N = 1.000$ pacientes).
  2. **Fundamentos Teóricos y Guía Clínica:** Manual académico exhaustivo sobre distribuciones continuas, reglas clínicas *SnNout* y *SpPin*, la Paradoja de la Exactitud, curvas ROC/AUC y Razones de Verosimilitud de Bayes.
  3. **Banco de 20 Casos Clínicos y Autoevaluación:** 20 retos clínicos interactivos estructurados en 5 bloques temáticos (Umbral y Polaridad, Matriz y Métricas Intrínsecas, Prevalencia y Paradoja de Exactitud, Curva ROC y Youden, y Razones de Verosimilitud y Bayes), con filtro por categorías, marcador de aciertos en vivo y botón para cargar cada escenario en el simulador.
* **Interacción directa con el gráfico:** Arrastra el umbral con el ratón o pantalla táctil para recalcular al instante las áreas de densidad.
* **Sonda de inspección dinámica:** Al desplazar el cursor sobre el gráfico de densidades, se obtiene una lectura continua del valor numérico del biomarcador y su clasificación resultante (Test + o Test -).
* **Inversión de sentido clínico:** Conmuta en un solo clic entre *Valor Alto $\rightarrow$ Enfermo* y *Valor Bajo $\rightarrow$ Enfermo*.
* **Optimizador de Youden:** Botón para calcular y posicionar instantáneamente el umbral en el punto de máxima eficacia conjunta ($J$).
* **Matriz de confusión dinámica:** Cálculo en tiempo real de Verdaderos Positivos (VP), Falsos Positivos (FP), Falsos Negativos (FN) y Verdaderos Negativos (VN) escalados para una cohorte estándar de $N = 1.000$ personas.
* **Panel de métricas completo:** Cálculo instantáneo y exacto de Sensibilidad, Especificidad, VPP, VPN, Exactitud (*Accuracy*), Índice de Youden ($J$), $RV^+$ y $RV^-$.
* **Mini-gráfico ROC sincronizado:** Muestra la trayectoria completa de la curva ROC y la posición exacta del punto operativo actual.
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

### 2. Métricas Clínicas Predictivas (Dependientes de la Prevalencia)

Para una prevalencia poblacional $P = P(\text{Enfermo})$:

* **Valor Predictivo Positivo (VPP):**
  $$\text{VPP} = \frac{\text{Sensibilidad} \cdot P}{\text{Sensibilidad} \cdot P + (1 - \text{Especificidad}) \cdot (1 - P)}$$

* **Valor Predictivo Negativo (VPN):**
  $$\text{VPN} = \frac{\text{Especificidad} \cdot (1 - P)}{\text{Especificidad} \cdot (1 - P) + (1 - \text{Sensibilidad}) \cdot P}$$

* **Exactitud Global (*Accuracy*):**
  $$\text{Exactitud} = \text{Sensibilidad} \cdot P + \text{Especificidad} \cdot (1 - P) = \frac{\text{VP} + \text{VN}}{N}$$

---

## 💻 Ejecución en Local (100% Offline)

Dado que es una aplicación 100% autónoma en un único archivo sin dependencias externas:

1. Clona o descarga el repositorio:
   ```bash
   git clone https://github.com/<tu-usuario>/<nombre-del-repositorio>.git
   ```
2. Haz doble clic directamente sobre `simulador_diagnostic.html` (o `index.html`) para abrirlo en cualquier navegador web moderno (Chrome, Firefox, Safari, Edge). **Funciona íntegramente sin conexión a Internet.**

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia [Creative Commons Reconocimiento-NoComercial 4.0 Internacional (CC BY-NC 4.0)](LICENSE) — eres libre de compartir, copiar, distribuir y adaptar el material para cualquier propósito educativo, de investigación o no comercial, siempre que se reconozca la autoría original.