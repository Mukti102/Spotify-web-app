import React from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
function Icon() {
  return (
    <div className="w-max flex items-center px-3 pt-4">
      <div className="flex -translate-y-2 gap-1">
        <div className="w-8 h-8  flex justify-center items-center rounded-full bg-[#000] bg-opacity-50 hover:bg-opacity-40 cursor-pointer">
          <GrPrevious className="text-white" />
        </div>
        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-[#000] bg-opacity-50 hover:bg-opacity-40 cursor-pointer">
          <GrNext className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default Icon;
