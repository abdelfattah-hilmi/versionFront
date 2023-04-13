import ReactDOM from "react-dom/client";

import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Packages from "./components/Body/Packages";

// global styles
import "./index.css";

// main gateway
import App from "./pages";

// subPaths
import Main from "./pages/Main";
import VmData from "./pages/details";
// routes are here
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/vms",
        children: [
          {
            path: "",
            element: <Main />,
          },
          {
            path: "details",
            element: <VmData />,
          },
        ]
      },
      {
        path: "/packages",
        element: <Packages />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
