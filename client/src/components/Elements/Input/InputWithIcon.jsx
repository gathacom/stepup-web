import React, { useState } from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const InputWithIcon = ({ icon, placeholder, id, name, type }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="relative">
        <label
          htmlFor={id}
          className="absolute translate-x-6 translate-y-[14px]"
        >
          {icon == "search" && <FiSearch color="#FFB10A" size="30px" />}
          {icon == "user" && <FiUser color="#FFB10A" size="30px" />}
          {icon == "mail" && <HiOutlineMail color="#FFB10A" size="30px" />}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className="border-2 border-slate-400 focus:border-primary/50 focus:outline-none w-full py-4 px-16 rounded-lg text-md"
          name={name}
          id={id}
          onChange={handleChange}
          value={value}
        />
      </div>
    </>
  );
};

export default InputWithIcon;
