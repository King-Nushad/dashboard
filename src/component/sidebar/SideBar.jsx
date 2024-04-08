import NavLinks from '../navlinks/NavLinks'
import  './SideBar.css'
import{FaHome, } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io";
import { FaUsers } from "react-icons/fa"

    const links = [
        {to: "/", icon: <FaHome />, label: "Home", id: 1},
        {to: "/users", icon: <FaUsers />, label: "Users", id: 2},
        {to: "/settings", icon: < IoMdSettings />, label: "Settings", id:3},

    ];

const SideBar = () => {
    return(

        <>
            <div id="side-wrapper">

                <div id='links'>
                    {
                        links.map(({to, icon, label,id}) => (

                        <NavLinks key={id} to={to}> {icon} {label} </NavLinks>
                         ))
                    }
                    
                </div>
            </div>

        
        </>
    )
}

export default SideBar