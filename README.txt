TANKREGISTER V12 — UPLOADHANDLEIDING

VOOR JE BEGINT
1. Open je huidige app op het toestel en in de browser waar je tankgegevens staan.
2. Kies Meer > Back-up bewaren. Bewaar het JSON-bestand buiten GitHub.
3. Upload nooit je persoonlijke JSON-back-up of tankfoto's naar de repository.

UPLOAD NAAR JE BESTAANDE GITHUB PAGES
1. Pak Tankregister-V12.zip uit.
2. Open dezelfde GitHub-repository als je huidige tankregister.
3. Kies Add file > Upload files.
4. Upload de INHOUD van deze map naar dezelfde publicatiemap als voorheen.
   index.html, core.js, stats.js, ocr.js, v12.css, sw.js,
   manifest.webmanifest, icon-192.png, icon-512.png en .nojekyll.
   README.txt en TESTRAPPORT.txt mogen mee; ze zijn geen persoonlijke data.
   Plaats index.html direct in de publicatiemap, niet in een extra V12-map.
5. Kies Commit changes.
6. Controleer Settings > Pages: gebruik je bestaande publicatie-instelling.
   Voor een nieuwe eenvoudige site: Deploy from a branch > main > /(root).
7. Open de bestaande site via Settings > Pages > Visit site.
   Publicatie kan circa 10 minuten duren.
8. Sluit alle tabbladen en de geïnstalleerde app volledig en open opnieuw.
   De service worker gebruikt bewust een wachtende update om versies niet midden
   in een invoersessie te wisselen. Controleer dat bovenaan V12 staat.
   Wis geen browsergegevens om een update te forceren.

BEHOUD VAN GEGEVENS
De lokale sleutel blijft exact mercedes_tankregister_v1.
JSON-formaat blijft tankregister-v1. Bestaande JSON-back-ups en Excel-export
blijven ondersteund. Foto's worden zoals in V11 lokaal verkleind opgeslagen.
Gebruik dezelfde browser, hetzelfde profiel en hetzelfde https-adres/domein.
Een ander domein, andere browser of ander toestel deelt die lokale opslag niet.
Gebruik dan Back-up terugzetten om je eerder gedownloade JSON te importeren.
Terugzetten vervangt het register na bevestiging.
Lokale opslag is geen automatische cloudback-up. Bewaar geregeld een JSON-kopie.
Bij volle opslag wordt de wijziging geweigerd; het bestaande register blijft staan.

STATISTIEKEN
Kies Maand, Jaar of Alles. De grafiek kan kosten, liters, kilometers of verbruik tonen.
Maand toont geregistreerde dagen; jaar toont twaalf maanden; alles toont jaren.
Vergelijkingen gebruiken de vorige kalendermaand of het vorige kalenderjaar.
Lopende periodes kunnen onvolledig zijn; geen automatische prognose of normalisatie.
Kosten en liters zijn alle geregistreerde tankbeurten in de gekozen periode.
Afstand wordt toegerekend aan de datum van de afsluitende tankbeurt, ook wanneer
het interval een maand- of jaargrens overschrijdt.
Alleen direct opeenvolgende tankbeurten met stijgende kilometerstanden tellen mee
voor afstand, verbruik en kosten per 100 km. Ontbrekende standen onderbreken de reeks.
De eerste tankbeurt is een beginpunt en telt niet als verbruik.
Verbruik is slechts een schatting bij telkens voltanken: er is geen registratie
van volle/deeltank in de oude gegevens. Gemiddelde literprijs is gewogen op liters.

FOTOHERKENNING
1. Neem of kies een scherpe foto. JPG/PNG werkt doorgaans het best.
2. Onder de foto kies je Bedrag. Sleep een kader rond alleen het volledige getal.
3. Doe hetzelfde voor Liters en Literprijs. Neem de komma mee en laat labels weg.
4. Draai indien nodig eerst de foto; draaien wist de selecties.
5. Klik Gegevens uit foto lezen. Het programma verwerkt vier beeldvarianten
   per geselecteerd veld en zoekt herhaalde, rekenkundig passende uitkomsten.
6. Vergelijk het voorstel met de foto en kies Voorstel overnemen of Verwerpen.
   Aanwezige invoer vervangen vraagt bevestiging. Bewaar de tankbeurt zelf.
7. Bij twijfel: handmatig invullen. Er wordt niets automatisch bewaard.
De herkenning gebruikt de originele geselecteerde foto, niet de verkleinde opslagfoto.
Een bestaande opgeslagen foto kan opnieuw worden geselecteerd via de herkenningsknop,
maar die heeft alleen de al opgeslagen, verkleinde resolutie.
Reflecties, schuine foto's, ontbrekende segmenten, LED-flikkering, onzichtbare komma's
of ongebruikelijke lettertypes blijven lastig. De zevensegmentweergave is niet
met een speciaal getraind model gegarandeerd. Rekenkundige juistheid bewijst geen
juiste uitlezing. Een passend verkeerd drietal blijft mogelijk.
Er is bewust geen vaste pompindeling en geen automatische locatie van displays.
Je moet de drie gebieden zelf aanwijzen. Camera en slepen zijn niet op een echte
telefoon gevalideerd. Handmatige invoer blijft beschikbaar.

INTERNET EN OFFLINE
De appbestanden worden na een geslaagde service-workerinstallatie lokaal gecachet.
Eerste bezoek moet online. OCR downloadt Tesseract.js 5.1.1 plus engine/taaldata
van externe leveranciers; beschikbaarheid en offline OCR worden niet gegarandeerd.
De foto wordt door deze app lokaal in de browser verwerkt; de app stuurt geen
foto naar een herkennings-API. De externe softwareleveranciers ontvangen wel
normale downloadverzoeken. De ZIP bevat geen ingebedde OCR-engine/taaldata.
GitHub Pages vereist geen server, API-sleutel, npm of buildstap voor deze app.

BRONNEN VOOR UPLOAD EN OCR-API
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
https://github.com/naptha/tesseract.js/blob/v5.1.1/docs/api.md
