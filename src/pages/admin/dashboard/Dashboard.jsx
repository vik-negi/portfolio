import { React, useEffect, useState } from "react";
import WrapperContent from "../utils/WrapperContent";
import { errorMessage } from "../../../utils/Toast";
import { useQuery } from "react-query";
import { dashboard } from "../../../axios/dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const DashboardDetails = ({
  icon,
  title,
  subTitle,
  primaryColor,
  secondaryColor,
}) => {
  return (
    <div
      className={`flex mr-6 flex-col ${
        primaryColor && primaryColor
      } w-[250px] h-[65px] rounded-[5px] justify-start items-start`}
    >
      <div className="flex flex-row justify-start items-center">
        <div
          className={`flex items-center justify-center w-[55px] h-[65px] ${
            secondaryColor && secondaryColor
          } rounded-tl-[5px] rounded-bl-[5px]`}
        >
          <FontAwesomeIcon icon={icon} className="text-white text-[25px]" />
        </div>
        <div className="flex flex-col justify-start items-start">
          <p className="text-[28px] text-white font-bold ml-[10px]">
            {title != null ? title : 0}
          </p>
          <p className="text-[14px] text-white font-semibold ml-[10px]">
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

function Dashboard() {
  // const { data, isLoading, isSuccess, isError, error } = useQuery([], () =>
  //   dashboard()
  // );

  const [dashboardData, setDashboardData] = useState({});

  // useEffect(() => {
  //   if (data?.data?.data != null && isSuccess) {
  //     setDashboardData(data?.data?.data);
  //   }
  //   console.log("data", data?.data?.data);
  // }, [data?.data?.data]);

  return (
    <WrapperContent title="Dashboard">
      <div className=" flex flex-col justify-start items-start"></div>
      <div className=" flex flex-wrap justify-start items-start">
        <DashboardDetails
          icon={faPhone}
          subTitle="Total Portfolio views"
          title={dashboardData?.totalUpdatesTillNow}
          primaryColor="bg-[#7266BA]"
          secondaryColor="bg-[#675CA8]"
        />
        <DashboardDetails
          icon={faPhone}
          subTitle="Total Portfolio views, this week"
          title={dashboardData?.totalUpdatesThisWeek}
          primaryColor="bg-[#42A5F6]"
          secondaryColor="bg-[#3C94DC]"
        />
      </div>
    </WrapperContent>
  );
}

export default Dashboard;
