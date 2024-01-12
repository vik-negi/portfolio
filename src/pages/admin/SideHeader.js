import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { signout } from "./utils/auth";
import { useQuery } from "react-query";
import { errorMessage } from "../../utils/Toast";
import { NavbarIcon } from "./utils/NavBarIcon";
import create, { themes } from "../../utils/Theme";
import { useWindowWide } from "./utils/useWindowWide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeModeProvider } from "../../context/ThemeContext";
import { AppContext } from "../../context/Context";

export const SideBarItem = ({
  open,
  route,
  icon,
  image,
  lable,
  fontAweson,
}) => {
  return (
    <Link
      to={route || "/dashboard"}
      className="logo-with-text flex justify-start items-center text-white hover:text-[#1e1e2f] hover:bg-[#e8e9fa] hover:cursor-pointer rounded-[10px] w-full"
    >
      {image && (
        <div style={{ width: "50px", height: "45px" }}>
          <img
            src={
              // data?.data?.result[0]?.logo?.Headerlogo ||
              icon || "/images/app_logo.png"
            }
            className="img-size img-fluid bg-transparent"
            alt="logo"
          />
        </div>
      )}
      {icon && (
        <i
          className={`${icon} text-[25px] flex justify-center items-center flex-col`}
          style={{ width: "50px", height: "45px" }}
        ></i>
      )}
      {fontAweson && (
        <FontAwesomeIcon
          icon={fontAweson}
          className="text-[25px] flex justify-center items-center flex-col"
          style={{ width: "50px", height: "45px" }}
        />
      )}
      {open ? (
        <p className="text-[15px] font-semibold text-inherit ml-2 mb-0">
          {lable || ""}
        </p>
      ) : null}
    </Link>
  );
};

export const SideBarItemsContainer = ({ open, setOpen }) => {
  const { state, updateSideBarOpen } = useContext(AppContext);
  return (
    <div className="">
      <div className="flex justify-between items-center">
        {open ? (
          <Link
            to="/dashboard"
            className="logo-with-text flex justify-between items-center mx-3"
          >
            <div style={{ width: "50px" }}>
              <img
                src={
                  // data?.data?.result[0]?.logo?.Headerlogo ||
                  "https://www.logolynx.com/images/logolynx/18/186056e89f0f92c07b026966bccb6e0c.png"
                }
                className="img-size img-fluid bg-transparent"
                alt="logo"
              />
            </div>
          </Link>
        ) : null}
        {/* <span>{data?.data?.result[0]?.applicationName || "GYM"}</span> */}

        <NavbarIcon
          icon={"fa-solid fa-bars"}
          styles="w-[55px] h-[55px]"
          handleClick={() => {
            setOpen(!open);
            console.log("side bar : ", state.sideBarOpen);
            updateSideBarOpen({ sideBarOpen: !open });
          }}
        />
      </div>
      <SideBarItem
        open={open}
        icon={"fa-solid fa-house"}
        route="/admin/dashboard"
        lable="DASHBOARD"
      />

      <SideBarItem
        open={open}
        route="/admin/about"
        icon="fa-regular fa-address-card"
        // image="/images/app_logo.png"
        lable="ABOUT"
      />
      <SideBarItem
        open={open}
        route="/admin/experiences"
        icon="fa-solid fa-briefcase"
        // image="/images/app_logo.png"
        lable="EXPERIENCES"
      />
      <SideBarItem
        open={open}
        route="/admin/projects"
        icon="fa-solid fa-laptop-file"
        // image="/images/app_logo.png"
        lable="PROJECTS"
      />

      {/* <li>
              <NavLink to="/dashboard" className="sidebar-sub-toggle">
                <i className="ti-layout-grid2-alt"></i>
                {open ? "Dashboard" : ""}
              </NavLink>
            </li> */}
    </div>
  );
};

function SideHeader() {
  const [open, setOpen] = useState(true);
  const [drawerStyle, setDrawerStyle] = useState("");
  const [openUser, setOpenUser] = useState(false);

  // const { isError, error, data } = useQuery("settings", getCompany);

  // if (isError) {
  //   errorMessage(error?.message);
  // }
  //"/images/logo.png"
  const isSmallScreen = useWindowWide(800);

  return (
    <div
      className={`sticky top-0 h-[100vh] ${drawerStyle} ml-[0px] px-2 bg-[#1e1e2f]`}
      style={{
        width: open && isSmallScreen ? "250px" : "70px",
      }}
    >
      <div className="h-[100%]">
        <div className="flex justify-between flex-col h-[100%]">
          <SideBarItemsContainer
            open={isSmallScreen && open}
            setOpen={setOpen}
          />
          <div className="mb-3 flex items-center justify-center bg-[#b23b3b] rounded-[5px] h-[45px]">
            <a
              href="#1"
              onClick={() => signout()}
              className="flex items-center justify-center"
            >
              <i className="ti-close"></i>
              {open && isSmallScreen && (
                <p className="text-md mb-0 font-bold text-red ml-2">Logout</p>
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideHeader;
