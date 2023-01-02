import { SidebarItem } from "../models/SidebarItem";
import { AiFillCaretRight, AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";

export const SidebarData: SidebarItem[] = [
    {
        title: 'Hjem',
        path: '/',
        icon: <AiOutlineHome color="white"/>
    },
    {
        title: 'Vores udvalg',
        path: 'predesign',
        icon: <AiFillCaretRight color="white"/>
    },
    {
        title: 'Design dit eget',
        path: 'customdesign',
        icon: <AiFillCaretRight color="white"/>
    },
    {
        title: 'Om os',
        path: 'information',
        icon: <AiOutlineInfoCircle color="white"/>
    }
]