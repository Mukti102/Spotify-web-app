import React, { useEffect, useState, useRef } from "react";
import { IoPlaySharp } from "react-icons/io5";
import useAppStore from "../../zustand/StoreApp";

function CardPlaylist({ item, index }) {
  const [cardHover, setCardHover] = useState(false);
  const getTracks = useAppStore((state) => state.getTracks);
  const handleClick = useAppStore((state) => state.getCardTarget);
  const handleName = (name) => {
    const names = name;
    if (names.length > 15) {
      return `${names.slice(0, 15)}...`;
    } else {
      return names;
    }
  };

  const miliSecondToMinute = (sm) => {
    const minute = Math.floor(sm / 60000);
    const second = Math.floor((sm % 60000) / 1000).toFixed(0);
    return `${minute}:${second < 10 ? "0" : ""}${second}`;
  };

  const Mousenter = () => {
    setCardHover(true);
  };

  const MouseLeave = () => {
    setCardHover(false);
  };

  return (
    <>
      <div
        className="group w-full flex justify-between text-sm font-light mt-1 px-3 hover:bg-[#fff] hover:bg-opacity-10 py-2 items-center rounded-md"
        onMouseEnter={Mousenter}
        onMouseLeave={MouseLeave}
      >
        <div className="flex items-center gap-3 w-1/3">
          <div className={"text-[15px] font-medium w-4 h-4 text-center"}>
            {cardHover ? (
              <IoPlaySharp
                className="text-white text-lg cursor-pointer"
                onClick={() => handleClick(item)}
              />
            ) : (
              index + 1
            )}
          </div>
          <div className="flex gap-3 w-max">
            <div className="w-12 h-12 bg-black overflow-hidden rounded-md">
              <img
                src={
                  item
                    ? item.image.url
                    : "https://k-gen.fr/wp-content/uploads/2018/04/blackpink-boombayah-300millions-1366x768.png"
                }
                alt="item"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-around">
              <h1 className="font-medium text-[15px] text-white">
                {handleName(item.name)}
              </h1>
              <h2 className="font-medium text-[13px] text-[#bbb] group-hover:text-white">
                {item.artists[0]}
              </h2>
            </div>
          </div>
        </div>
        <div className="text-[13px] text-[#bbb] font-medium group-hover:text-white w-1/3">
          {item.album}
        </div>
        <div className="w-10 flex justify-start">
          {miliSecondToMinute(item.duration)}
        </div>
      </div>
    </>
  );
}

export default CardPlaylist;
