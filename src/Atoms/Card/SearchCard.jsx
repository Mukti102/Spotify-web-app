import React from "react";
import PlayIcon from "../icon/PlayIcon";
import useAppStore from "../../zustand/StoreApp";
import HandleName from "../../Functions/HandleName";
function SearchCard({ image, name, id, preview_url, artists, item }) {
  const handleClick = useAppStore((state) => state.getCardTarget);
  return (
    <div className="group w-52 h-72 p-4 bg-[#b3a0a011] hover:bg-[#222] rounded-lg flex flex-col gap-2">
      <div className="relative w-full h-48 overflow-hidden rounded-lg shadow-xl">
        <img src={image.url} alt="" className="w-full h-full object-cover" />
        <div
          className="absolute scale-0  group-hover:scale-100 transition-all delay-100  bottom-3 right-3  w-max h-max"
          onClick={() => handleClick(item)}
        >
          <PlayIcon height={"50px"} width={"50px"} fontSize={"2xl"} />
        </div>
      </div>
      <div className="">
        <h1 className="text-base font-semibold text-white">
          {HandleName(name)}
        </h1>
        <h2 className="text-[13px] font-medium text-[#ccc]">{artists[0]}</h2>
      </div>
    </div>
  );
}

export default SearchCard;
