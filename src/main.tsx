import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./styles/global.scss";
import Layout from "./components/layout/layout.tsx";
import routes from "./routes/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={routes} />
    </Layout>
  </React.StrictMode>
);
