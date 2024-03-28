import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Dashboard from "./company_side/pages/Dashboard/Dashboard.jsx";
import CompanyDrawer from "./company_side/components/companyDrawer.jsx";
import { Button } from "./components/ui/button.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);
