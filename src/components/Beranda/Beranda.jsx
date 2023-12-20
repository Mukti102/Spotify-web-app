import React, { useState } from "react";
import Icon from "../../Atoms/icon/Icon";
import Profile from "../../Atoms/icon/Profile";
import useAppStore from "../../zustand/StoreApp";
import { NavLink } from "react-router-dom";
import { IoPlaySharp } from "react-icons/io5";
import time from "../../Functions/getCurrentTime";
function Beranda() {
  const playlists = useAppStore((state) => state.playlists);
  const getTarget = useAppStore((state) => state.getCardTarget);
  const [hover, setHover] = useState(false);
  const handleClick = (item) => {
    console.log(item);
  };
  return (
    <>
      <div className="items-center pr-5 w-full  flex justify-between">
        <Icon />
        <Profile />
      </div>
      <div className="w-full text-start px-5">
        <h1 className="text-white text-2xl  font-bold">{time()}</h1>
        <div className="w-full flex items-center gap-3 flex-wrap mt-3">
          {playlists?.map((item, index) => {
            return (
              <NavLink
                // to={`/spotify/playlist/${item.id}`}
                key={index}
                className="group  w-[48%] h-14 flex items-center bg-[#333] rounded-md overflow-hidden gap-2 relative hover:bg-[#555]"
              >
                <div className="w-14 h-full">
                  <img
                    src={item?.images[0].url}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-white font-semibold text-[15px]">
                  <h1>{item.name}</h1>
                </div>
                <div
                  onClick={() => handleClick(item)}
                  className={`w-9 h-9 shadow-xl absolute right-3 rounded-full bg-green-500 text-black hidden group-hover:flex justify-center items-center text-lg`}
                >
                  <IoPlaySharp />
                </div>
                <div></div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Beranda;
