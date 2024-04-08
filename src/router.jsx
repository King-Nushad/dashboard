
import Home from './pages/Home'
import Settings from './pages/Settings'
import Users from './pages/Users'
import {createBrowserRouter} from 'react-router-dom'
import DashboardLayout from './layout/DashboardLayout'


const router = createBrowserRouter ([
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },

            {
                path: "/settings",
                element: <Settings />
            },

            {
                path: "/users",
                element: <Users />
            }
        ]
    },

    // {
    //     path: "/topbar",
    //     element: <DashboardLayout />,
    //     children:[

    //         {
    //             element: <TopBar />
    //         } 
    //     ] 
    // }
])

export default router