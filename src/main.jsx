import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import Calendar from "./pages/Calendar";
import Integration from "./pages/Integration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/leads", element: <Leads /> },
      { path: "/transactions", element: <Transactions/> }, 
       { path: "/analytics", element: <Analytics /> },
       { path: "/calendar", element: <Calendar /> },
       { path: "/integration", element: <Integration /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);