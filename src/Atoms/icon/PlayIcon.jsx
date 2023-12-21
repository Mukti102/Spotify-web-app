import React from "react";
import useAppStore from "../../zustand/StoreApp";
import { IoPlaySharp, IoPauseSharp } from "react-icons/io5";
function PlayIcon({ width, height, fontSize, tracks }) {
  const setPlaying = useAppStore((state) => state.setPlaying);
  const playing = useAppStore((state) => state.playing);
  const cardTarget = useAppStore((state) => state.cardTarget);
  const find = tracks?.some((track) => track.id === cardTarget?.id);
  return (
    <div
      className={`w-[${width}] h-[${height}] bg-green-500 flex justify-center items-center rounded-full cursor-pointer`}
      onClick={() => setPlaying(!playing)}
    >
      {!playing && find ? (
        <IoPauseSharp className={`text-${fontSize} text-black`} />
      ) : (
        <IoPlaySharp className={`text-${fontSize} text-black`} />
      )}
    </div>
  );
}

export default PlayIcon;
