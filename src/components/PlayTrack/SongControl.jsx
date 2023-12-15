import React, { useState } from "react";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { IoPlaySharp, IoPauseSharp } from "react-icons/io5";
import useAppStore from "../../zustand/StoreApp";
function SongControl({ audioRef, play, handleInputChange }) {
  const [inputHover, setInputHover] = useState(false);
  const playing = useAppStore((state) => state.playing);

  // handle ketika audio track di hover
  const hoverEnter = (condition) => {
    setInputHover(condition);
  };

  //fungsi menemukan persentase dari sebuah angka yang sudah ditentukan
  function hitungPersentase(nilaiAwal, nilaiDitentukan) {
    return (nilaiAwal / nilaiDitentukan) * 100;
  }
  // style progres audio
  const myStyle = {
    background: `linear-gradient(to right,${
      inputHover ? "rgb(34 197 94)" : "white"
    } ${hitungPersentase(
      audioRef.current.currentTime.toFixed("."),
      30
    )}%, #444 ${hitungPersentase(
      audioRef.current.currentTime.toFixed("."),
      30
    )}%)`,
  };

  return (
    <div className="w-[60%] flex gap-1 flex-col translate-y-1 justify-center items-center">
      <div className="w-full  flex justify-center">
        <div className="flex gap-3 items-center">
          <button className="w-max h-max rounded-full items-center flex justify-center text-[#aaaa] text-4xl ">
            <BiSkipPrevious />
          </button>
          <button
            className="w-max p-2 h-max bg-white rounded-full justify-center items-center flex text-xl hover:scale-105"
            onClick={() => play(playing)}
          >
            {playing ? <IoPlaySharp /> : <IoPauseSharp />}
          </button>
          <button className="w-max h-max rounded-full items-center flex justify-center text-[#aaaa] text-4xl ">
            <BiSkipNext />
          </button>
        </div>
      </div>
      <div className="flex gap-2 pb-1 items-center w-[80%]">
        <div className="w-5 h-5  text-center flex items-center justify-center">
          <h2 className="text-[11px] text-[#dddd] font-light">
            0:{audioRef.current.currentTime.toFixed(".")}
          </h2>
        </div>
        <input
          min={0}
          max={audioRef.current.duration}
          style={myStyle}
          className="track-play"
          value={audioRef.current.currentTime}
          type="range"
          onChange={handleInputChange}
          onMouseEnter={() => hoverEnter(true)}
          onMouseLeave={() => hoverEnter(false)}
        />
        <div className="w-5 h-5 flex justify-center items-center">
          <h2 className="text-[11px] text-[#dddd] font-light">
            0:
            {(audioRef.current.duration - audioRef.current.currentTime).toFixed(
              "."
            )}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SongControl;
