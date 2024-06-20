import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchArticle = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute translate-x-6 translate-y-[14px]">
          <FiSearch color="#FFB10A" size="30px"></FiSearch>
        </div>
        <input
          type="text"
          placeholder="Cari"
          className="border-2 border-slate-400 focus:border-primary/50 focus:outline-none w-full py-4 px-16 rounded-lg text-md"
        />
      </div>
    </>
  );
};

export default SearchArticle;
