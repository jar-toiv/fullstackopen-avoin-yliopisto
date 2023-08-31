# Tehtävät 1.1-1.2

1.1: kurssitiedot, step1
Tässä tehtävässä aloitettavaa ohjelmaa kehitellään eteenpäin muutamassa seuraavassa tehtävässä. Tässä ja kurssin aikana muissakin vastaan tulevissa tehtäväsarjoissa ohjelman lopullisen version palauttaminen riittää. Voit toki halutessasi tehdä commitin jokaisen tehtävän jälkeisestä tilanteesta, mutta se ei ole välttämätöntä.

Luo Vitellä uusi sovellus. Muuta main.jsc muotoon

import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)copy
ja tiedosto App.jsx muotoon

const App = () => {
const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

return (
<div>
<h1>{course}</h1>
<p>
{part1} {exercises1}
</p>
<p>
{part2} {exercises2}
</p>
<p>
{part3} {exercises3}
</p>
<p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
</div>
)
}

export default Appcopy
ja poista ylimääräiset tiedostot App.css ja index.css ja hakemisto assets.

Koko sovellus on nyt ikävästi yhdessä komponentissa. Refaktoroi sovelluksen koodi siten, että se koostuu kolmesta uudesta komponentista: Header, Content ja Total. Kaikki data pidetään edelleen komponentissa App, joka välittää tarpeelliset tiedot kullekin komponentille props:ien avulla. Header huolehtii kurssin nimen renderöimisestä, Content osista ja niiden tehtävämääristä ja Total tehtävien yhteismäärästä.

Tee uudet komponentit tiedostoon App.jsx.

Komponentin App runko tulee olemaan suunnilleen seuraavanlainen:

const App = () => {
// const-määrittelyt

return (
<div>
<Header course={course} />
<Content ... />
<Total ... />
</div>
)
}copy
VAROITUS älä yritä tehdä ohjelmassasi kaikkia komponentteja yhtä aikaa, sillä se johtaa lähes varmasti siihen että ohjelma ei toimi. Etene pieni askel kerrallaan, tee aluksi esim. komponentti Header ja vasta kun se toimii 100% varmasti, kannattaa edetä seuraavaan komponenttiin.

Huolellinen, pienin askelin eteneminen saattaa tuntua hitaalta, mutta se on itse asiassa ylivoimaisesti nopein tapa edetä. Kuuluisa ohjelmistokehittäjä Robert "Uncle Bob" Martin on todennut

"The only way to go fast, is to go well"

eli Martinin mukaan pienin askelin tapahtuva huolellinen eteneminen on jopa ainoa tapa olla nopea.

1.2: kurssitiedot, step2
Refaktoroi vielä komponentti Content siten, että se ei itse renderöi yhdenkään osan nimeä eikä sen tehtävälukumäärää vaan ainoastaan kolme Part-nimistä komponenttia, joista kukin siis renderöi yhden osan nimen ja tehtävämäärän.

const Content = ... {
return (
<div>
<Part .../>
<Part .../>
<Part .../>
</div>
)
}copy
Sovelluksemme tiedonvälitys on tällä hetkellä todella arkaaista, sillä se perustuu yksittäisiin muuttujiin. Tilanne paranee pian.
