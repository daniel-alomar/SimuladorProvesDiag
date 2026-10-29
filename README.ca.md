# Simulador de proves diagnòstiques

[Català](README.ca.md) · [Español](README.es.md) · [English](README.md)

Eina educativa interactiva per entendre com el punt de tall, les distribucions del test i la prevalença influeixen en els resultats i en la probabilitat de malaltia. Adreçada a estudiants de biomedicina, bioestadística i ciències de la salut, docents i qualsevol persona interessada a comprendre les proves diagnòstiques.

## Com començar

Obre `index.html` al navegador. No cal instal·lar programes, crear un compte ni iniciar un servidor. El simulador funciona sense connexió; els enllaços externs requereixen Internet.

Tria un escenari, anticipa què passarà i modifica una variable cada vegada. Compara les corbes, els recomptes i la probabilitat de malaltia abans i després del test.

## Què hi trobaràs

- **Simulador interactiu:** distribucions i llindar ajustables, sensibilitat i especificitat, matriu de confusió, valors predictius, raons de versemblança, ROC i precision–recall amb les àrees corresponents. El resum de la matriu es pot mantenir visible mentre ajustes el model.
- **Fonaments teòrics i guia clínica:** explicacions, fórmules, exemples, guia dels escenaris, glossari i referències. Desenvolupa la interpretació dels resultats i els límits del model.
- **Casos i autoavaluació:** vint reptes amb explicació de les respostes i càrrega d’exemples al simulador.

Els deu escenaris inclouen marcadors elevats o disminuïts, diferents graus de solapament i dispersió, estratègies orientades a sensibilitat o especificitat, cribratge de baixa prevalença, Bayes i scores d’IA. La guia integrada descriu el context i proposa un experiment per a cadascun.

Disponible en català, castellà i anglès. Es pot utilitzar a classe, en pràctiques, per a estudi autònom o en divulgació.

## Model i interpretació

Les dades són **sintètiques**. Els noms clínics contextualitzen els exemples; no representen proves validades ni protocols assistencials. L’eina no està destinada a interpretar resultats personals o prendre decisions clíniques.

El model compara un resultat continu amb un patró de referència binari. Utilitza distribucions normals; l’escenari d’IA les transforma en scores logit-normals entre 0 i 1, sense pressuposar calibratge. Amb distribucions fixes, variar només la prevalença conserva la ROC però modifica els valors predictius i la PR. L’AUPRC integra el model continu, no és average precision mostral.

La matriu mostra recomptes esperats arrodonits sobre 1.000 persones. Les probabilitats es calculen sense aquest arrodoniment. El màxim de Youden és una cerca aproximada d’un únic llindar; no incorpora costos clínics. Consulta el manual per a les fórmules, els supòsits i els exemples detallats.

## Accessibilitat i verificació

Controls etiquetats, navegació amb teclat, resums textuals dels gràfics i taula de recomptes. Línies, trames i etiquetes complementen els colors. Aquestes mesures no equivalen a una auditoria completa d’accessibilitat.

Executa `node tests/verify.mjs` per comprovar els càlculs. Les proves automàtiques no substitueixen la revisió visual o amb tecnologies de suport. L’historial d’evolució i verificacions es recull a [CANVIS.md](CANVIS.md).

## Autoria i col·laboracions

- **Autor:** [Daniel Alomar-Claramonte](https://github.com/daniel-alomar).
- **Coautors:** Jordi Piera-Jimenez, Ferran Torres, Laia Humbert-Vidan, Caridad Pontes, Gerard Carot-Sans.
- **Assistència en el desenvolupament:** Google Gemini i Codex.

## Suggeriments i incidències

Pots comunicar-los a [GitHub Issues](https://github.com/daniel-alomar/SimuladorProvesDiag/issues).

## Llicència

[Creative Commons Reconeixement–NoComercial 4.0 Internacional (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/). Permet compartir i adaptar el material amb atribució i per a usos no comercials, d’acord amb els termes de la llicència.
