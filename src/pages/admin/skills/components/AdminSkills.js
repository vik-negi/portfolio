import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import { useMutation, useQuery } from "react-query";
import WrapperContent from "../../utils/WrapperContent";
import { errorMessage, successMessage } from "../../../../utils/Toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faPlus,
  faClose,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useWindowWide } from "../../utils/useWindowWide";
import create from "../../../../utils/Theme";
import AddNew from "../../utils/AddNew";
import {
  addSkillByFile,
  getAdminSkills,
  addSkill,
  getAllSkills,
} from "../../../../axios/skills";
import AllTextFields from "../../utils/AllTextFields";

const SkillTextFields = ({
  value,
  placeholder,
  name,
  image,
  onChange = () => {},
}) => {
  const theme = create();

  return (
    <div
      className={`flex w-full  align-middle items-center flex-row justify-start  gap-5 mb-10  relative`}
    >
      <div>
        <img src={image} height={"35px"} width={"50px"} alt="skill" />
      </div>
      <input
        onChange={(e) => onChange(e.target.value)}
        name={name}
        value={value}
        type={"text"}
        className={`w-full h-[45px] rounded-[10px] text-[13px] border-[1px]  border-[#e8e9fa] outline-none px-4 mt-2  ${
          theme.theme === "light" ? "text-[#1e1e2f]" : "text-white"
        } ${theme.theme === "light" ? "bg-white" : "bg-[#1e1e2f]"}`}
        placeholder={placeholder}
      />

      <div className="flex flex-row justify-center items-center absolute top-5 right-5 rounded-full p-2 w-[30px] h-[30px] bg-black bg-white-400 cursor-pointer">
        <FontAwesomeIcon color="white" size="lg" icon="fa-solid fa-xmark" />
      </div>
    </div>
  );
};

function AdminSkills() {
  const lableTextStyle = "text-[#1e1e2f] font-semibold text-[14px]";

  const [openAddskillModel, setOpenAddskillModel] = useState(false);
  const [
    openAddManyskillThroughFileModel,
    setOpenAddManyskillThroughFileModel,
  ] = useState(false);

  const [categoryName, setCategoryName] = useState("");
  const [skillName, setSkillName] = useState("");
  const [skillLevel, setSkillLevel] = useState("");

  const [allSkills, setAllSkills] = useState([]);

  const [skills, setSkills] = useState([
    {
      category: "Frontend",
      skills: [
        {
          skill: {
            name: "React",
            image:
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
          },
          level: "Intermediate",
        },
        {
          skill: {
            name: "React",
            image:
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
          },
          level: "Intermediate",
        },
        {
          skill: {
            name: "React",
            image:
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
          },
          level: "Intermediate",
        },
      ],
    },
    {
      category: "Frontend",
      skills: [
        {
          skill: {
            name: "React",
            image:
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
          },
          level: "Intermediate",
        },
      ],
    },
  ]);

  const { data: skillsData, refetch: refetchskills } = useQuery(
    "skills",
    () => getAllSkills(),
    {
      retry: 1,
      retryDelay: 1,
      onError: (error) => {
        errorMessage(error?.response?.data?.message);
      },
      onSuccess: (data) => {
        console.log(data.data?.data);
        setAllSkills(data?.data?.data);
      },
    }
  );

  const [skillsFromFile, setSkillsFromFile] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");

    reader.onload = function (event) {
      const jsonData = event.target.result;
      setSkillsFromFile(jsonData);
    };

    console.log("data ", skillsFromFile);

    reader.onerror = function (event) {
      console.error("File reading error:", event.target.error);
    };
  };

  const addSkillsByFileMutation = useMutation((data) => addSkillByFile(data), {
    onError: (error) => {
      errorMessage(error?.response?.data?.message);
    },
    onSuccess: (data) => {
      console.log(data.data?.data);
      successMessage("skill Added Successfully");
      // goBack();
    },
  });

  const addSkillsMutation = useMutation((data) => addSkill(data), {
    onError: (error) => {
      errorMessage(error?.response?.data?.message);
    },
    onSuccess: (data) => {
      console.log(data.data?.data);
      successMessage("skill Added Successfully");
      // goBack();
    },
  });

  const handleSendFile = () => {
    addSkillsByFileMutation.mutate(skillsFromFile);
  };

  const handleAddSkill = () => {
    const data = {
      skillCategory: categoryName,
      skill: skillName,
      level: skillLevel,
    };

    console.log("data : ", data);

    addSkillsMutation.mutate(data);
  };
  //   const goBack = () => {
  //     navigate(-1);
  //   };

  const theme = create();
  const width425 = useWindowWide(425);

  return (
    <WrapperContent title="skill">
      <div
        className={` mx-auto max-w-[1100px] rounded-[5px] flex justify-between items-center w-full p-1`}
      >
        <p className="px-10 text-[20px]">Skills</p>
        <div className="border-4px bg-white-500">
          <button
            className="flex justify-center sticky z-5 top-5
           items-center bg-[#1e1e2f] hover:bg-[#e8e9fa] text-[#e8e9fa] hover:text-[#1e1e2f]  font-semiblod text-[12px] py-4 px-4 rounded-[4px]"
            onClick={() => {
              setOpenAddskillModel(true);
            }}
          >
            <FontAwesomeIcon className="mr-2" icon={faPlus} />
            Add Skill
          </button>
        </div>
      </div>

      <div
        className={`flex flex-col sm:justify-between justify-start items-start mx-auto w-full max-w-[1100px]`}
      >
        {skills.length > 0 &&
          skills.map((skill, index) => (
            <div
              className={`flex justify-between w-full flex-col items-start mx-auto max-w-[1100px]`}
            >
              <div className="flex flex-row gap-10 justify-between items-center">
                <AllTextFields
                  title="Category"
                  value={skill.category}
                  placeholder="skill Name"
                />
                <div
                  className="items-center gap-5 hover:cursor-pointer bg-blue-500 hover:bg-blue-700  transform hover:scale-2 transition-transform duration-300
                text-white font-bold py-2 px-4 rounded-full "
                  onClick={() => {}}
                >
                  <FontAwesomeIcon className="" icon={faPlus} />
                </div>
                <div
                  className="items-center gap-5 hover:cursor-pointer bg-red-500 hover:bg-red-700  transform hover:scale-2 transition-transform duration-300
                text-white font-bold py-2 px-4 rounded-full "
                  onClick={() => {}}
                >
                  <FontAwesomeIcon className="" icon={faTrash} />
                </div>
              </div>
              <div
                className={`flex flex-wrap w-full flex-row justify-between items-start  mb-5`}
              >
                {skill.skills.map((item, index) => (
                  <div
                    className={`flex flex-wrap w-full flex-row justify-between items-start  mb-5 max-w-[500px] rounded-[10px] p-10  ${
                      theme.theme === "light" ? "bg-[#ffffff]" : "bg-[#1e1e2f]"
                    }`}
                  >
                    <SkillTextFields
                      value={item?.skill.name}
                      placeholder="skill Title"
                      image={item?.skill.image}
                    />
                    <AllTextFields
                      title="Level"
                      value={item.level}
                      isSelect={true}
                      placeholder="Select Level"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      <AddNew
        open={openAddManyskillThroughFileModel}
        cancel={() => {
          setOpenAddManyskillThroughFileModel(false);
        }}
        title={"Add Skills"}
        onSubmit={() => handleSendFile()}
        body={
          <div>
            <div className="flex flex-col">
              <p
                className="text-[#1e1e2f] font-semibold text-[14px]
                "
              >
                Add By Files
              </p>
              <input type="file" onChange={handleFileChange} />
            </div>
          </div>
        }
      />
      <AddNew
        open={openAddskillModel}
        cancel={() => {
          setOpenAddskillModel(false);
        }}
        title={"Add Skills"}
        onSubmit={() => handleAddSkill()}
        body={
          <div>
            <div className="flex flex-col">
              <AllTextFields
                title="Category"
                value={categoryName}
                onChange={(value) => setCategoryName(value)}
                placeholder="skill Name"
              />
              <AllTextFields
                title="Skill"
                value={allSkills.find((item) => item._id === skillName)?.name}
                placeholder="skill Name"
                options={allSkills.map((item) => item.name)}
                isSelect={true}
                onChange={(e) => {
                  const id = allSkills.find(
                    (item) => item.name === e.target.value
                  )._id;
                  setSkillName(id);
                }}
              />
              <AllTextFields
                title="Level"
                value={skillLevel}
                onChange={(e) => setSkillLevel(e.target.value)}
                placeholder="skill Name"
                name={"skillLevel"}
                isSelect={true}
              />
            </div>
          </div>
        }
      />
    </WrapperContent>
  );
}
export default AdminSkills;
