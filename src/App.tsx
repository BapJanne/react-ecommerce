import React from "react";
// import { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";
import ShopPage from "./pages/ShopPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/item",
    element: <ItemPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
