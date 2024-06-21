import React from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const InputWithIcon = ({ icon, placeholder, id, name }) => {
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
          type="text"
          placeholder={placeholder}
          className="border-2 border-slate-400 focus:border-primary/50 focus:outline-none w-full py-4 px-16 rounded-lg text-md"
          name={name}
          id={id}
        />
      </div>
    </>
  );
};

export default InputWithIcon;
