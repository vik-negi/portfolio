import { React, useEffect, useState } from "react";
import WrapperContent from "../utils/WrapperContent";
import { errorMessage } from "../../../utils/Toast";
import { Mutation, useMutation, useQuery } from "react-query";
import { getAdminAbout, updateAbout } from "../../../axios/about";
import create from "../../../utils/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";

const lableTextStyle = "text-[#1e1e2f] font-semibold text-[20px]";

export const AboutItem = ({
  title,
  value,
  placeholder,
  textArea,
  onChange,
  name,
}) => {
  const theme = create();
  return (
    <div className="flex flex-col justify-start items-start mb-10">
      <label
        className={` ${
          theme.theme === "light" && "text-[#1e1e2f]"
        } font-semibold text-[20px]`}
      >
        {title}
      </label>
      {value && (
        <input
          type="text"
          name={name}
          onChange={(e) => onChange(e)}
          className={`w-full h-[50px] rounded-[10px] border-[1px] w-[500px] border-[#e8e9fa] outline-none px-4 py-2 mt-2 ${
            theme.theme !== "light" && "text-[#1e1e2f]"
          } `}
          placeholder={placeholder}
          value={value}
        />
      )}
      {textArea && (
        <textarea
          type="text"
          rows={6}
          name={name}
          onChange={(e) => onChange(e)}
          className={`w-full rounded-[10px] border-[1px] w-[500px] border-[#e8e9fa] outline-none px-4 py-2 mt-2 ${
            theme.theme !== "light" && "text-[#1e1e2f]"
          } `}
          placeholder={placeholder}
          value={textArea}
        />
      )}
    </div>
  );
};

export const SocialMediaItem = ({
  title,
  value,
  placeholder,
  onChange,
  name,
}) => {
  const theme = create();
  return (
    <div className="flex flex-col mb-5 w-full">
      <label
        className={`font-normal text-[12px] ${
          theme.theme === "light" && "text-[#1e1e2f]"
        } `}
      >
        {title} <span className="text-[#ff0000db]">*</span>
      </label>
      <input
        type="text"
        name={name}
        onChange={(e) => onChange(e)}
        className="w-full h-[40px] rounded-[10px] border-[1px] border-[#e8e9fa] outline-none px-4 py-2 mt-2 ::placeholder text-[#1e1e2f] font-normal text-[12px] "
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export function AddPassionDialog() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        className="mr-2 mb-2 bg-[#e8e9fa] rounded-full px-5 py-3 text-[#1e1e2f] font-normal hover:bg-[#1e1e2f] hover:text-[#e8e9fa] cursor-pointer 
                 text-[14px] hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:text-black hover:border-[#1e1e2f] border-[1px] border-[#e8e9fa] hover:bg-transparent
              "
        onClick={handleOpen}
      >
        Add Passion <FontAwesomeIcon className="ml-2" icon={faPlus} />
      </Button>
      <Dialog open={open} handler={handleOpen} size={"xl"}>
        <div className="flex items-center justify-between w-full">
          <DialogHeader>New message to @</DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody divider>
          <div className="grid gap-6">
            <Input label="Username" />
            <Textarea label="Message" />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="red" onClick={handleOpen}>
            close
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            send message
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

function AdminAbout() {
  const theme = create();
  useQuery([], () => getAdminAbout(), {
    onSuccess: (data) => {
      setAbout(data.data?.data);
    },
  });

  const [about, setAbout] = useState({});

  const handleFieldChange = (e) => {
    setAbout({ ...about, [e.target.name]: e.target.value });
  };

  const handleSocialMediaChange = (e) => {
    setAbout({
      ...about,
      social_links: { ...about.social_links, [e.target.name]: e.target.value },
    });
  };

  const editMutation = useMutation(() => updateAbout(about), {
    onSuccess: (data) => {
      setAbout(data.data?.data);
    },
    onError: (error) => {
      errorMessage(error);
    },
  });

  const handleUpdate = () => {
    editMutation.mutate();
  };
  return (
    <WrapperContent title="Dashboard">
      <div className=" flex flex-col justify-center items-center w-full bg-black"></div>
      <Button className="w-[120px] bg-black" onClick={handleUpdate}>
        Update
      </Button>
      <div className=" flex flex-wrap flex-row justify-between items-start mx-auto w-full max-w-[1100px]  mt-10">
        <div className="mb-10">
          <AboutItem
            title="Title"
            value={about?.title}
            name="title"
            onChange={handleFieldChange}
            placeholder="About Title"
          />
          <AboutItem
            title="About Description"
            textArea={about?.description}
            name="description"
            onChange={handleFieldChange}
            placeholder="About Description"
          />

          <label
            className={`${lableTextStyle} ${
              theme.theme !== "light" && "text-[#f1f1f1]"
            } `}
          >
            Passion
          </label>
          <div className="flex flex-row flex-wrap w-[500px] justify-start items-center mt-5">
            {about.passion?.map((item, index) => (
              <div
                className="mr-2 mb-2 bg-[#e8e9fa] rounded-full px-5 py-3 text-[#1e1e2f] font-normal hover:bg-[#1e1e2f] hover:text-[#e8e9fa] cursor-pointer 
                 text-[14px]
              "
              >
                {item}
              </div>
            ))}
            <AddPassionDialog />
          </div>
        </div>

        <div className="w-[400px]">
          <div className="flex flex-col justify-start items-start">
            <label
              className={`${lableTextStyle}  ${
                theme.theme !== "light" && "text-[#f1f1f1]"
              } `}
            >
              Social Media
            </label>
            <div className="flex flex-row flex-wrap w-full justify-start items-center mt-5">
              <SocialMediaItem
                title="Facebook"
                name="facebook"
                onChange={handleSocialMediaChange}
                value={about.social_links?.facebook}
                placeholder="Facebook"
              />
              <SocialMediaItem
                title="Twitter"
                name="twitter"
                onChange={handleSocialMediaChange}
                value={about.social_links?.twitter}
                placeholder="Twitter"
              />
              <SocialMediaItem
                title="Instagram"
                name="instagram"
                onChange={handleSocialMediaChange}
                value={about.social_links?.instagram}
                placeholder="Instagram"
              />
              <SocialMediaItem
                title="LinkedIn"
                name="linkedin"
                onChange={handleSocialMediaChange}
                value={about.social_links?.linkedin}
                placeholder="LinkedIn"
              />
              <SocialMediaItem
                title="GitHub"
                name="github"
                onChange={handleSocialMediaChange}
                value={about.social_links?.github}
                placeholder="GitHub"
              />
              <SocialMediaItem
                title="StackOverflow"
                name="stackoverflow"
                onChange={handleSocialMediaChange}
                value={about.social_links?.stackoverflow}
                placeholder="StackOverflow"
              />

              {about.social_links?.others?.map((item, index) => (
                <SocialMediaItem
                  title={item?.title}
                  name={item?.name}
                  onChange={handleSocialMediaChange}
                  value={item?.link}
                  placeholder={item?.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </WrapperContent>
  );
}

export default AdminAbout;
