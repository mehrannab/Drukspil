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
    height: 5rem;
    font-size: 1.8rem;
    margin-left: 1rem;
    padding-bottom: rem;
    text-decoration: none;
    &:hover {
        background-color: #585856;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 1rem;
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