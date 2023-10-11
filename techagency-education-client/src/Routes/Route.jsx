import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Pages/Home/Home/Home";
import Courses from "../Components/Pages/Courses/Courses";
import Gallery from "../Components/Pages/Gallery/Gallery";
import Notice from "../Components/Pages/Notice/Notice";
import Contact from "../Components/Pages/Contact/Contact";
import About from "../Components/Pages/About/About/About";
import Privacy from "../Components/Pages/Privacy/Privacy";
import Terms from "../Components/Pages/Terms/Terms";
import Error from "../Components/Pages/Error/Error";
import Login from "../Components/Pages/Login/Login";
import Registration from "../Components/Pages/Registration/Registration";
import PreviewCourses from "../Components/Pages/PreviewCourses/PreviewCourses";
import Dashboard from "../Components/Pages/Dashboard/Dashboard/Dashboard";
import Profile from "../Components/Pages/Dashboard/Profile/Profile";
import SelectedCourse from "../Components/Pages/Dashboard/SelectedCourse/SelectedCourse";
import Result from "../Components/Pages/Dashboard/Result/Result";

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
          element: <Courses/>,
          loader: ()=> fetch("http://localhost:5000/courses")
        },{
          path: '/preview-course/:id',
          element: <PreviewCourses/>,
          loader: ({params})=> fetch(`http://localhost:5000/course/preview/${params.id}`)
        },{
          path: '/gallery',
          element: <Gallery/>,
          loader: ()=> fetch('/JSON/gallery.json')
        },{
          path: '/notice',
          element: <Notice/>,
          loader: ()=> fetch('/JSON/notice.json')
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
      path: '/dashboard',
      element: <Dashboard/>,
      children: [
        {
          path: "/dashboard",
          element: <Profile/>
        },{
          path: "/dashboard/selected-course",
          element: <SelectedCourse/>
        },{
          path: "/dashboard/result",
          element: <Result/>
        }
      ]
      
    },
    {
      path: '*',
      element: <Error/>
    }
  ]);