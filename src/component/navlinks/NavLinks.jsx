
import  React, { Children} from "react"
import { NavLink } from "react-router-dom"


const NavLinks = ({to, children, icon}) => {

    return(
        <NavLink className= "navlink active" to={to}>

            <div className="active">
                <span>{icon}</span>
                <span>{children}</span> 
            </div>

        </NavLink>
    )
}

export default NavLinks