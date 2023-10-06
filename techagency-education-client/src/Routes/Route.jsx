import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        }
      ]
    },
  ]);