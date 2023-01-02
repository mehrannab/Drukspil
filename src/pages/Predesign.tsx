import "./pagesStyles/predesign.css";
import BraetspilList from "../components/Braetspil/BraetspilList";

const Predesign = () => {
    return(
        <div>
            <div>
                <p className="regularText"> <br></br> Her kan du vælge de færdiglavet brætspil, som du finder mest interessant.<br></br>De forskellige brætspil
                bliver opdateret løbende, hvor der vil være en konstant udskiftning af dem alt efter hvilken sæson på året vi er i.  </p>
            </div>
            <div>
                <BraetspilList/>
            </div>
        </div>
    )
}

export default Predesign