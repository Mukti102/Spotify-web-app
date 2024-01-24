import React from "react";
import PlayIcon from "../icon/PlayIcon";
import HandleName from "../../Functions/HandleName";
import { Link } from "react-router-dom";
function CardFeaturedPlaylist(item) {
  //   console.log(item);
  return (
    <Link
      to={`/spotify/playlist/${item.id}`}
      className="group w-52 h-72 p-4 bg-[#e5cccc11] hover:bg-[#333] rounded-lg flex flex-col gap-2"
    >
      <div className="relative w-full h-48 overflow-hidden rounded-lg shadow-xl">
        <img
          src={item.images[0].url}
          alt=""
          className="w-full h-full object-cover"
        />
        <div
          className="absolute scale-0  group-hover:scale-100 transition-all delay-100  bottom-3 right-3  w-max h-max"
          //   onClick={() => handleClick(item)}
        >
          <PlayIcon height={"50px"} width={"50px"} fontSize={"2xl"} />
        </div>
      </div>
      <div className="text-start">
        <h1 className="text-base font-semibold text-white">
          {HandleName(item.name, 20)}
        </h1>
        <h2 className="text-[11px] font-medium text-[#aaa]">
          {HandleName(item.description, 30)}
        </h2>
      </div>
    </Link>
  );
}

export default CardFeaturedPlaylist;
