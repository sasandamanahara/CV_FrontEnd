import React, { useState } from "react";
import Navbar from "../../components/navBar";
import CompanyDrawer from "../../components/companyDrawer";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <CompanyDrawer />
    </div>
  );
}

export default Dashboard;
