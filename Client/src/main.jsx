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
import SliderComponent from "./Components/Pages/SliderComponent.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <SliderComponent />,
      },
      {
        path: "/shop",
        element: <Shop />,
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
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
