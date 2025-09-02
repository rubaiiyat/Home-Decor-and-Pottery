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
import Login from "./Components/Auth/Login.jsx";
import Profile from "./Components/Pages/Profile.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";
import PublicRoute from "./Components/PrivateRoute/PublicRoute.jsx";
import UpdateProduct from "./Components/Pages/UpdateProduct.jsx";
import ProductDetials from "./Components/Pages/ProductDetials.jsx";

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
        loader: () =>
          fetch("https://home-decor-pottery-server.onrender.com/all-items"),
      },
      {
        path: "/shop/category/:category?",
        element: <Shop />,
        loader: async () => {
          const res = await fetch(
            "https://home-decor-pottery-server.onrender.com/all-items"
          );
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/membership",
        element: <Membership />,
      },
      {
        path: "/add-item",
        element: (
          <PrivateRoute>
            <AddItem />
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/register",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      {
        path: "/auth/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/user/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/shop/product/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetials />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://home-decor-pottery-server.onrender.com/item/details/${params.id}`
          ),
      },

      {
        path: "/user/update-product/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://home-decor-pottery-server.onrender.com/item/details/${params.id}`
          ),
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
