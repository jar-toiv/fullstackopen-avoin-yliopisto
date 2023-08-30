## Web-kehityksen perusteet

### HTTP GET

HTTP GET on yksi HTTP-protokollan metodeista, jota käytetään tietojen pyytämiseen palvelimelta. Se on idempotentti metodi, mikä tarkoittaa, että useat identtiset pyynnöt tuottavat saman tuloksen.

### Perinteinen web-sovellus

Perinteisessä web-sovelluksessa jokainen käyttäjän toiminto, kuten linkin napsauttaminen tai lomakkeen lähettäminen, aiheuttaa koko sivun uudelleenlatauksen. Tämä voi tehdä käyttökokemuksesta vähemmän sulavan.

### Selaimessa suoritettava sovelluslogiikka

Modernit web-sovellukset hyödyntävät usein selaimessa suoritettavaa sovelluslogiikkaa, tyypillisesti JavaScriptin avulla. Tämä mahdollistaa dynaamisen käyttökokemuksen ilman sivun uudelleenlatausta.

### Tapahtumankäsittelijä ja takaisinkutsu

Tapahtumankäsittelijät ovat funktioita, jotka aktivoituvat tiettyjen tapahtumien, kuten hiiren klikkauksen, yhteydessä. Takaisinkutsu (callback) on funktio, joka annetaan toiselle funktiolle parametrina ja suoritetaan myöhemmin.

### Document Object Model eli DOM

DOM on ohjelmointirajapinta, joka esittää web-sivut puurakenteena. JavaScriptilla voidaan muuttaa DOM:ia, mikä päivittää sivun näkymää suoraan selaimessa.

### Document-olio ja sivun manipulointi konsolista

Document-olio on globaali olio, joka antaa pääsyn sivun sisältöön ja sen manipulointiin. Käyttämällä selaimen kehittäjätyökaluja voit manipuloida DOM:ia suoraan konsolista.

### CSS

CSS (Cascading Style Sheets) on kieli, jolla määritellään web-sivun ulkoasu ja suunnittelu. CSS:n avulla voidaan määrittää mm. värit, fontit ja layout.

### JavaScriptia sisältävän sivun lataaminen - kertaus

JavaScript-koodi suoritetaan yleensä, kun sivu on ladattu. Tämä voidaan toteuttaa useilla tavoilla, kuten asettamalla skriptit sivun loppuun tai käyttämällä tapahtumakäsittelijöitä kuten `DOMContentLoaded`.

### Lomake ja HTTP POST

HTTP POST -metodia käytetään usein lomakkeiden lähettämiseen. Toisin kuin GET, POST voi lähettää paljon tietoa ja sen tiedot lähetetään HTTP-pyynnön rungossa, ei URL-osoitteessa.

### AJAX

AJAX (Asynchronous JavaScript and XML) on tekniikka, joka mahdollistaa web-sivun päivittämisen osittain ilman sivun uudelleenlatausta. AJAX tekee asynkronisen HTTP-pyynnön palvelimelle ja päivittää DOM:ia vastauksen perusteella.

### Single Page App

Single Page App (SPA) on web-sovellus, joka lataa yhden HTML-sivun ja päivittää sen dynaamisesti käyttäjän toimien perusteella. Tämä tekee käyttökokemuksesta sulavamman.

### JavaScript-kirjastot

JavaScript-kirjastot, kuten jQuery, React ja Angular, tarjoavat valmiita toimintoja ja komponentteja, jotka helpottavat ja nopeuttavat web-sovelluskehitystä.

### Full stack ‑websovelluskehitys

Full stack -kehityksessä keskitytään sekä front-end- että back-end-kehitykseen. Front-end vastaa käyttöliittymästä ja käyttökokemuksesta, kun taas back-end huolehtii tietokannoista ja palvelinlogiikasta.
