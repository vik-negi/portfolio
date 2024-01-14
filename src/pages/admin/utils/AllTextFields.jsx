import React from "react";
import create from "../../../utils/Theme";

const AllTextFields = ({
  title,
  value,
  placeholder,
  textArea,
  name,
  lines,
  classs,
  isCheckBox = false,
  isFullWidth = false,
  isSelect = false,
  size,
  onChange = () => {},
}) => {
  const theme = create();

  const options = ["Bignner", "Intermediate", "Advanced", "Expert"];
  return (
    <div
      className={`flex w-full ${
        isCheckBox === true && isFullWidth === false ? "flex-row" : "flex-col"
      }  justify-start items-start mb-10 ${classs}`}
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
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
          className={`w-full h-[${
            size != null ? size : "45px"
          }] rounded-[10px] text-[13px] border-[1px]  border-[#e8e9fa] outline-none px-4 mt-2 ${
            theme.theme === "light" ? "text-[#1e1e2f]" : "text-white"
          } `}
        >
          {options.map((item, index) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      )}

      {(value || value == "") && !isSelect && (
        <input
          onChange={(e) => onChange(e.target.value)}
          name={name}
          value={value}
          type={isCheckBox ? "checkbox" : "text"}
          className={`w-full h-[${
            size != null ? size : "45px"
          }] rounded-[10px] text-[13px] border-[1px]  border-[#e8e9fa] outline-none px-4 mt-2 ${
            theme.theme === "light" ? "text-[#1e1e2f]" : "text-white"
          } ${theme.theme === "light" ? "bg-white" : "bg-[#1e1e2f]"}`}
          placeholder={placeholder}
        />
      )}
      {textArea && (
        <textarea
          type="text"
          name={name}
          onChange={(e) => onChange(e)}
          rows={lines || 6}
          className={`w-full rounded-[10px] text-[13px] border-[1px]  border-[#e8e9fa] outline-none px-4 py-2 mt-2 ${
            theme.theme === "light" ? "text-[#1e1e2f]" : "text-white"
          } ${theme.theme === "light" ? "bg-white" : "bg-[#1e1e2f]"}`}
          placeholder={placeholder}
          value={textArea}
        />
      )}
    </div>
  );
};

export default AllTextFields;
