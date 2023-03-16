import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Careers from "../Pages/Careers/Careers";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import OurTeam from "../Pages/OurTeam/OurTeam";
import Projects from "../Pages/Projects/Projects";

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