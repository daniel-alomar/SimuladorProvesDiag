# Revisió del simulador de proves diagnòstiques

Data: 24 d’octubre de 2026.

## Fitxers i instal·lació

- `index.html`: simulador autònom actualitzat; es pot obrir directament al navegador.
- `README.md`, `README.ca.md`, `README.es.md`: documentació actualitzada en anglès, català i castellà.
- `tests/verify.mjs`: proves numèriques sense dependències externes, executables amb Node.js.

Per actualitzar el repositori, copia aquests fitxers conservant l’estructura de carpetes i la llicència existent. Per utilitzar només el simulador, obre `index.html`.

## Correccions aplicades

1. AUC amb el signe corresponent a la polaritat seleccionada i tram visible per a AUC inferior a 0,5.
2. Probabilitats gaussianes sense retall artificial a 0,0001–0,9999; les cues petites es calculen directament. Divisions per zero i resultats impossibles es representen explícitament.
3. Interpretació basada en probabilitat prèvia, VPP i risc després d’un negatiu, amb els límits clínics de SnNout, SpPin i les RV.
4. Validació dels camps numèrics abans d’actualitzar el model; restauració del valor anterior i missatge accessible quan una entrada és invàlida.
5. Calibratge dels escenaris de cribratge rar, Q9, Q14, Q17 i Q20 perquè concordin amb els enunciats. Distribució equilibrada de la posició de les respostes correctes.
6. Explicació corregida d’AUC=0,5, heteroscedasticitat, efecte d’espectre, independència condicional i diferència entre J(c) i max J.
7. ROC completa amb extrems (0,0) i (1,1); finestra de densitat que cobreix almenys sis desviacions estàndard a cada costat de les dues mitjanes.
8. Matriu de recomptes esperats arrodonits, amb denominadors explicats. Els 100 pictogrames utilitzen fraccions de color que preserven els recomptes enters, inclosos els errors poc freqüents.
9. Cerca de Youden documentada en [5,95], amb pas 0,1 i ambdós extrems inclosos.
10. Etiquetes associades als controls, resums textuals de gràfiques, taula semàntica, navegació de pestanyes amb teclat, idioma del document actualitzat, focus conservat als exercicis i retorn textual anunciat.
11. Càrrega d’escenaris centralitzada, selector «Personalitzat / exercici» i actualització del gràfic sense reconstruir els pictogrames en passar-hi el cursor.
12. Manual de set capítols i README revisats en els tres idiomes. Es conserven l’autoria i la llicència originals.

## Disseny i ampliació del manual

- Simulador reorganitzat en observar, modificar i interpretar, amb tres targetes de risc.
- Manual de set capítols amb idees clau, fórmules desplegables, taules resoltes, glossari i guia clínica pròpia.
- Cinc exemples carregables al simulador, amb instruccions contextuals i focus al control corresponent.
- Navegació de capítols amb indicador actiu, accés directe al contingut i adaptació a pantalles estretes.
- Impressió del manual amb fórmules desplegades i restauració posterior de l’estat de lectura.
- README actualitzats en català, castellà i anglès.

## Segona revisió del disseny

- Substitució de la graella amb files compartides per dues columnes independents; desapareix la reserva d’espai sota els controls.
- Capçalera amb composició editorial, tipografia amb més contrast jeràrquic i paleta verd petroli.
- Tres targetes d’experiment amb nom, context i indicador de selecció.
- Escenari Bayes incorporat al selector; càlculs verificats i focus al control de prevalença.
- Microtextos revisats en els tres idiomes i eliminació de la repetició dels percentatges sota les targetes de risc.
- Reordenació dels panells en pantalles estretes conservant valors, interaccions i focus.
- Proves afegides per a l’escenari Bayes, les descripcions i els canvis entre amplades.

## Verificació

Han passat **19 grups de proves numèriques**, incloent-hi valors de referència de la CDF, simetria i cues, identitats bayesianes, inversió de polaritat, totals poblacionals, integració numèrica de la ROC, optimització de Youden i coherència dels exercicis.

Per repetir-les:

```sh
node tests/verify.mjs
```

També han passat **20 grups de proves d’interacció en un document simulat amb jsdom**: inicialització, noms accessibles, escenaris, validació, polaritat, text interpretatiu, pestanyes i idiomes, focus i puntuació dels exercicis, càrrega de casos, pictogrames, teclat, ajudes i referències ARIA; també exemples guiats en tres idiomes, navegació del manual i restauració després d’imprimir.

La política de seguretat de l’entorn ha bloquejat l’obertura del fitxer local al navegador. Per tant, **no s’ha completat una comprovació visual en navegador ni una auditoria amb lector de pantalla**. Les proves de document simulat substitueixen el context del canvas i les dimensions; no validen el dibuix real ni la disposició visual. Abans d’una publicació docent, convé comprovar visualment les tres llengües en pantalla ampla i mòbil.

## Ajustos de comparació simultània — 25 d’octubre de 2026

Resum fix opcional dels quatre recomptes en pantalles amples, coherent amb la matriu completa. Es desactiva amb Esc sense moure el focus. Espai de desplaçament reservat i desactivació en pantalles estretes o baixes. Alçada del gràfic limitada per evitar creixement proporcional excessiu. Proves de sincronització, visibilitat i teclat superades; comprovació visual pendent.

### Distribució visual al resum fix

Els recomptes apareixen a l’esquerra i una graella de 20 × 5 quadres a la dreta. Cada quadre representa 10 persones; els colors fraccionats conserven els recomptes, inclosos els errors poc freqüents. Les dues graelles utilitzen la mateixa funció de dibuix. S’ha comprovat la coincidència dels 100 quadres amb la vista completa en els escenaris de troponina, cribratge rar i Bayes.

### Correcció de la finestra sense maximitzar

Eliminat el límit de 1.100 × 650 que amagava el resum. La casella controla la visibilitat independentment de la mida; en finestres estretes o baixes es mostren només els recomptes. En desactivar-lo es conserva l’espai reservat per evitar el salt dels crèdits. Verificades les transicions de mida, la casella i la conservació de l’espai i del contingut del peu.

### Seguiment de l’àrea visible del navegador

Etiqueta canviada a «Mostrar resum de la matriu de confusió». Posició del resum ajustada amb visualViewport quan està disponible, incloent desplaçaments i canvis de mida. Proves de coordenades i traducció superades. La causa del comportament notificat no s’ha pogut reproduir visualment; no es dona per confirmada la resolució al navegador. Es facilita simulador-resum-revisat.html com a còpia idèntica per descartar una pestanya amb contingut anterior.

### Compatibilitat del resum amb Firefox

Després de la notificació que Chromium conserva el resum però Firefox l’amaga en restaurar la finestra, s’elimina l’ancoratge JavaScript basat en visualViewport. El resum utilitza exclusivament position: fixed amb bottom, left i right a zero. La mesura de l’espai reservat es programa després del canvi de mida i rebutja alçades nul·les o no finites. Es conserva l’etiqueta «Mostrar resum de la matriu de confusió».

Han passat 19 grups numèrics i 20 grups de document simulat. Les proves comproven que valors nuls o desactualitzats de visualViewport no alteren la geometria CSS. Aquestes proves no executen Firefox: la resolució del problema en aquest navegador continua pendent de confirmació visual.

### Diagnòstic del problema persistent a Firefox

S’afegeix un panell desplegable sota la casella del resum. Informa de la versió del navegador, mida de la finestra, geometria, estils calculats i element superposat al centre del resum. No transmet dades. El problema continua pendent de diagnòstic amb les dades de la finestra afectada. Verificats 19 grups numèrics i 21 grups d’interacció amb document simulat.

### Versió final sense diagnòstic

L’usuari confirma que el resum sí que apareixia: en restaurar la finestra, la part inferior quedava fora de la pantalla. Es retira completament el panell de diagnòstic, els seus textos, estils i esdeveniments. Es manté l’ancoratge natiu amb CSS i la mesura agrupada amb requestAnimationFrame per reservar espai, evitant escriptures d’estil quan el valor no canvia. Es conserva «Mostrar resum de la matriu de confusió» i l’adaptació compacta. Verificació final: 19 grups numèrics i 20 grups d’interacció superats.

## Introducció, destinataris i coautoria — 28 d’octubre de 2026

- Recuperada la introducció al paradigma continu i al llindar de decisió, amb patró de referència, distribucions normals i variàncies desiguals. Es diferencia el llindar de classificació de la decisió assistencial i s’evita presentar una dispersió més gran en casos com una regla general.
- Caridad Pontes afegida a la coautoria del peu, les metadades i els tres README.
- Nova secció inicial «Abans de començar»: destinataris, objectius, usos docents i divulgatius, itinerari d’aprenentatge, funcionament i límits.
- Text breu a la primera pestanya amb enllaç directe a la nova secció, incloent canvi de pestanya, indicador de navegació i focus.
- Canvis en català, castellà i anglès.
- Han passat 19 grups numèrics i 21 grups d’interacció. La comprovació de pantalla continua sense automatització visual en navegador.

## Claredat docent i lectura sense dependre del color — 28 d’octubre de 2026

Es manté el simulador com a entrada. Afegides introduccions als capítols 2, 3 i 5. Retirat el recompte de capítols. Els experiments indiquen escenaris 1, 8 i 9. Compactats el gràfic ROC, les cel·les de la matriu i els quadres de cohort amb dimensions màximes adaptables.

Afegides trames diferenciades per VP, FP, FN i VN a les regions del gràfic i a les dues graelles, amb mostres a la llegenda i als recomptes. Línia contínua per a la població sense malaltia i discontínua per a la població amb malaltia. Les etiquetes i els resums textuals es conserven.

Verificació: 19 grups numèrics i 22 d’interacció. Comprovada la conservació exacta dels recomptes a les cel·les fraccionades amb patrons. No s’ha completat una comprovació visual ni amb persones amb daltonisme.

### Enllaç a la llicència

El peu del simulador enllaça a la pàgina oficial de CC BY-NC 4.0 en una pestanya nova, en lloc del fitxer local LICENSE.

## Destinataris sota el títol i proves successives — 28 d’octubre de 2026

El bloc «Per a estudiants…» se situa immediatament després del títol, sense la separació anterior. S’amplia el capítol 3 amb la distinció entre sensibilitat, especificitat, exactitud i VPP, i el capítol 5 amb un exemple de dos positius i els límits de la independència condicional. Textos en tres idiomes. Verificats els resultats 95/590 i 361/460, la posició del bloc introductori i les proves existents (19 grups numèrics i 22 d’interacció).

## Simplificació comunicativa de la capçalera — 28 d’octubre de 2026

Un únic títol («Entén el resultat d’un test.»), una frase explicativa i l’enllaç als destinataris i usos. Retirat el sobretítol «Laboratori de diagnòstic» i el paràgraf redundant de destinataris, desenvolupat al manual. La nota «Model docent · dades sintètiques» acompanya l’escenari actiu. Canvis en tres idiomes; comprovada l’estructura i superats els 22 grups d’interacció existents.

## Precision–recall i scores d’IA — 28 d’octubre de 2026

Afegides PR, AUPRC integrada i referència de prevalença al costat de ROC. Escenari 10 amb scores logit-normals entre 0 i 1 i patró binari. Controls, explicacions accessibles i manual en tres idiomes; es mantenen les trames i els estils de línia. Validació: 21 grups numèrics i 23 d’interacció; la comprovació visual en navegador real resta pendent.

## Guia dels escenaris — 28 d’octubre de 2026

Nova secció del manual, després de la introducció per a destinataris, amb deu fitxes desplegables: context, experiment proposat, límits i botó de càrrega. Accés directe des del simulador; prevalences inicials llegides de PRESETS. Disponible en tres idiomes. Conservada la correcció de Gerard Carot-Sans del fitxer de partida i sincronitzada als README. Superats 21 grups numèrics i 24 d’interacció, inclosa la càrrega de tots els escenaris en tres idiomes. No s’ha fet verificació visual en navegador real.

## Redistribució de la capçalera

Control del resum de la matriu traslladat a la columna introductòria, després de l’escenari actiu. Les instruccions i l’enllaç a la guia precedeixen els tres experiments, sota un únic encapçalament. Columnes alineades a la part superior i descripció ampliada en tres idiomes. Superats els 24 grups d’interacció en DOM simulat; pendent la verificació visual en navegador real.

## Format de les fórmules del manual

Revisats els tres idiomes: 8 blocs i 29 expressions per idioma, amb equacions separades, fraccions tipogràfiques, exponents i subíndexs coherents. Definicions de sensibilitat i especificitat separades del paràgraf i explicació de la probabilitat condicionada. PR i AUPRC deixen de presentar-se com a codi. Lectura textual accessible per a cada expressió i blocs desplaçables amb teclat en pantalles estretes, sense dependències externes. Superats els 21 grups numèrics i 24 d’interacció; pendent la inspecció visual en navegador real.

## Reorganització editorial dels README — 29 d’octubre de 2026

Els tres README descriuen el producte actual amb la mateixa estructura: inici, continguts, model, accessibilitat, autoria i llicència. S’eliminen repeticions, detalls de disposició i narratives d’implementació. ROC i PR s’integren amb la resta de mètriques; la IA queda contextualitzada entre els deu escenaris. Es corregeixen les referències antigues a vuit escenaris i sis capítols. La llicència tanca el document i enllaça a Creative Commons.

Els detalls de les incorporacions es conserven a les entrades anteriors d’aquest historial: integració AUPRC amb Simpson en 4.096 intervals sobre ±10 desviacions dels casos, reutilització del resultat quan només varia el llindar, exemple AUPRC 0,5483 → 0,9118 en canviar la prevalença de l’1% al 20%, i comprovacions numèriques i d’interacció. El manual de l’aplicació continua contenint les explicacions i fórmules detallades.

Criteri editorial: cada evolució s’ha d’integrar en el seu context i amb un pes proporcional al conjunt. El README presenta l’eina; CANVIS.md recull les novetats i les verificacions. No s’afegeixen apèndixs de novetats després de la llicència.
