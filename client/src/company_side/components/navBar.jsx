import React from "react";
import Logo from "../../company_side/icons/logo.png";
import Dp1 from "../../company_side/icons/dp1.jpg";
import Bell from "../../company_side/icons/bell.png";

function Navbar() {
  return (
    <div className="bg-gray-300 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="w-full flex flex-wrap items-center justify-between m-0 p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-8" alt="Flowbite Logo" />
          <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            NextStepCareers
          </div>
        </div>
        <div className="flex gap-3 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
          <img src={Bell} className="h-6 rounded-full mx-2" alt="Failed" />
          <button
            type="button"
            className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-5"
          >
            Post a Job
          </button>
          <img src={Dp1} className="h-10 rounded-full " alt="Failed" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
