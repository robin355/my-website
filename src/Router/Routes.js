import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Careers from "../Pages/Careers/Careers";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import OurTeam from "../Pages/OurTeam/OurTeam";
import Projects from "../Pages/Projects/Projects";
import Api from "../Pages/Services/Api/Api";
import Ecommerce from "../Pages/Services/Ecommerce/Ecommerce";
import MobileDev from "../Pages/Services/MobileDev/MobileDev";
import SoftwareDev from "../Pages/Services/SoftwareDev/SoftwareDev";
import UiUx from "../Pages/Services/UiUX/UiUx";
import WebsiteDev from "../Pages/Services/WebsiteDev/WebsiteDev";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/service/web',
                element: <WebsiteDev></WebsiteDev>

            },
            {
                path: '/service/mobile',
                element: <MobileDev></MobileDev>
            },
            {
                path: '/service/commerce',
                element: <Ecommerce></Ecommerce>
            },
            {
                path: '/service/ui',
                element: <UiUx></UiUx>
            },
            {
                path: '/service/api',
                element: <Api></Api>
            },
            {
                path: '/service/software',
                element: <SoftwareDev></SoftwareDev>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/ourteam',
                element: <OurTeam></OurTeam>
            },
            {
                path: '/career',
                element: <Careers></Careers>
            },
            {
                path: '/project',
                element: <Projects></Projects>
            }
        ]
    }
])