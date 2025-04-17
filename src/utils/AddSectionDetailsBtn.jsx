import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";

const AddSectionDetailsBtn = ({ title, route }) => {
  return (
    <div className="flex justify-center items-center h-[50px]">
      <Link
        href={route || "/admin/dashboard"}
        className="btn btn-secondary bg-[#737373]  active:bg-info-700 px-8 py-4 rounded-md transition duration-150 ease-in-out text-white
              "
      >
        <FontAwesomeIcon icon={faPlus} className="mr-4" />
        {title}
      </Link>
    </div>
  );
};

export default AddSectionDetailsBtn;
