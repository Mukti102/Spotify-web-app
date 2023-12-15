import React from "react";
import { IoVolumeHighOutline } from "react-icons/io5";
import "./PlayTrack.css";
function Volume({ audioRef }) {
  const handleVolumeChange = (e) => {
    // Update the volume of the audio element
    if (audioRef.current) {
      audioRef.current.volume = e.target.value;
    }
  };

  const volumeStyle = {
    background: `linear-gradient(to right,#fff ${
      audioRef.current.volume * 100
    }%,#444 ${audioRef.current.volume}%)`,
  };

  return (
    <div className="w-[30%] gap-2 flex justify-end pr-5 items-center">
      <div className="text-white text-lg">
        <IoVolumeHighOutline />
      </div>
      <input
        type="range"
        value={audioRef.current.volume}
        className="volume"
        style={volumeStyle}
        min={0}
        step={0.01}
        max={1}
        onChange={handleVolumeChange}
      />
    </div>
  );
}

export default Volume;
