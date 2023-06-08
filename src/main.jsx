import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import AuthProvider from "./Provider/AuthProvider";
import WellComePage from "./Components/WellComePage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <WellComePage>
        <RouterProvider router={router} />
      </WellComePage>
    </AuthProvider>
  </React.StrictMode>
);
