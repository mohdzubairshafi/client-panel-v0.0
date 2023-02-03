import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import NotFound from "./pages/NotFound";
import Clients from "./pages/Clients";
import About from "./pages/About";
import App from "./App";
const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        index: true,
        element: <DashBoard />,
        errorElement: <NotFound />,
      },
      {
        path: "/Dashboard",
        element: <DashBoard />,
        errorElement: <NotFound />,
      },
      {
        path: "/Clients",
        element: <Clients />,
      },
      {
        path: "/About",
        element: <About />,
        errorElement: <NotFound />,
      },
      {
        path: "/Contact",
        element: <About />,
        errorElement: <NotFound />,
      },
      {
        path: "/NotFound",
        element: <NotFound />,
        errorElement: <NotFound />,
      },
      {
        path: "/*",
        element: <NotFound />,
        errorElement: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);

