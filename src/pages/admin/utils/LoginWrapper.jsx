import React from "react";
import SideHeader from "../SideHeader";
import Footer from "../Footer";
import MobileNavbar from "./Navbar";

const LoginWrapper = ({ childrens }) => {
  return (
    <div className="relative sm:8 min-h-screen flex sm:flex-row flex-col">
      <div className="sm:flex hidden mr-10 relative">
        <SideHeader />
      </div>
      <div className="sm:hidden flex relative">
        <MobileNavbar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        {childrens}
        <Footer />
      </div>
    </div>
  );
};

export default LoginWrapper;
