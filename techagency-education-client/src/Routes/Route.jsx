import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Pages/Home/Home/Home";
import Courses from "../Components/Pages/Courses/Courses";
import Gallery from "../Components/Pages/Gallery/Gallery";
import Notice from "../Components/Pages/Notice/Notice";
import Contact from "../Components/Pages/Contact/Contact";
import About from "../Components/Pages/About/About";
import Privacy from "../Components/Pages/Privacy/Privacy";
import Terms from "../Components/Pages/Terms/Terms";
import Error from "../Components/Pages/Error/Error";
import Login from "../Components/Pages/Login/Login";
import Registration from "../Components/Pages/Registration/Registration";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },{
          path: '/courses',
          element: <Courses/>
        },{
          path: '/gallery',
          element: <Gallery/>
        },{
          path: '/notice',
          element: <Notice/>
        },{
          path: '/contact',
          element: <Contact/>
        },{
          path: '/about',
          element: <About/>
        },{
          path: '/privacy',
          element: <Privacy/>
        },{
          path: '/terms',
          element: <Terms/>
        },{
          path: '/login',
          element: <Login/>
        },{
          path: '/registration',
          element: <Registration/>
        }
      ]
    },
    {
      path: '*',
      element: <Error/>
    }
  ]);