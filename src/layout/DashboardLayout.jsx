import { Outlet } from "react-router-dom"
import SideBar from "../component/sidebar/SideBar"
import "./DashboardLayout.css"
import TopBar from "../component/topbar/TopBar"




const DashboardLayout = () => {

    return(

        

        <div id="layout">
            <div className="top-bar">

                <TopBar />

            </div>
           
            <SideBar />

            <Outlet />

            
        </div>
    )
}

export default DashboardLayout