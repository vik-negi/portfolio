import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { getAdminExperience } from "../../../axios/experience";
import WrapperContent from "../utils/WrapperContent";
import { errorMessage } from "../../../utils/Toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faPlus } from "@fortawesome/free-solid-svg-icons";
import create from "../../../utils/Theme";
import DateTimeFormatter from "../../../utils/dateTime_functionality";
import { useWindowWide } from "../utils/useWindowWide";
import { getAdminProjects } from "../../../axios/project";
import AddNewProject from "./components/AddNewProject";

const lableTextStyle = "text-[#1e1e2f] font-semibold text-[14px]";

const ExperienceItem = ({ project, handleEdit, handleDelete }) => {
  const theme = create();
  return (
    <tr key={project._id}>
      <td className="border px-4 py-2">
        <input
          type="text"
          value={project.title}
          onChange={(e) => handleEdit(project._id, "title", e.target.value)}
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <input
          type="text"
          value={project.company}
          onChange={(e) => handleEdit(project._id, "company", e.target.value)}
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <input
          type="text"
          value={project.location}
          onChange={(e) => handleEdit(project._id, "location", e.target.value)}
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <input
          type="date"
          value={project.from}
          onChange={(e) => handleEdit(project._id, "from", e.target.value)}
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <input
          type="date"
          value={project.to}
          onChange={(e) => handleEdit(project._id, "to", e.target.value)}
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <input
          type="checkbox"
          checked={project.current}
          onChange={(e) => handleEdit(project._id, "current", e.target.checked)}
        />
      </td>
      <td className="border px-4 py-2">
        <textarea
          value={project.description}
          onChange={(e) =>
            handleEdit(project._id, "description", e.target.value)
          }
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <textarea
          value={project.skills.join(", ")}
          onChange={(e) =>
            handleEdit(project._id, "skills", e.target.value.split(", "))
          }
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <textarea
          value={project.highlights.join(", ")}
          onChange={(e) =>
            handleEdit(project._id, "highlights", e.target.value.split(", "))
          }
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleEdit(project._id)}
        >
          Save
        </button>
      </td>
      <td className="border px-4 py-2">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleDelete(project._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export const AdmiProjectItem = ({
  title,
  value,
  placeholder,
  textArea,
  lines,
  classs,
  isCheckBox = false,
  isFullWidth = false,
  isSelect = false,
  size,
}) => {
  const theme = create();

  const options = ["Bignner", "Intermediate", "Advanced", "Expert"];
  return (
    <div
      className={`flex w-full ${
        isCheckBox === true && isFullWidth === false ? "flex-row" : "flex-col"
      } justify-start items-start mb-10 ${classs}`}
    >
      <label
        className={` ${
          theme.theme === "light" && "text-[#1e1e2f]"
        } font-semibold text-[14px]`}
      >
        {title}
      </label>

      {isSelect && (
        <select
          className={`w-full h-[${
            size != null ? size : "45px"
          }] rounded-[10px] text-[13px] border-[1px]  border-[#e8e9fa] outline-none px-4 mt-2 ${
            theme.theme !== "light" && "text-[#1e1e2f]"
          } `}
        >
          {options.map((item, index) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      )}

      {(value || value == "") && !isSelect && (
        <input
          type={isCheckBox ? "checkbox" : "text"}
          className={`w-full h-[${
            size != null ? size : "45px"
          }] rounded-[10px] text-[13px] border-[1px]  border-[#e8e9fa] outline-none px-4 mt-2 ${
            theme.theme !== "light" && "text-[#1e1e2f]"
          } `}
          placeholder={placeholder}
          value={value}
        />
      )}
      {textArea && (
        <textarea
          type="text"
          rows={lines || 6}
          className={`w-full rounded-[10px] text-[13px] border-[1px]  border-[#e8e9fa] outline-none px-4 py-2 mt-2 ${
            theme.theme !== "light" && "text-[#1e1e2f]"
          } `}
          placeholder={placeholder}
          value={textArea}
        />
      )}
    </div>
  );
};

const AdminProject = () => {
  const theme = create();
  useQuery("projects", () => getAdminProjects(), {
    retry: 1,
    retryDelay: 1,
    onError: (error) => {
      errorMessage(error?.response?.data?.message);
    },
    onSuccess: (data) => {
      console.log(data.data?.data);
      setProjects(data?.data?.data);
    },
  });

  const [openAddProjectModel, setOpenAddProjectModel] = useState(false);

  const [projects, setProjects] = useState([]);
  const width425 = useWindowWide(425);

  return (
    <WrapperContent title="Dashboard">
      <div className="flex justify-between items-start w-full bg-black py-3 px-10">
        <p className="px-10">Projects</p>
        <div className="border-4px bg-white-500">
          <button
            className="flex justify-center
           items-center bg-[#1e1e2f] hover:bg-[#e8e9fa] text-[#e8e9fa] hover:text-[#1e1e2f]  font-bold py-4 px-4 rounded"
            onClick={() => {
              setOpenAddProjectModel(true);
            }}
          >
            <FontAwesomeIcon className="mr-2" icon={faPlus} />
            Add Projects
          </button>
        </div>
      </div>
      {projects.length > 0 &&
        projects.map((project, index) => (
          <div
            className={`flex flex-wrap flex-row justify-between items-start mx-auto w-full max-w-[1100px]  mt-10 rounded-[10px] p-10  ${
              theme.theme === "light" ? "" : "bg-[#1e1e2f]"
            }`}
          >
            <div
              className={`  ${
                width425 ? "w-[400px]" : "w-full"
              } flex flex-col justify-start items-center mt-5`}
            >
              <AdmiProjectItem
                title="Name"
                value={project?.name}
                placeholder="Project Name"
              />
              <AdmiProjectItem
                title="Title"
                value={project?.title}
                placeholder="Project Title"
              />
              <AdmiProjectItem
                title="Link"
                value={project?.link}
                placeholder="Enter Site Link"
              />
              <AdmiProjectItem
                title="level"
                value={project?.level}
                isSelect={true}
                placeholder="Enter Site Link"
              />
            </div>

            <div className={`${width425 ? "w-[400px]" : "w-full"}`}>
              <div className="flex flex-col justify-start items-start">
                <div className="flex flex-col w-full justify-start items-center mt-5">
                  {project.highlights?.map((item, index) => (
                    <AdmiProjectItem
                      lines={3}
                      title={`Highlights ${index + 1}`}
                      textArea={item}
                      placeholder={`Highlights ${index + 1}`}
                    />
                  ))}
                </div>

                <AdmiProjectItem
                  title="Project Description"
                  lines={10}
                  textArea={project?.description}
                  placeholder="About Description"
                />

                <label
                  className={`${lableTextStyle} ${
                    theme.theme !== "light" && "text-[#f1f1f1]"
                  } `}
                >
                  tags
                </label>
                <div className="flex flex-row flex-wrap  justify-start items-center mt-5">
                  {project &&
                    project.tags?.map((item, index) => (
                      <div
                        className="mr-2 mb-2 bg-[#e8e9fa] rounded-full px-4 py-2 text-[#1e1e2f] font-normal hover:bg-[#1e1e2f] hover:text-[#e8e9fa] cursor-pointer 
                 text-[13px]
              "
                      >
                        {item}
                      </div>
                    ))}
                </div>

                <label
                  className={`${lableTextStyle} ${
                    theme.theme !== "light" && "text-[#f1f1f1]"
                  } `}
                >
                  Skills
                </label>
                <div className="flex flex-row flex-wrap  justify-start items-center mt-5">
                  {project &&
                    project.skillsUsed?.map((item, index) => (
                      <div
                        className="mr-2 mb-2 bg-[#e8e9fa] rounded-full px-4 py-2 text-[#1e1e2f] font-normal hover:bg-[#1e1e2f] hover:text-[#e8e9fa] cursor-pointer 
                 text-[13px]
              "
                      >
                        {item}
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center mt-5">
              {project.image.map((item, index) => (
                <div
                  className={`flex flex-col justify-start items-center mt-5 position-relative
                   ${width425 ? "w-[300px] h-[300px]" : "w-full"}`}
                >
                  <div className="flex flex-row justify-center items-center position-absolute top-5 right-5 rounded-full p-2 w-[30px] h-[30px] bg-black opacity-50 bg-red-500 hover:bg-red-700 cursor-pointer">
                    <FontAwesomeIcon
                      color="black"
                      size="lg"
                      icon="fa-solid fa-xmark"
                    />
                  </div>
                  <img
                    src={item}
                    alt="project"
                    className="w-full h-[300px] object-cover rounded-[10px]"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      <AddNewProject
        open={openAddProjectModel}
        cancel={() => {
          setOpenAddProjectModel(false);
        }}
      />
    </WrapperContent>
  );
};
export default AdminProject;
