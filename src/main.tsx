import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Navbar from "./components/commons/Navbar/Navbar";
import MenuList from "./pages/MenuList/MenuList";
import Home from "./pages/Home/Home";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home /></div>
  },
  {
    path: "/products",
    element: <div><MenuList /></div>
  },
  {
    path: "/create",
    element: <div><Register /></div>
  },
  {
    path: "/edit/:{id}",
    element: <div><Register /></div>
  },
]);

ReactDOM.createRoot(document!.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);