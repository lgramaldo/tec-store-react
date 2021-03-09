


function NavItem(props){


return(
  <>
                 
     <li className={props.estado}>
         <a className="nav-link" href={props.link}>
            <i className={props.icon}></i>
            <span>{props.name}</span></a>
      </li>
  </>


     )


} export default NavItem;



