import { Children } from "react";

import SidebarBrand from '../sideBarBrand'
import NavItem from '../navItem'
import Divider from '../divider'
import SideBarActions from '../sideBarActions'

function SideBar(){














return(
 <>
  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
   

   
    <SidebarBrand/>
    <Divider/>
    <NavItem 
        estado="nav-item active" 
        link="#"
        icon="fas fa-fw fa-tachometer-alt"
        name="Dashboard"/>
    <SideBarActions/>
    <Divider/>
    <NavItem 
        estado="nav-item" 
        link="#"
        icon="fas fa-fw fa-folder"
        name="Pages"/>
  <NavItem 
        estado="nav-item" 
        link="#"
        icon="fas fa-fw fa-chart-area"
        name="Charts"/>
   <NavItem 
        estado="nav-item" 
        link="#"
        icon="fas fa-fw fa-table"
        name="Tables"/>
    <Divider/>
    
</ul>  
</>    
)

}
export default SideBar;