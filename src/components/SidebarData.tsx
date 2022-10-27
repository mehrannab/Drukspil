import { SidebarItem } from "../models/SidebarItem";
import { AiFillCaretRight, AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";

export const SidebarData: SidebarItem[] = [
    {
        title: 'Home',
        path: '/',
        icon: <AiOutlineHome color="white"/>
    },
    {
        title: 'Predesign',
        path: 'predesign',
        icon: <AiFillCaretRight color="white"/>
    },
    {
        title: 'Customdesign',
        path: 'customdesign',
        icon: <AiFillCaretRight color="white"/>
    },
    {
        title: 'About us',
        path: 'information',
        icon: <AiOutlineInfoCircle color="white"/>
    }
]