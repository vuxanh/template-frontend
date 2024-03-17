import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: HomePage(),
  },
]);

export default routes;
