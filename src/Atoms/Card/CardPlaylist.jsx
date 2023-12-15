import React, { useEffect, useState, useRef } from "react";
import { IoPlaySharp } from "react-icons/io5";
import useAppStore from "../../zustand/StoreApp";
import { IoPauseSharp } from "react-icons/io5";
import HandleName from "../../Functions/HandleName";
import MilisecondToMinute from "../../Functions/MilisecondToMinute";
import AudioAnimation from "../../components/audioAnimation/AudioAnimation";
function CardPlaylist({ item, index }) {
  const [cardHover, setCardHover] = useState(false);
  const cardTarget = useAppStore((state) => state.cardTarget);
  const handleClick = useAppStore((state) => state.getCardTarget);
  const [cardActive, setCardActive] = useState("");
  const playing = useAppStore((state) => state.playing);
  const setPlaying = useAppStore((state) => state.setPlaying);

  useEffect(() => {
    const active = cardTarget?.id == item.id;
    setCardActive(active);
  }, [cardTarget]);

  const Mousenter = () => {
    setCardHover(true);
  };

  const MouseLeave = () => {
    setCardHover(false);
  };

  const handleHover = () => {
    if (cardHover) {
      if (cardActive && !playing) {
        return <AudioAnimation />;
      } else if (cardActive && playing) {
        return (
          <IoPlaySharp
            className="text-white text-lg cursor-pointer"
            onClick={() => handleClick(item)}
          />
        );
      } else if (!cardActive) {
        return (
          <IoPlaySharp
            className="text-white text-lg cursor-pointer"
            onClick={() => handleClick(item)}
          />
        );
      }
    } else {
      if (cardActive && !playing) {
        return <AudioAnimation />;
      } else {
        return (
          // <IoPlaySharp
          //   className="text-white text-lg cursor-pointer"
          //   onClick={() => handleClick(item)}
          // />
          index + 1
        );
      }
    }
  };

  return (
    <>
      <div
        className={`group w-full flex justify-between text-sm font-light mt-1 px-3 hover:bg-[#fff] hover:bg-opacity-10 py-2 items-center rounded-md ${
          cardActive ? "bg-slate-100 bg-opacity-10" : "bg-none"
        }`}
        onMouseEnter={Mousenter}
        onMouseLeave={MouseLeave}
      >
        <div className="flex items-center gap-3 w-1/3">
          <div
            className={`text-[15px] font-medium w-4 h-4 text-center   relative ${
              cardActive ? "text-green-500" : "text-base"
            }`}
          >
            {handleHover(cardActive, cardHover, playing)}
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
              <h1
                className={`text-start font-medium text-[15px] ${
                  cardActive ? "text-green-500" : "text-white"
                }`}
              >
                {HandleName(item.name)}
              </h1>
              <h2 className="text-start font-medium text-[13px] text-[#bbb] group-hover:text-white">
                {item.artists[0]}
              </h2>
            </div>
          </div>
        </div>
        <div className="text-[13px] text-[#bbb] font-medium group-hover:text-white text-start w-1/3">
          {item.album}
        </div>
        <div className="w-10 flex justify-start">
          {MilisecondToMinute(item.duration)}
        </div>
      </div>
    </>
  );
}

export default CardPlaylist;
