import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./pages/Index";
import Schedule from "./pages/Schedule";
import About from "./pages/About";
import reportWebVitals from "./reportWebVitals";
import "./css/style.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "schedule",
    element: <Schedule />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(
    <RouterProvider router={router}/>
);


reportWebVitals();
