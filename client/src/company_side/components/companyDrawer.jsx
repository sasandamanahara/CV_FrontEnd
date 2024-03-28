import React from "react";
import Home from "../../company_side/icons/home.png";
import Dp1 from "../../company_side/icons/dp1.jpg";
import Bell from "../../company_side/icons/bell.png";

function CompanyDrawer() {
  return (
    <div className="fixed inset-y-0 left-0 z-19 w-64 bg-white shadow-md mt-20">
      <nav>
        <ul>
          <li className="flex px-4 py-2 hover:bg-gray-100">
            <img src={Home} className="h-8" />
            <a href="#">Dashboard</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <a href="#">Messages</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <a href="#">Company Profile</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <a href="#">All Applicants</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <a href="#">Job Listings</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <a href="#">Settings</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <a href="#">Help Center</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default CompanyDrawer;
