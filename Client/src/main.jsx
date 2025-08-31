import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import NotFound from "./Components/Pages/NotFound.jsx";
import Shop from "./Components/Pages/Shop.jsx";
import Membership from "./Components/Pages/Membership.jsx";
import AddItem from "./Components/Pages/AddItem.jsx";
import Home from "./Components/Pages/Home.jsx";
import Register from "./Components/Auth/Register.jsx";
import AuthProvider from "./Components/Context/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/shop",
        element: <Shop />,
        loader: () => fetch("http://localhost:3000/all-items"),
      },
      {
        path: "/membership",
        element: <Membership />,
      },
      {
        path: "/add-item",
        element: <AddItem />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
