import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { getAdminExperience, addExperience } from "../../../axios/experience";
import WrapperContent from "../utils/WrapperContent";
import { errorMessage, successMessage } from "../../../utils/Toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faPlus,
  faClose,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import create from "../../../utils/Theme";
import DateTimeFormatter from "../../../utils/dateTime_functionality";
import { useWindowWide } from "../utils/useWindowWide";
import AdminProject from "../project/AdminProjects";
import AddNew from "../utils/AddNew";
import AllTextFields from "../utils/AllTextFields";

const lableTextStyle = "text-[#1e1e2f] font-semibold text-[14px]";

const ExperienceItem = ({ experience, handleEdit, handleDelete }) => {
  const theme = create();
  return (
    <tr key={experience._id}>
      <td className="border px-4 py-2">
        <input
          type="text"
          value={experience.title}
          onChange={(e) => handleEdit(experience._id, "title", e.target.value)}
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <input
          type="text"
          value={experience.company}
          onChange={(e) =>
            handleEdit(experience._id, "company", e.target.value)
          }
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <input
          type="text"
          value={experience.location}
          onChange={(e) =>
            handleEdit(experience._id, "location", e.target.value)
          }
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <input
          type="date"
          value={experience.from}
          onChange={(e) => handleEdit(experience._id, "from", e.target.value)}
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <input
          type="date"
          value={experience.to}
          onChange={(e) => handleEdit(experience._id, "to", e.target.value)}
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <input
          type="checkbox"
          checked={experience.current}
          onChange={(e) =>
            handleEdit(experience._id, "current", e.target.checked)
          }
        />
      </td>
      <td className="border px-4 py-2">
        <textarea
          value={experience.description}
          onChange={(e) =>
            handleEdit(experience._id, "description", e.target.value)
          }
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <textarea
          value={experience.skills.join(", ")}
          onChange={(e) =>
            handleEdit(experience._id, "skills", e.target.value.split(", "))
          }
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <textarea
          value={experience.highlights.join(", ")}
          onChange={(e) =>
            handleEdit(experience._id, "highlights", e.target.value.split(", "))
          }
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleEdit(experience._id)}
        >
          Save
        </button>
      </td>
      <td className="border px-4 py-2">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleDelete(experience._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export const AdmivExperienceItem = ({
  title,
  value,
  placeholder,
  textArea,
  lines,
  classs,
  isCheckBox = false,
  size,
}) => {
  const theme = create();
  return (
    <div
      className={`flex w-full ${
        isCheckBox === true ? "flex-row" : "flex-col"
      } justify-start items-start mb-10 ${classs}`}
    >
      <label
        className={` ${
          theme.theme === "light" && "text-[#1e1e2f]"
        } font-semibold text-[14px]`}
      >
        {title}
      </label>

      {(value || value == "") && (
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

function AdminExperience() {
  const theme = create();
  const { data, isLoading, isSuccess, isError, error } = useQuery(
    "exp",
    () => getAdminExperience(),
    {
      retry: 1,
      retryDelay: 1,
      onError: (error) => {
        errorMessage(error?.response?.data?.message);
      },
      onSuccess: (data) => {
        console.log(data.data?.data?.experiences);
        setExperiences(data?.data?.data?.experiences);
      },
    }
  );

  const [experiences, setExperiences] = useState([]);

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [JoiningFrom, setJoiningFrom] = useState("");
  const [joiningTo, setJoiningTo] = useState("");
  const [current, setCurrent] = useState(false);
  const [description, setDescription] = useState("");
  const [highlightList, setHighlightList] = useState([]);
  const [highlight, setHighlight] = useState("");
  const [skillList, setSkillList] = useState([]);
  const [skill, setSkill] = useState("");

  const [openAddProjectModel, setOpenAddProjectModel] = useState(false);

  const addExpMutation = useMutation((data) => addExperience(data), {
    onSuccess: (data) => {
      console.log(data);
      successMessage("Experience Added Successfully");
    },
    onError: (error) => {
      console.log(error);
      errorMessage(error?.response?.data?.message || "Something went wrong");
    },
  });

  const handleEdit = (id, field, value) => {
    const updatedExperiences = experiences.map((experience) => {
      if (experience._id === id) {
        return { ...experience, [field]: value };
      }
      return experience;
    });
    setExperiences(updatedExperiences);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/experiences/${id}`);
    const updatedExperiences = experiences.filter(
      (experience) => experience._id !== id
    );
    setExperiences(updatedExperiences);
  };

  const width425 = useWindowWide(480);

  const addSkills = (skill) => {
    setSkill("");
    if (skillList.includes(skill) || skill === "") {
      return;
    }
    setSkillList([...skillList, skill]);
  };

  const addHighlight = (highligh) => {
    setHighlight("");
    if (highlightList.includes(highligh) || highligh === "") {
      return;
    }
    setHighlightList([...highlightList, highligh]);
  };

  const saveExperience = async () => {
    const data = {
      title,
      company,
      location,
      from: JoiningFrom,
      to: joiningTo,
      current,
      description,
      skills: skillList,
      highlights: highlightList,
    };

    addExpMutation.mutate(data);
  };

  //   useEffect(() => {
  //     if (isSuccess && data?.data?.data?.experiences) {

  //     }
  //   }, [data, isSuccess]);

  return (
    <WrapperContent title="Experience">
      <div
        className={` mx-auto flex flex-wrap flex-row justify-between items-center mx-auto w-full max-w-[950px]   rounded-[8px] py-1`}
      >
        <p className="px-10 text-[20px]">Experience</p>
        <div className="border-4px bg-white-500">
          <button
            className="flex justify-center
           items-center bg-[#1e1e2f] hover:bg-[#e8e9fa] text-[#e8e9fa] hover:text-[#1e1e2f]  font-semiblod text-[12px] py-4 px-4 rounded-[4px]"
            onClick={() => {
              setOpenAddProjectModel(true);
            }}
          >
            <FontAwesomeIcon className="mr-2" icon={faPlus} />
            Add Experience
          </button>
        </div>
      </div>
      {experiences.length > 0 &&
        experiences.map((experience, index) => (
          <div
            className={`flex flex-wrap flex-row justify-between items-start mx-auto w-full max-w-[1000px] rounded-[10px] p-10 `}
          >
            <div
              className={` ${
                theme.theme === "light" ? "bg-white" : "bg-[#1e1e2f]"
              } py-[38px] px-[25px] rounded-[8px]  ${
                width425 ? "w-[450px]" : "w-full"
              } flex flex-col justify-start items-center`}
            >
              <AllTextFields
                title="Title"
                value={experience?.title}
                placeholder="About Title"
              />
              <AllTextFields
                title="Company"
                value={experience?.company}
                placeholder="About Company"
              />
              <AllTextFields
                title="Location"
                value={experience?.location}
                placeholder="About Location"
              />
              <AllTextFields
                title="Joining From"
                value={DateTimeFormatter.getFormattedDate(experience?.from)}
                placeholder="About Location"
              />
              {experience?.current !== true && experience?.to !== null && (
                <AllTextFields
                  classs="ml-5"
                  title="Till"
                  value={DateTimeFormatter.getFormattedDate(experience?.to)}
                  placeholder="About Location"
                />
              )}
              {experience?.current === true && (
                <AllTextFields
                  title="Current"
                  isCheckBox={experience?.current}
                  size={"20px"}
                  value={experience?.current}
                  placeholder="About Location"
                />
              )}
              <AllTextFields
                title="About Description"
                lines={10}
                textArea={experience?.description}
                placeholder="About Description"
              />
            </div>

            <div
              className={`${width425 ? "w-[450px]" : "w-full"}  ${
                theme.theme === "light" ? "bg-white" : "bg-[#1e1e2f]"
              } py-[38px] px-[25px] rounded-[8px] `}
            >
              <div className="flex flex-col justify-start items-start">
                <div className="flex flex-col w-full justify-start items-center mt-5">
                  {experience.highlights?.map((item, index) => (
                    <AllTextFields
                      lines={3}
                      title={`Highlights ${index + 1}`}
                      textArea={item}
                      placeholder={`Highlights ${index + 1}`}
                    />
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
                  {experience &&
                    experience.skills?.map((item, index) => (
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
          </div>
        ))}
      <AddNew
        open={openAddProjectModel}
        cancel={() => {
          setOpenAddProjectModel(false);
        }}
        title={"Add New Project"}
        onSubmit={() => {
          saveExperience();
        }}
        body={
          <div className="mt-2">
            <AllTextFields
              isFullWidth={true}
              title="title"
              classs={"text-gray-500 flex-col w-full"}
              value={title}
              name="name"
              onChange={(e) => {
                setTitle(e);
              }}
              placeholder="Name of project"
            />
            <AllTextFields
              isFullWidth={true}
              title="Company"
              classs={"text-gray-500 flex-col w-full"}
              value={company}
              onChange={(e) => setCompany(e)}
              placeholder="Enter project title"
            />
            <AllTextFields
              isFullWidth={true}
              title="Location"
              classs={"text-gray-500 flex-col w-full"}
              value={location}
              onChange={(e) => setLocation(e)}
              placeholder="Enter project description"
            />
            <AllTextFields
              isFullWidth={true}
              title="Joining From"
              classs={"text-gray-500 flex-col w-full"}
              value={JoiningFrom}
              onChange={(e) => setJoiningFrom(e)}
              placeholder="Link of project"
            />

            <div className="flex w-full flex-col justify-start items-start mb-10">
              <label
                className={` ${
                  theme.theme === "light" && "text-[#1e1e2f]"
                } font-semibold text-[14px]`}
              >
                Skills
              </label>
              <div className="flex flex-row w-full justify-start items-center mt-5">
                <input
                  type="text"
                  className={`h-[45px] rounded-[10px] text-[13px] border-[1px] border-[#e8e9fa] outline-none px-4 mt-2 ${
                    theme.theme !== "light" && "text-[#1e1e2f]"
                  }`}
                  onChange={(e) => setSkill(e.target.value)}
                  placeholder="Python"
                  value={skill}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                  onClick={() => addSkills(skill)}
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap mt-4">
                {skillList.length > 0 &&
                  skillList.map((item, index) => (
                    <div
                      className="mr-2 flex mb-2 bg-[#e8e9fa] rounded-full px-6 py-3 text-[#1e1e2f] font-normal hover:bg-[#1e1e2f] hover:text-[#e8e9fa] cursor-pointer
                        text-[13px]
                        "
                    >
                      {item}
                      <div
                        className="w-[20px] h-[20px] ml-2 rounded-full hover:bg-red-500 hover:text-white flex justify-center items-center mx-auto justify-center"
                        onClick={() => {
                          setSkillList(
                            skillList.filter((skill) => skill !== item)
                          );
                        }}
                      >
                        <FontAwesomeIcon className="" icon={faClose} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex w-full flex-col justify-start items-start mb-10">
              <label
                className={` ${
                  theme.theme === "light" && "text-[#1e1e2f]"
                } font-semibold text-[14px]`}
              >
                Highlights
              </label>
              <div className="flex flex-row w-full justify-start items-center mt-5">
                <input
                  type="text"
                  className={`h-[45px] rounded-[10px] text-[13px] border-[1px] border-[#e8e9fa] outline-none px-4 mt-2 ${
                    theme.theme !== "light" && "text-[#1e1e2f]"
                  }`}
                  onChange={(e) => setHighlight(e.target.value)}
                  placeholder="Python"
                  value={highlight}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                  onClick={() => addHighlight(highlight)}
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap mt-4">
                {highlightList.length > 0 &&
                  highlightList.map((item, index) => (
                    <div
                      className="mr-2 flex mb-2 bg-[#e8e9fa] rounded-full px-6 py-3 text-[#1e1e2f] font-normal hover:bg-[#1e1e2f] hover:text-[#e8e9fa] cursor-pointer
                        text-[13px]
                        "
                    >
                      {item}
                      <div
                        className="w-[20px] h-[20px] ml-2 rounded-full hover:bg-red-500 hover:text-white flex justify-center items-center mx-auto justify-center"
                        onClick={() => {
                          setHighlightList(
                            highlightList.filter((tag) => tag !== item)
                          );
                        }}
                      >
                        <FontAwesomeIcon className="" icon={faClose} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {/* <div className="flex w-full flex-col justify-start items-start mb-10">
              <label
                className={` ${
                  theme.theme === "light" && "text-[#1e1e2f]"
                } font-semibold text-[14px]`}
              >
                Image
              </label>
              <div className="flex flex-row w-full justify-start items-center mt-5">
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  name="image"
                  type="file"
                  className={`h-[45px] rounded-[10px] text-[13px] border-[1px] border-[#e8e9fa] outline-none px-4 mt-2 ${
                    theme.theme !== "light" && "text-[#1e1e2f]"
                  }`}
                />
              </div>
            </div> */}
          </div>
        }
      />
    </WrapperContent>
  );
}
export default AdminExperience;
