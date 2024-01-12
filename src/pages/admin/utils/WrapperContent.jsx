import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/Context";
import create from "../../../utils/Theme";
import { signout } from "./auth";
import NavbarOptionsDropdown from "../../../componenets/NavbarOptionsDropdown";
import { useWindowWide } from "./useWindowWide";

function WrapperContent({ title, children, headerChild, isOpen }) {
  const { state, updateSideBarOpen } = useContext(AppContext);

  const width650 = useWindowWide(625);
  return (
    <>
      <div
      // className="content-wrap mt-5"
      // style={{
      //   marginLeft: "75px",
      // }}
      >
        <div className={`main ${!width650 ? "mx-4" : ""}`}>
          <div className=" flex flex-col justify-start items-start">
            <div
              className={`flex justify-between items-center h-[50px] 
                w-full
              `}
            >
              <div className="flex">
                <Link to="/dashboard" className="text-[12px] font-semibold">
                  Dashboard{" "}
                </Link>

                <p className="text-[12px] font-normal"> &nbsp;/ {title}</p>
              </div>
              <div className="rightSide ml-auto">
                <NavbarOptionsDropdown
                  itemsList={[
                    {
                      title: "Dashboard",
                    },
                    {
                      title: "Profile",
                    },
                  ]}
                  showLogout={true}
                />
                {headerChild}
              </div>
            </div>
            {children}
            {/*content */}
          </div>
        </div>
      </div>
    </>
  );
}

export default WrapperContent;
