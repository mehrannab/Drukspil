import "./pagesStyles/information.css";
import mehran from '../images/mehran.jpg';

const Information = () => {
    return(
        <div>
            <div className="titlePath">
                <h1>Om os </h1>
            </div>

            <div className="text">
                <p>
                <br/> Drukspil blev lanceret i 2022 med fokus på at gøre druk til en sjov leg via sine egne præferencer
                til hvad legen skal gå ud på.
                <br/> Selve ideen opstod under covid-19-pandemien hvor folk var tvunget til at være indenfor
                og samtidig måtte man ikke være en større flok samlet ét sted. 
                <br/> Her kunne det ses på sociale medier rundt omkring i 
                verdenen, at hjemmelavede drukspil var en stor succes under covid-19-pandemien, hvor dette nærmest blev til en trend.
                <br/>
                <br/> Vores arbejde handler derfor om, at lave de bedst mulige drukspil ud fra folks ønsker. Når vi modtager 
                jeres ønsker, går vi gang med drukspillet og herefter sender vi det til jer, hvor I får en lamineret version, så
                at der ikke sker noget med drukspillet, hvis der skulle spilde alkohol på det. 
                </p>
            </div>

            <div className="infoText">
                <p>
                <br/> Kontakt ejer Mehran Nabipour på
                <ul>
                    <li>Telefon nr: +45 31 53 97 59</li>
                    <li>E-mail: mehran-nabipour@hotmail.com</li>
                </ul>
                </p>
                <div>
                    <img src={mehran} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Information