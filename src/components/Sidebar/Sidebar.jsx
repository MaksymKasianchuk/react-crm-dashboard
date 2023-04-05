import userIcon from 'img/user.png';
import SidebarItem from 'components/SidebarItem';
import {ReactComponent as ReactLogoFull} from 'img/Logo.svg';
import {ReactComponent as DashboardIcon} from 'img/Sidebar/dashboard.svg';
import {ReactComponent as ProductIcon} from 'img/Sidebar/product.svg';
import {ReactComponent as CustomersIcon} from 'img/Sidebar/customers.svg';
import {ReactComponent as IncomeIcon} from 'img/Sidebar/income.svg';
import {ReactComponent as PromoteIcon} from 'img/Sidebar/promote.svg';
import {ReactComponent as HelpIcon} from 'img/Sidebar/help.svg';

import { SidebarStyled, SidebarLogo, SidebarBottom, Navigation } from './Sidebar.styled';

const Sidebar = () => {
    return (
        <SidebarStyled>
            <div>
                <SidebarLogo>
                    <ReactLogoFull />
                    <span>v.01</span>
                </SidebarLogo>
                <Navigation>
                    <SidebarItem name="Dashboard">
                        <DashboardIcon />
                    </SidebarItem>
                    <SidebarItem name="Product">
                        <ProductIcon />
                    </SidebarItem>
                    <SidebarItem name="Customers" active>
                        <CustomersIcon />
                    </SidebarItem>
                    <SidebarItem name="Income">
                        <IncomeIcon />
                    </SidebarItem>
                    <SidebarItem name="Promote">
                        <PromoteIcon />
                    </SidebarItem>
                    <SidebarItem name="Help">
                        <HelpIcon />
                    </SidebarItem>
                </Navigation>
            </div>

            <SidebarBottom>
                <img width="42" height="42" src={userIcon} alt="user icon" />
                <div>
                    <p className="user-name">Evano</p>
                    <p className="user-role">Project Manager</p>
                </div>
            </SidebarBottom>
        </SidebarStyled>
    )
}

export default Sidebar;
