import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { getAdminExperience } from "../../../axios/experience";
import WrapperContent from "../utils/WrapperContent";
import { errorMessage } from "../../../utils/Toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import create from "../../../utils/Theme";
import DateTimeFormatter from "../../../utils/dateTime_functionality";
import { useWindowWide } from "../utils/useWindowWide";

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

      {value && (
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

  const width425 = useWindowWide(425);

  //   useEffect(() => {
  //     if (isSuccess && data?.data?.data?.experiences) {

  //     }
  //   }, [data, isSuccess]);

  return (
    <WrapperContent title="Dashboard">
      <div className=" flex flex-col justify-center items-center w-full bg-black"></div>
      {experiences.length > 0 &&
        experiences.map((experience, index) => (
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
              <AdmivExperienceItem
                title="Title"
                value={experience?.title}
                placeholder="About Title"
              />
              <AdmivExperienceItem
                title="Company"
                value={experience?.company}
                placeholder="About Company"
              />
              <AdmivExperienceItem
                title="Location"
                value={experience?.location}
                placeholder="About Location"
              />
              <AdmivExperienceItem
                title="Joining From"
                value={DateTimeFormatter.getFormattedDate(experience?.from)}
                placeholder="About Location"
              />
              {experience?.current !== true && experience?.to !== null && (
                <AdmivExperienceItem
                  classs="ml-5"
                  title="Till"
                  value={DateTimeFormatter.getFormattedDate(experience?.to)}
                  placeholder="About Location"
                />
              )}
              {experience?.current === true && (
                <AdmivExperienceItem
                  title="Current"
                  isCheckBox={experience?.current}
                  size={"20px"}
                  value={experience?.current}
                  placeholder="About Location"
                />
              )}
              <AdmivExperienceItem
                title="About Description"
                lines={10}
                textArea={experience?.description}
                placeholder="About Description"
              />
            </div>

            <div className={`${width425 ? "w-[400px]" : "w-full"}`}>
              <div className="flex flex-col justify-start items-start">
                <div className="flex flex-col w-full justify-start items-center mt-5">
                  {experience.highlights?.map((item, index) => (
                    <AdmivExperienceItem
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
    </WrapperContent>
  );
}
export default AdminExperience;
