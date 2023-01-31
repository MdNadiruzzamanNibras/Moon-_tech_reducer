import { createBrowserRouter } from "react-router-dom";
import About from "../Component/About";
import Home from "../Component/Home";
import Main from "../Component/Main";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      }
    ],
  },
]);