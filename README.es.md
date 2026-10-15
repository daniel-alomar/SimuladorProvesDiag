# Simulador de Rendimiento de Pruebas Diagnósticas

<p align="center">
  <a href="README.md">English</a> · 
  <a href="README.ca.md">Català</a> · 
  <b><a href="README.es.md">Español</a></b>
</p>

<p align="center">
  <a href="https://pages.github.com/"><img src="https://img.shields.io/badge/Despliegue-GitHub%20Pages-blue?logo=github" alt="GitHub Pages"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/Licencia-CC%20BY--NC%204.0-lightgrey.svg" alt="Licencia CC BY-NC 4.0"></a>
  <img src="https://img.shields.io/badge/Idiomas-CA%20%7C%20EN%20%7C%20ES-orange" alt="Multilingüe">
  <img src="https://img.shields.io/badge/Dependencias-Cero-success" alt="Cero Dependencias">
</p>

Un simulador web interactivo diseñado para estudiantes, docentes e investigadores en los ámbitos de la epidemiología, la bioestadística y la medicina basada en la evidencia. Permite visualizar y manipular en tiempo real los fundamentos matemáticos y probabilísticos que rigen el rendimiento de una prueba diagnóstica cuantitativa continua, el establecimiento de puntos de corte y el análisis de curvas ROC.

---

## 🎯 Objetivo y Visión General

En el diagnóstico clínico y el análisis de biomarcadores, las mediciones rara vez se presentan como categorías binarias puras; la gran mayoría siguen distribuciones continuas que se solapan entre individuos sanos y enfermos. La elección del punto de corte (*cutoff*) determina de forma crítica el equilibrio clínico entre falsos positivos y falsos negativos.

Este simulador permite experimentar de forma directa cómo interactúan:

* **El umbral de decisión:** Arrastra la línea discontinua directamente sobre el gráfico de densidad o utiliza el optimizador automático de Youden.
* **La direccionalidad clínica:** Comprende tanto los marcadores donde concentraciones elevadas indican patología (ej: troponina en infarto de miocardio, proteína C reactiva) como aquellos donde el déficit indica enfermedad (ej: recuento de plaquetas en trombocitopenia, hemoglobina en anemia, linfocitos CD4).
* **Dispersión poblacional heterogénea:** Modela la variabilidad biológica real donde los individuos enfermos suelen presentar una varianza ($\sigma_E^2$) superior a la de los controles sanos.
* **La influencia de la prevalencia:** Observa cómo la prevalencia altera de forma determinante el Valor Predictivo Positivo (VPP), el Valor Predictivo Negativo (VPN) y la Exactitud Global (*Accuracy*), sin alterar la Sensibilidad ni la Especificidad intrínsecas.
* **Curva ROC y Razones de Verosimilitud:** Trazado automático de la curva ROC (*Receiver Operating Characteristic*), cálculo analítico del área bajo la curva (AUC) con calificación cualitativa, y obtención de las Razones de Verosimilitud positiva ($RV^+$) y negativa ($RV^-$).

---

## ✨ Características Principales

* **Interacción directa con el gráfico:** Arrastra el umbral con el ratón o pantalla táctil para recalcular al instante las áreas de densidad.
* **Sonda de inspección dinámica:** Al desplazar el cursor sobre el gráfico de densidades, se obtiene una lectura continua del valor numérico del biomarcador y su clasificación resultante (Test + o Test -).
* **Inversión de sentido clínico:** Conmuta en un solo clic entre *Valor Alto $\rightarrow$ Enfermo* y *Valor Bajo $\rightarrow$ Enfermo*.
* **Optimizador de Youden:** Botón para calcular y posicionar instantáneamente el umbral en el punto de máxima eficacia conjunta ($J$).
* **Matriz de confusión dinámica:** Cálculo en tiempo real de Verdaderos Positivos (VP), Falsos Positivos (FP), Falsos Negativos (FN) y Verdaderos Negativos (VN) escalados para una cohorte estándar de $N = 1.000$ personas.
* **Panel de métricas completo:** Cálculo instantáneo de Sensibilidad, Especificidad, VPP, VPN, Exactitud (*Accuracy*), Índice de Youden ($J$), $RV^+$ y $RV^-$.
* **Mini-gráfico ROC sincronizado:** Muestra la trayectoria completa de la curva ROC y la posición exacta del punto operativo actual.
* **Trilingüe nativo con autodetección:** Detección inteligente del idioma del navegador del usuario con selector manual (catalán, español e inglés) y persistencia en `localStorage`.
* **Cero dependencias:** Un único archivo autónomo HTML5 + JavaScript puro + Tailwind CSS por CDN. Sin necesidad de herramientas de compilación, servidores ni `npm`.

---

## 📐 Fundamentos Matemáticos

### 1. Métricas Intrínsecas (Independientes de la Prevalencia)

Considerando la población sana $X_S \sim \mathcal{N}(\mu_S, \sigma_S^2)$ y la población enferma $X_E \sim \mathcal{N}(\mu_E, \sigma_E^2)$, con función de distribución acumulada de la normal estándar $\Phi(z)$ y umbral de decisión $c$:

* **Cuando valores más altos indican patología ($X \ge c$):**
  $$\text{Sensibilidad} = 1 - \Phi\left(\frac{c - \mu_E}{\sigma_E}\right) = \frac{\text{VP}}{\text{VP} + \text{FN}}$$
  $$\text{Especificidad} = \Phi\left(\frac{c - \mu_S}{\sigma_S}\right) = \frac{\text{VN}}{\text{VN} + \text{FP}}$$

* **Cuando valores más bajos indican patología ($X \le c$):**
  $$\text{Sensibilidad} = \Phi\left(\frac{c - \mu_E}{\sigma_E}\right)$$
  $$\text{Especificidad} = 1 - \Phi\left(\frac{c - \mu_S}{\sigma_S}\right)$$

* **Índice de Youden ($J$):**
  Mide la eficacia global del corte sin ponderar asimétricamente los errores. Geométricamente equivale a la distancia vertical máxima sobre la diagonal de azar en la curva ROC:
  $$J = \text{Sensibilidad} + \text{Especificidad} - 1 \quad (0 \le J \le 1)$$

* **Razones de Verosimilitud (*Likelihood Ratios*):**
  Indican cuántas veces es más probable obtener un determinado resultado en un individuo enfermo respecto a uno sano:
  $$\text{RV}^+ = \frac{\text{Sensibilidad}}{1 - \text{Especificidad}} = \frac{\text{Sensibilidad}}{\text{Tasa Falsos Positivos}}$$
  $$\text{RV}^- = \frac{1 - \text{Sensibilidad}}{\text{Especificidad}} = \frac{\text{Tasa Falsos Negativos}}{\text{Especificidad}}$$
  *(Valores de $\text{RV}^+ > 10$ o de $\text{RV}^- < 0.1$ generan cambios diagnósticos concluyentes según el nomograma de Fagan).*

* **Área Bajo la Curva ROC (AUC analítica):**
  Para dos distribuciones normales, el AUC corresponde a la probabilidad de que un enfermo elegido al azar presente un resultado más indicativo de patología que un sano:
  $$\text{AUC} = \Phi\left(\frac{|\mu_E - \mu_S|}{\sqrt{\sigma_E^2 + \sigma_S^2}}\right)$$

---

### 2. Métricas Clínicas Predictivas (Dependientes de la Prevalencia)

Para una prevalencia poblacional conocida $P = P(\text{Enfermo})$:

* **Valor Predictivo Positivo (VPP):**
  $$\text{VPP} = \frac{\text{Sensibilidad} \cdot P}{\text{Sensibilidad} \cdot P + (1 - \text{Especificidad}) \cdot (1 - P)}$$

* **Valor Predictivo Negativo (VPN):**
  $$\text{VPN} = \frac{\text{Especificidad} \cdot (1 - P)}{\text{Especificidad} \cdot (1 - P) + (1 - \text{Sensibilidad}) \cdot P}$$

* **Exactitud Global (*Accuracy*):**
  Proporción total de individuos clasificados de forma correcta (sanos y enfermos) sobre el conjunto de la cohorte:
  $$\text{Accuracy} = \frac{\text{VP} + \text{VN}}{\text{Total } (N)} = \text{Sensibilidad} \cdot P + \text{Especificidad} \cdot (1 - P)$$

> ⚠️ **La Paradoja de la Exactitud (*Accuracy Paradox*):**
> La exactitud diagnóstica depende fuertemente de la prevalencia. En patologías de baja prevalencia (ej. $P = 1\%$), un modelo trivial que prediga sistemáticamente a todos como "sanos" alcanzaría una *Accuracy* engañosa del **99%**, a pesar de presentar una Sensibilidad del **0%** y omitir la totalidad de los casos reales. Por ello, en biomedicina y *Machine Learning* clínico nunca se confía únicamente en la exactitud global.

---

## 🤝 Cómo Colaborar

Este simulador es un proyecto de código abierto y agradece las contribuciones de docentes, profesionales sanitarios, estudiantes y desarrolladores. Puedes colaborar en diferentes áreas:

1. **Añadir nuevos casos clínicos predeterminados:** Biomarcadores clínicos de uso común en urgencias, oncología, hematología o nefrología.
2. **Mejoras pedagógicas:** Propuesta de explicaciones adicionales, ejercicios docentes autoevaluables o material para talleres universitarios.
3. **Traducciones:** Corrección de estilos o incorporación de nuevos idiomas.
4. **Mejoras de código:** Accesibilidad, rendimiento del renderizado en Canvas o nuevas visualizaciones estadísticas.

### Pasos para enviar una contribución:
1. Haz un **Fork** de este repositorio.
2. Crea una rama para tu mejora (`git checkout -b feature/nuevo-biomarcador`).
3. Guarda tus cambios con un mensaje descriptivo (`git commit -m "feat: añade caso clínico de dímero D"`).
4. Sube la rama a tu fork (`git push origin feature/nuevo-biomarcador`).
5. Abre un **Pull Request** detallando tus aportaciones.

---

## 💡 Sugerencias y Feedback (Sin Spam)

Para proteger la privacidad y evitar el bombardeo de spam que provocan los rastreadores automatizados de correos web, **no se publican direcciones de correo electrónico personales en este repositorio**.

Cualquier propuesta o consulta se gestiona de forma pública y colaborativa:

* **Para sugerir una mejora o reportar un error:** Abre una propuesta en la sección de [Issues de GitHub](https://github.com/<tu-usuario>/<nombre-del-repositorio>/issues/new?labels=enhancement,feedback&title=%5BSugerencia%5D+).
* **Para debates docentes o consultas generales:** Participa en la sección de [Discussions de GitHub](https://github.com/<tu-usuario>/<nombre-del-repositorio>/discussions).

---

## 🚀 Despliegue en GitHub Pages

Para publicar el simulador en tu propia cuenta de GitHub de forma gratuita y pública:

1. Crea un nuevo repositorio en GitHub (ej: `simulador-diagnostico`).
2. Sube este archivo HTML renombrándolo como **`index.html`** en la raíz del repositorio:
   ```bash
   git init
   git add index.html README.md README.ca.md README.es.md LICENSE
   git commit -m "feat: publicación inicial del simulador diagnóstico"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/<nombre-del-repositorio>.git
   git push -u origin main
   ```
3. En el repositorio de GitHub, ve a **Settings** $\rightarrow$ **Pages**.
4. En **Build and deployment** / **Branch**, selecciona la rama `main` y la carpeta `/ (root)`, y haz clic en **Save**.
5. En unos segundos, tu simulador estará accesible públicamente en:
   `https://<tu-usuario>.github.io/<nombre-del-repositorio>/`

---

## 💻 Ejecución en Local

Dado que es una aplicación autónoma en un único archivo:

1. Clona o descarga el repositorio:
   ```bash
   git clone https://github.com/<tu-usuario>/<nombre-del-repositorio>.git
   ```
2. Haz doble clic directamente sobre `index.html` (o `simulador_diagnostic.html`) para abrirlo en cualquier navegador web moderno (Chrome, Firefox, Safari, Edge). No requiere conexión a Internet una vez cargado el estilo Tailwind.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia [Creative Commons Reconocimiento-NoComercial 4.0 Internacional (CC BY-NC 4.0)](LICENSE) — eres libre de compartir, copiar, distribuir y adaptar el material para cualquier propósito educativo, de investigación o no comercial, siempre que se reconozca la autoría original.