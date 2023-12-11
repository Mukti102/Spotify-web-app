import React from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
function Icon() {
  return (
    <div className="w-full flex px-3 pt-4">
      <div className="flex gap-1">
        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-black bg-opacity-50">
          <GrPrevious className="text-white" />
        </div>
        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-black bg-opacity-50">
          <GrNext className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default Icon;
