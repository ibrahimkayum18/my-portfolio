import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import MyProjects from "../Pages/MyProjects/MyProjects";
import AboutMe from "../Pages/AboutMe/AboutMe";
import ContactMe from "../Pages/ContactMe/ContactMe";
import Services from "../Pages/Services/Services";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/my-projects',
                element:<MyProjects />
            },
            {
                path:'/about-me',
                element:<AboutMe />
            },
            {
                path:'/contact-me',
                element:<ContactMe />
            },
            {
                path:'/services',
                element:<Services />
            }
        ]
    }
])

export default Router;