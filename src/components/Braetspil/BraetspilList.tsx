import items from "../../data/items.json";
import "../../pages/pagesStyles/predesign.css";
import { Button } from "@mui/material";
import { Col, Row } from "react-bootstrap";

const BraetspilList = () => {

    return(
        <div>
            {items.map(item => (
            <div className="braetspilContent">
                <div>
                    <img src={item.image} height="750px" width="750px"/>
                </div>
                <div>
                <div className="braetspilDesign">
                    {item.name} til en pris på {item.pris}
                </div>
                <div>
                    <Button variant="contained">Tilføj til kurv</Button>
                </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default BraetspilList;