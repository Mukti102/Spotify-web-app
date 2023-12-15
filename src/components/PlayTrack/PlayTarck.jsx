import React, { useEffect, useRef, useState } from "react";
import Volume from "./Volume";
import SongControl from "./SongControl";
import useAppStore from "../../zustand/StoreApp";
import Player from "./Player";
import "./PlayTrack.css";
function PlayTarck() {
  const cardTarget = useAppStore((state) => state.cardTarget);
  const [currentValue, setCurrentValue] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  // const [playing, setPlaying] = useState(false);
  const audioRef = useRef(new Audio());
  const setPlaying = useAppStore((state) => state.setPlaying);
  const playing = useAppStore((state) => state.playing);

  const handleInputChange = (e) => {
    audioRef.current.currentTime = e.target.value;
    // setCurrentValue(e.target.value);
  };

  useEffect(() => {
    audioRef.current.src = cardTarget?.preview_Url;
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    // setPlaying(!playing);
    play(playing);
    return () => {
      // Clean up event listener when the component is unmounted
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [cardTarget]);

  // memutar audio bila audio di ganti
  useEffect(() => {
    play(false);
    play(playing);
  }, [setPlaying]);

  const handleTimeUpdate = () => {
    // Update currentTime when the timeupdate event is triggered
    setCurrentTime(audioRef.current.currentTime);
  };

  // fungsi memutar audio
  const play = (playing) => {
    setPlaying(!playing);
    if (audioRef.current.src == "http://localhost:5173/playlist/null") {
      setPlaying(false);
    } else {
      setPlaying(!playing);
      if (playing) {
        audioRef.current.play();
        //   audioRef.current.play();
      } else {
        audioRef.current.pause();
        //   audioRef.current.pause();
      }
    }
  };

  // handle ketika lagu sudah selesai
  audioRef.current.addEventListener("ended", () => {
    play(false);
  });

  if (cardTarget == null) {
    return <div className="w-full h-[15%] bg-black"></div>;
  } else {
    return (
      <div className="w-full  py-2 px-2 bg-black h-[15%] flex justify-between">
        <Player cardTarget={cardTarget} />
        <SongControl
          audioRef={audioRef}
          play={play}
          handleInputChange={handleInputChange}
        />
        <Volume audioRef={audioRef} />
      </div>
    );
  }
}

export default PlayTarck;
