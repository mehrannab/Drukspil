import { useNavigate } from "react-router-dom";
import "./pagesStyles/home.css";
import template from '../images/template.png';
import question from '../images/question.png';
import info from '../images/info.png';

const Home = () => {
    const navigate = useNavigate();

    const navigateToCustom = () => {
        navigate('/customdesign');
    };

    const navigatoToPre = () => {
        navigate('/predesign')
    }


    return(
        <div>
        <div className="h1text">
            <h1>Design dit helt egen drukspil lige her!</h1>
        </div>

        <div className="imagesAndText">
        <div className="img">
            <img style={{width: 450, height: 450}} src={template} alt=""/>
            <p className="imgText">1. Du vælger hvordan dit drukspil skal designes.<br/>Det kan enten designes af dig selv eller med vores hjælp. </p>
        </div>
        <div className="img">
            <img style={{width: 450, height: 450}} src={question} alt=""/>
            <p className="imgText">2. Du designer dit drukspil ved at tilføje spørgsmål eller regler til felterne. </p>
        </div>
        <div className="img">
            <img style={{width: 450, height: 450}} src={info} alt=""/>
            <p className="imgText">3. For at dit drukspil bliver sendt ind til os, skal du indtaste dine personlige oplysninger og betale.<br/> Du vil modtage en bekræftelsesmail
            og modtage dit drukspil efter et par dage. </p>
        </div>
        </div>
        
        <div className="h1text">
            <h3><br/> Du har følgende to muligheder</h3>
        </div>
        <div className="buttonsPresentation">
            <button className="buttonToCustomAndPre" onClick={navigateToCustom}>Design dit drukspil</button>
            <div className="spaceBetweenButtons"/>
            <button className="buttonToCustomAndPre" onClick={navigatoToPre}>Design dit drukspil med os</button>
        </div>

        </div>
    )
}

export default Home;