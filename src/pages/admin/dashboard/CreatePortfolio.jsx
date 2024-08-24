import React from "react";
import create from "../../../utils/Theme";
import { useParams } from "react-router-dom";
import CreateAbout from "./create_protfolio_sections/CreateAbout";
import AdminExperience from "../experience/Experience";

const CreatePortfolio = () => {
  const indexNumber = useParams().indexNumber;
  const theme = create();

  return (
    <div
      className={`mt-10 overflow-hidden flex flex-wrap flex-row justify-between items-start mx-auto w-full max-w-[980px] mb-10 `}
    >
      {indexNumber == 1 && <CreateAbout />}
      {indexNumber == 2 && <AdminExperience isFromCreateProtfolio={true} />}
    </div>
  );
};

export default CreatePortfolio;
