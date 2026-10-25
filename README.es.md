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


En pantallas de al menos 1.100 × 650 píxeles CSS, un resumen fijo muestra VP, FP, FN y VN mientras ajustas los controles. Se puede desactivar con «Mostrar resumen de la matriz de confusión» o Esc. Se oculta en otras pestañas y pantallas pequeñas. La gráfica de densidad limita su altura a 260–360 píxeles en pantalla amplia; la matriz completa sigue disponible.

## Composición y experimentos guiados

En pantallas amplias, los paneles fluyen en dos columnas independientes: distribuciones, probabilidades y recuentos a la izquierda; controles y ROC a la derecha. Se evitan las celdas vacías entre paneles de distinta altura. Por debajo de 1.100 píxeles, el orden es distribuciones, controles, probabilidades, recuentos y ROC.

Las tres tarjetas iniciales explican el modelo y el objetivo del experimento. «Interpretar un positivo» carga el escenario «Bayes · sensibilidad y especificidad del 90%»: prevalencia del 20%, VPP del 69,23% y riesgo tras un negativo del 2,70%. El foco pasa al control de prevalencia. Cambiar los parámetros sigue marcando el modelo como personalizado.

## Organización didáctica y guía clínica

El simulador sigue tres pasos: **observar las distribuciones, modificar el modelo e interpretar los resultados**. Las tarjetas muestran el riesgo previo, el riesgo tras un positivo y el riesgo residual tras un negativo. Las ayudas sobre densidad, recuentos y AUC son desplegables.

El manual contiene siete capítulos: distribuciones y umbral; sensibilidad y especificidad; valores predictivos; ROC, AUC y Youden; Bayes y razones de verosimilitud; guía de interpretación clínica; glosario y bibliografía. Cada capítulo comienza con una idea clave y las fórmulas se pueden desplegar.

Los ejemplos se cargan en el simulador: umbral, cribado raro, marcador disminuido, actualización bayesiana y ROC que cruza la diagonal. El caso bayesiano compara riesgos previos del 5%, 20% y 80% con sensibilidad y especificidad del 90%. El cribado diferencia recuentos esperados fraccionarios y enteros de la matriz.

La guía clínica propone definir la pregunta, estimar el riesgo previo, comprobar la aplicabilidad de la evidencia, actualizar el riesgo, valorar las consecuencias y comunicar la incertidumbre. Distingue el umbral del biomarcador de los umbrales de decisión clínica. Los ejemplos son sintéticos y no constituyen protocolos asistenciales.

La navegación incluye acceso directo al contenido, indicador de capítulo activo y foco de teclado en los controles de los ejemplos. Al imprimir el manual, las fórmulas se despliegan temporalmente.

## 👥 Autoría y Equipo Docente

* **Autor principal:** [Daniel Alomar-Claramonte](https://github.com/daniel-alomar)
* **Coautores:** Jordi Piera-Jimenez, Ferran Torres, Laia Humbert-Vidan
* **Desarrollo técnico asistido:** Google Gemini; revisión y correcciones con asistencia de Codex

---

## ✨ Características Principales

* **Arquitectura 100% Offline (Zero-CDN):** Funciona completamente sin conexión a Internet abriendo directamente el archivo HTML en cualquier navegador. Incluye su propio motor CSS, iconografía SVG vectorial y tipografía del sistema sin depender de servidores externos.
* **Diseño pedagógico en 3 pestañas:**
  1. **Simulador Interactivo Conciso:** Espacio de trabajo limpio con motor anticolisión 2D para etiquetas dinámicas, resumen de probabilidad de enfermedad antes y después del test, tabla de umbrales de AUC y matriz de 100 bloques con colores fraccionados ($N = 1.000$ pacientes).
  2. **Fundamentos Teóricos y Guía Clínica:** Manual académico exhaustivo de 6 capítulos sobre distribuciones continuas, reglas clínicas *SnNout* y *SpPin*, la Paradoja de la Exactitud, curvas ROC/AUC, el Puente de Bayes (cálculo paso a paso mediante *Odds* y Nomograma de Fagan) y referencias bibliográficas esenciales.
  3. **Banco de 20 Casos Clínicos y Autoevaluación:** 20 retos clínicos interactivos estructurados en 5 bloques temáticos (Umbral y Polaridad, Matriz y Métricas Intrínsecas, Prevalencia y Paradoja de Exactitud, Curva ROC y Youden, y Razones de Verosimilitud y Bayes), con filtro por categorías, marcador de aciertos en vivo y botón para cargar cada escenario en el simulador.
* **8 Escenarios Clínicos Preconfigurados con Distribuciones Diferenciadas:**
  1. *Troponina de alta sensibilidad* ($\mu_S=38, \sigma_S=8 \mid \mu_E=62, \sigma_E=8, c=50, P=15\%$ — Marcador elevado clásico).
  2. *Plaquetas en trombocitopenia* ($\mu_S=68, \sigma_S=7 \mid \mu_E=34, \sigma_E=10, c=49, P=18\%$ — Marcador disminuido / polaridad inversa).
  3. *Test excelente* ($\mu_S=26, \sigma_S=5.5 \mid \mu_E=74, \sigma_E=6, c=49.5, P=20\%$ — Alta separación poblacional, $\text{AUC} > 0,99$).
  4. *Test débil* ($\mu_S=46, \sigma_S=11 \mid \mu_E=54, \sigma_E=11, c=50, P=25\%$ — Gran solapamiento biológico).
  5. *Varianzas desiguales* ($\mu_S=34, \sigma_S=4.5 \mid \mu_E=62, \sigma_E=16, c=45, P=15\%$ — Heterocedasticidad biológica $\sigma_E > \sigma_S$).
  6. *Exclusión en Urgencias con Dímero-D* ($\mu_S=32, \sigma_S=9 \mid \mu_E=64, \sigma_E=11, c=42, P=12\%$ — Ejemplo sintético de sensibilidad, $\text{RV}^- < 0,1$).
  7. *Confirmación Oncológica* ($\mu_S=42, \sigma_S=6 \mid \mu_E=68, \sigma_E=10, c=60, P=30\%$ — Ejemplo sintético de especificidad, $\text{RV}^+ > 10$).
  8. *Cribado de Enfermedad Rara* ($\mu_S\approx29.368261, \sigma_S=5 \mid \mu_E\approx58.709492, \sigma_E=12, c=41, P=1\%$ — Calibrado a Sens≈93%, Esp≈99%, VPP≈48,4%; la aplicación conserva toda la precisión).
* **Trilingüe nativo con autodetección:** Detección inteligente del idioma del navegador del usuario con selector manual (catalán, español e inglés) y persistencia segura en `localStorage`.

---

## 📐 Fundamentos Matemáticos

### 1. Métricas Condicionales (Distribuciones Fijas)

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

## Hipótesis del modelo e interpretación

Los ocho escenarios son **ejemplos docentes sintéticos en unidades arbitrarias**, no pruebas calibradas clínicamente ni protocolos terapéuticos. «Sin enfermedad» indica ausencia de la enfermedad de interés según un patrón de referencia.

- Las dos curvas son densidades gaussianas condicionales; cada área completa vale uno. La altura no es un recuento de personas. Cambiar solo la prevalencia no modifica las distribuciones.
- Sensibilidad, especificidad y razones de verosimilitud son independientes de la prevalencia **si se mantienen fijas las distribuciones condicionales y el umbral**. Las poblaciones clínicas reales pueden diferir por el efecto de espectro.
- La ventana de densidad incluye al menos seis desviaciones estándar a cada lado de cada media. Las colas normales se extienden más allá; los valores negativos son una propiedad del modelo matemático.
- La ROC completa incluye (0,0) y (1,1). El AUC respeta la polaridad seleccionada y puede ser inferior a 0,5. AUC=0,5 no implica por sí solo distribuciones iguales ni una ROC diagonal si las varianzas difieren.
- La interpretación muestra probabilidad previa de enfermedad, VPP y riesgo tras un negativo (1−VPN). SnNout, SpPin, RV+>10 y RV−<0,1 no garantizan confirmación ni exclusión. Con probabilidad previa del 90%, RV−=0,1 aún deja un riesgo posterior del 47,4%.
- La tabla de N=1.000 contiene **recuentos esperados redondeados**, no una muestra aleatoria. Los porcentajes de las celdas se refieren a toda la cohorte. Los valores predictivos se calculan sin redondear y pueden diferir de los cocientes de la tabla. Los colores fraccionados de los 100 pictogramas preservan todos los recuentos enteros (un cuadro = diez personas).
- Los valores predictivos no definidos se muestran como «—» y las RV infinitas como «∞». Las probabilidades muy pequeñas se formatean sin alterar su valor. El modelo no estima intervalos de confianza clínicos.

### AUC y Youden

Para medidas gaussianas independientes de caso y control:

$$AUC_{alto}=\Phi\!\left(\frac{\mu_E-\mu_S}{\sqrt{\sigma_E^2+\sigma_S^2}}\right),\qquad AUC_{bajo}=1-AUC_{alto}.$$

$$J(c)=Sens(c)-FPR(c),\qquad Exactitud\ equilibrada=\frac{J(c)+1}{2}.$$

El optimizador busca en **[5,95], con paso 0,1**, incluyendo los extremos. Encuentra un máximo aproximado dentro de ese intervalo, pondera igual las tasas de error de los grupos y no incorpora prevalencia ni costes por paciente. No busca reglas sin restricción ni de dos umbrales.

### Accesibilidad y validación

Los controles tienen etiquetas asociadas; las pestañas admiten flechas, Home y End; las gráficas tienen resúmenes textuales y la matriz es una tabla semántica. El cambio de idioma actualiza la lengua del documento. Las ayudas funcionan con foco de teclado, la respuesta de los ejercicios se anuncia y el foco se conserva. Las entradas numéricas se validan antes de modificar el estado.

Ejecuta las pruebas numéricas con `node tests/verify.mjs`. Comprueban colas gaussianas, polaridad, identidades de Bayes, totales poblacionales, integración ROC, Youden y escenarios calibrados. Estas pruebas no sustituyen una auditoría visual de navegador o de tecnologías de apoyo.

Referencias: [distribución normal, NIST](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3661.htm), [razones de verosimilitud, BMJ](https://www.bmj.com/content/329/7458/168), [efecto de espectro, BMJ](https://www.bmj.com/content/353/bmj.i3139).

---

## 💻 Ejecución en Local (100% Offline)

1. Clona o descarga el repositorio:
   ```bash
   git clone https://github.com/daniel-alomar/SimuladorProvesDiag.git
   ```
2. Haz doble clic directamente sobre `index.html` para abrirlo en cualquier navegador web moderno (Chrome, Firefox, Safari, Edge). **Funciona íntegramente sin conexión a Internet.**

---

## 💬 Sugerencias y Errores

Cualquier sugerencia de mejora, propuesta de caso clínico o reporte de errores puede enviarse directamente a través de la sección de [**GitHub Issues**](https://github.com/daniel-alomar/SimuladorProvesDiag/issues) del repositorio.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia [Creative Commons Reconocimiento-NoComercial 4.0 Internacional (CC BY-NC 4.0)](LICENSE) — eres libre de compartir, copiar, distribuir y adaptar el material para cualquier propósito educativo, de investigación o no comercial, reconociendo adecuadamente la autoría del equipo docente indicado anteriormente.
