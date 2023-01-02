import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarItem } from "../models/SidebarItem";

type SidebarLinkProps = {
    item: SidebarItem;
};

const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    text-decoration: none;
    margin-bottom: 10%;
    margin-left: 5%;
    &:hover {
        background-color: #585856;
        font-weight: bold;
        font-size: 18px;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 0.5rem;
    color: white;
`;

const Submenu: FC<SidebarLinkProps> = ({ item }) => {
    return (
        <>
            <SidebarLink to={item.path}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
            </SidebarLink>
        </>
    );
};

export default Submenu;