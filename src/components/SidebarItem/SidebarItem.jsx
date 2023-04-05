import { SidebarItemStyled } from "./SidebarItem.styled";
import {ReactComponent as ArrowIcon} from 'img/Sidebar/arrow-right.svg';
const SidebarItem = ({ link = "#", name, active = false, children }) => {
    return (
        <SidebarItemStyled href={link} className={active && 'active'}>
            <div>
                {children} 
                <span>{name}</span> 
            </div>
            <ArrowIcon className="sidebar-arrow" />
        </SidebarItemStyled>
    )
}

export default SidebarItem;
