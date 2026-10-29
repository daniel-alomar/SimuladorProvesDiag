# Simulador de pruebas diagnósticas

[Català](README.ca.md) · [Español](README.es.md) · [English](README.md)

Herramienta educativa interactiva para comprender cómo el punto de corte, las distribuciones del test y la prevalencia influyen en los resultados y en la probabilidad de enfermedad. Dirigida a estudiantes de biomedicina, bioestadística y ciencias de la salud, docentes y cualquier persona interesada en las pruebas diagnósticas.

## Cómo empezar

Abre `index.html` en el navegador. No requiere instalación, cuenta ni servidor. Funciona sin conexión; los enlaces externos requieren Internet.

Elige un escenario, anticipa qué ocurrirá y modifica una variable cada vez. Compara curvas, recuentos y probabilidad de enfermedad antes y después del test.

## Qué encontrarás

- **Simulador interactivo:** distribuciones y umbral ajustables, sensibilidad y especificidad, matriz de confusión, valores predictivos, razones de verosimilitud, ROC y precision–recall con sus áreas. El resumen de la matriz puede permanecer visible mientras ajustas el modelo.
- **Fundamentos teóricos y guía clínica:** explicaciones, fórmulas, ejemplos, guía de escenarios, glosario y referencias. Desarrolla la interpretación y los límites del modelo.
- **Casos y autoevaluación:** veinte retos con explicación de las respuestas y carga de ejemplos en el simulador.

Los diez escenarios incluyen marcadores elevados o disminuidos, distintos grados de solapamiento y dispersión, estrategias orientadas a sensibilidad o especificidad, cribado de baja prevalencia, Bayes y scores de IA. La guía integrada explica su contexto y propone un experimento para cada uno.

Disponible en catalán, castellano e inglés. Puede utilizarse en clase, prácticas, estudio autónomo y divulgación.

## Modelo e interpretación

Los datos son **sintéticos**. Los nombres clínicos contextualizan los ejemplos; no representan pruebas validadas ni protocolos asistenciales. La herramienta no está destinada a interpretar resultados personales o tomar decisiones clínicas.

El modelo compara un resultado continuo con un patrón binario. Utiliza distribuciones normales; el escenario de IA las transforma en scores logit-normales entre 0 y 1, sin presuponer calibración. Con distribuciones fijas, cambiar solo la prevalencia conserva la ROC pero modifica los valores predictivos y la PR. AUPRC integra el modelo continuo; no es average precision muestral.

La matriz muestra recuentos esperados redondeados sobre 1.000 personas. Las probabilidades se calculan sin ese redondeo. El máximo de Youden es una búsqueda aproximada de un único umbral; no incorpora costes clínicos. Consulta el manual para las fórmulas, supuestos y ejemplos detallados.

## Accesibilidad y verificación

Controles etiquetados, navegación con teclado, resúmenes textuales de gráficos y tabla de recuentos. Líneas, tramas y etiquetas complementan los colores. Estas medidas no equivalen a una auditoría completa de accesibilidad.

Ejecuta `node tests/verify.mjs` para comprobar los cálculos. Las pruebas automáticas no sustituyen la revisión visual o con tecnologías de apoyo. El historial de cambios y verificaciones está en [CANVIS.md](CANVIS.md).

## Autoría y colaboraciones

- **Autor:** [Daniel Alomar-Claramonte](https://github.com/daniel-alomar).
- **Coautores:** Jordi Piera-Jimenez, Ferran Torres, Laia Humbert-Vidan, Caridad Pontes, Gerard Carot-Sans.
- **Asistencia en el desarrollo:** Google Gemini y Codex.

## Sugerencias e incidencias

Puedes comunicarlas en [GitHub Issues](https://github.com/daniel-alomar/SimuladorProvesDiag/issues).

## Licencia

[Creative Commons Atribución–NoComercial 4.0 Internacional (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/). Permite compartir y adaptar el material con atribución y para usos no comerciales, conforme a los términos de la licencia.
