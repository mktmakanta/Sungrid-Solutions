import React from "react";
import MainPage from "./MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Resume from "./resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "*",
    element: <div> page not found</div>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
