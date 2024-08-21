import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import AboutRoute from "./AboutRoute";
import ProjectsRoute from "./ProjectsRoute";
import ServiceRoute from "./ServiceRoute";
import ErrorRoute from "./ErrorRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/AboutRoute",
    element: <AboutRoute />,
  },
  {
    path: "/ProjectsRoute",
    element: <ProjectsRoute />,
  },
  {
    path: "/ServiceRoute",
    element: <ServiceRoute />,
  },
  {
    path: "*",
    element: <ErrorRoute />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
