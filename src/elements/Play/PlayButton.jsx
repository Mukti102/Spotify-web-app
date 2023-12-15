import React from "react";
import { useState } from "react";
import { IoPlaySharp } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { RiListCheck } from "react-icons/ri";
function PlayButton() {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <div className="flex justify-between items-center">
      <div className="w-[57px] h-[57px] bg-green-500 flex justify-center items-center rounded-full cursor-pointer">
        <IoPlaySharp className="text-2xl text-black" />
      </div>
      <div className=" flex gap-2 items-center ">
        <div
          className={`target cursor-pointer ${
            isSearch ? "w-48" : "w-max bg-transparent"
          } bg-slate-100  bg-opacity-20 px-2 py-[5px] rounded-sm transition-all delay-200`}
        >
          {isSearch ? (
            <div className="flex items-center gap-2 w-full h-full transition-all delay-200">
              <LuSearch
                className="text-lg"
                onClick={() => setIsSearch(!isSearch)}
              />
              <input
                type="text"
                placeholder="Search Your playlist...."
                className="bg-transparent outline-none placeholder:font-normal font-normal w-full h-full text-[12px]"
              />
            </div>
          ) : (
            <LuSearch onClick={() => setIsSearch(!isSearch)} />
          )}
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <h1 className="text-sm font-medium">Title</h1>
          <RiListCheck className="text-xl" />
        </div>
      </div>
    </div>
  );
}

export default PlayButton;
