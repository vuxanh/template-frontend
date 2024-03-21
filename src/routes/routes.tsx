import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default routes;
