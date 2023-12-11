import React, { useEffect, useRef, useState } from "react";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { IoPlaySharp, IoPauseSharp } from "react-icons/io5";
import useAppStore from "../../zustand/StoreApp";
import "./PlayTrack.css";
function PlayTarck() {
  const cardTarget = useAppStore((state) => state.cardTarget);
  const [currentValue, setCurrentValue] = useState(50);
  const [inputHover, setInputHover] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(new Audio());
  const handleInputChange = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentValue(newValue);
  };

  useEffect(() => {
    audioRef.current.src = cardTarget.preview_Url;
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    setPlaying(true);
    return () => {
      // Clean up event listener when the component is unmounted
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [cardTarget]);

  const handleTimeUpdate = () => {
    // Update currentTime when the timeupdate event is triggered
    setCurrentTime(audioRef.current.currentTime);
  };

  function hitungPersentase(nilaiAwal, nilaiDitentukan) {
    return (nilaiAwal / nilaiDitentukan) * 100;
  }
  const play = () => {
    if (audioRef.current.src == "http://localhost:5173/playlist/null") return;
    else {
      setPlaying(!playing);
    }
    if (playing) {
      audioRef.current.play();
      //   audioRef.current.play();
    } else {
      audioRef.current.pause();
      //   audioRef.current.pause();
    }
  };
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

  const miliSecondToMinute = (sm) => {
    const minute = Math.floor(sm / 60000);
    const second = Math.floor((sm % 60000) / 1000).toFixed(0);
    return `${minute}:${second < 10 ? "0" : ""}${second}`;
  };

  const hoverEnter = (condition) => {
    setInputHover(condition);
  };
  return (
    <>
      <div className="w-full  py-2 px-2 bg-black h-[15%] flex justify-between">
        <div className="w-[30%] items-center pl-2 flex gap-2">
          <div className="w-16 h-16 rounded-md overflow-hidden">
            <img
              src={
                cardTarget
                  ? cardTarget.image.url
                  : "https://k-gen.fr/wp-content/uploads/2018/04/blackpink-boombayah-300millions-1366x768.png"
              }
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <h1 className="text-white text-sm">{cardTarget.artists[0]}</h1>
            <h2 className="text-[12px] text-[#ccc] font-light">
              {cardTarget.name}
            </h2>
          </div>
        </div>
        <div className="w-[60%] flex gap-2 flex-col translate-y-1 justify-center items-center">
          <div className="w-full flex justify-center">
            <div className="flex gap-3 items-center">
              <button className="w-max h-max rounded-full items-center flex justify-center text-[#aaaa] text-4xl ">
                <BiSkipPrevious />
              </button>
              <button
                className="w-max p-2 h-max bg-white rounded-full justify-center items-center flex text-xl hover:scale-105"
                onClick={play}
              >
                {playing ? <IoPlaySharp /> : <IoPauseSharp />}
              </button>
              <button className="w-max h-max rounded-full items-center flex justify-center text-[#aaaa] text-4xl ">
                <BiSkipNext />
              </button>
            </div>
          </div>
          <div className="flex gap-2 items-center w-[80%]">
            <h2 className="text-[11px] text-[#dddd] font-light">
              {audioRef.current.value}
            </h2>
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
            <h2 className="text-[11px] text-[#dddd] font-light">
              {miliSecondToMinute(
                cardTarget.duration - audioRef.current.currentTime
              )}
            </h2>
          </div>
          <div></div>
        </div>
        <div className="w-[30%]"></div>
      </div>
    </>
  );
}

export default PlayTarck;
