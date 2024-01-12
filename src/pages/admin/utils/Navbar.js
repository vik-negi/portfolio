import { React, useState } from "react";
import { SideBarItem } from "../SideHeader";
import { NavbarIcon } from "./NavBarIcon";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sidebar w-[100%]">
      <div className="flex flex-row justify-between items-center w-[100%]">
        <SideBarItem open={true} route="/admin/dashboard" lable="ABC Company" />
        <NavbarIcon
          styles="bg-[#2c2f32] text-[#ffffff] rounded-[10px] my-1"
          name="menu"
          icon="ti-layout-list-thumb"
          handleClick={() => setOpen(!open)}
        />
      </div>
      {open && (
        <div className="bg-[#e2e2e2] rounded-[10px] my-1 mx-1">
          <SideBarItem
            open={open}
            route="/dashboard"
            image="/images/app_logo.png"
            lable="Dashboard"
          />
          <SideBarItem
            open={open}
            route="/members"
            icon="ti-layout-list-thumb"
            // image="/images/app_logo.png"
            lable="Members"
          />
          <SideBarItem
            open={open}
            route="/duty-manager"
            icon="ti-layout-list-thumb"
            // image="/images/app_logo.png"
            lable="Duty Manager"
          />
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
