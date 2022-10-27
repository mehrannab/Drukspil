import { Link } from "react-router-dom"
import styled from "styled-components"
import { IconContext } from "react-icons";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; 
import { useState } from "react";
import { SidebarData } from "./SidebarData";
import Submenu from "./Submenu";


const Nav = styled.div`
    height: 6rem;
    background-color: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

const SidebarNav = styled.div<{ sidebar: boolean }>`
    background-color: black;
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    margin-top: 8px;
    transition: 350ms;

`;

const NavIcon = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 6rem;
    font-size: 2rem;
    margin-left: 2rem;
`;

const SidebarWrap = styled.div`
`;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
            <Nav>
                <NavIcon to="#" onClick={showSidebar}>
                    <AiOutlineMenu color="white"/>
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to="#" onClick={showSidebar}>
                        <AiOutlineClose color="white"/>
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