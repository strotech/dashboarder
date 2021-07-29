import React from 'react';
import SidebarPanel from '../panels/SidebarPanel'
import DashboardSidebarContainer from '../containers/DashboardSidebarContainer'
import AboutSidebarContainer from '../containers/AboutSidebarContainer'

const SidebarContainer =()=> {     
    const routes = [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: "nc-icon nc-circle-09",
            component: DashboardSidebarContainer,
            layout: "/admin",
        },
        {
            path: "/about",
            name: "About",
            icon: "nc-icon nc-circle-09",
            component: AboutSidebarContainer,
            layout: "/admin",
        }
    ]
    return (
        <SidebarPanel routes={routes}/>
    );
  }
export default SidebarContainer;