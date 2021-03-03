import { Children } from "react";

import SidebarBrand from '../sideBarBrand'
import NavItem from '../navItem'

function SideBar(){


return(
 <>
  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
   
    <SidebarBrand/>
    <NavItem/>
    <NavItem/>
    <NavItem/>
    
</ul>  
</>    
)

}
export default SideBar;