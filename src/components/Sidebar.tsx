import { Link } from "react-router-dom"
import styled from "styled-components"
import { IconContext } from "react-icons";
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai'; 
import { useState } from "react";
import { SidebarData } from "../data/SidebarData";
import Submenu from "./Submenu";
import "../App.css";
import Button from "@mui/material/Button";


const Nav = styled.div`
    height: 3rem;
    background-color: #330000;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

const SidebarNav = styled.div<{ sidebar: boolean }>`
    background-color: #59260B;
    height: 100vh;
    position: fixed;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    width: 20%;
    padding-top: 1%;
    z-index: 1;
    top: 0;
`;

const NavIcon = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 18px;
    margin-left: 10px;
`;

const SidebarWrap = styled.div`
`;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <IconContext.Provider value={{ color: "blue"}}>
            <div style={{display: "flex"}}>
            <Nav>
                <div>
                    <NavIcon to="#" onClick={showSidebar}>
                        <AiOutlineMenu color="white"/>
                    </NavIcon>
                </div>
                <div style={{}}>
                    <Button
                        className="button" style={{}}>
                            <AiOutlineShoppingCart
                            style={{fontSize: "26px", color: "white"}}
                            />
                            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{color: "white", 
                            width: "1.75rem", fontSize: "22px", height: "1.75rem", position: "absolute", bottom: 0, right: 0, transform: "translate(40%, 40%"}}>
                                0
                            </div>
                    </Button>
                </div>
            </Nav>
            </div>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to="#" onClick={showSidebar}>
                        <AiOutlineClose style={{fontSize: "18px", color: "white", marginBottom: "10%"}}/>
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <Submenu item={item} key={index}/>
                    })}
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    )
}

export default Sidebar;