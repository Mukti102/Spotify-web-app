import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";

function HeaderListSong() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between text-sm font-light mt-5 px-3 py-1 items-center">
        <div className="flex items-center  gap-3 w-1/3">
          <div className="text-base">#</div>
          <div className="flex items-center gap-3 w-max">
            <div className=" overflow-hidden rounded-md">Title</div>
          </div>
        </div>
        <div className="text-[13px]  text-start  w-1/3">Album</div>
        <div className="w-10 flex justify-start text-lg">
          <MdOutlineWatchLater />
        </div>
      </div>
      <hr className="border-[0.1px] border-slate-700 mt-1" />
    </div>
  );
}

export default HeaderListSong;
