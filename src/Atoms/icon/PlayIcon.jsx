import React from "react";
import { IoPlaySharp } from "react-icons/io5";
function PlayIcon({ width, height, fontSize }) {
  return (
    <div
      className={`w-[${width}] h-[${height}] bg-green-500 flex justify-center items-center rounded-full cursor-pointer`}
    >
      <IoPlaySharp className={`text-${fontSize} text-black`} />
    </div>
  );
}

export default PlayIcon;
