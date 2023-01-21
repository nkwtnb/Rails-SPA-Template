import "../css/index.css"
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Child from "./Child";
import MainFrame from "./components/Frame/MainFrame";
import App from "./App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainFrame />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "/child",
        element: <Child />
      },
    ]
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
