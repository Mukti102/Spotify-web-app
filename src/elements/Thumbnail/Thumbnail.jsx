import React from "react";
import useAppStore from "../../zustand/StoreApp";
import MilisecondToMinute from "../../Functions/MilisecondToMinute";
import "../../components/Sidebar/Sidebar.css";
import logo from "../../assets/logo.png";
function Thumbnail() {
  const tracks = useAppStore((state) => state.track);
  const playlist = useAppStore((state) => state.playlist);
  const cardTarget = useAppStore((state) => state.cardTarget);
  const entireMinutes = tracks?.reduce(
    (acumulator, currentvalue) => acumulator + currentvalue.duration,
    0
  );
  return (
    <div className="w-full h-max  items-center px-4  flex gap-1 mt-3">
      <div className="w-72 h-[210px] rounded-[4px] shadow-lg   overflow-hidden">
        <img
          src={
            playlist
              ? playlist.image
              : "https://k-gen.fr/wp-content/uploads/2018/04/blackpink-boombayah-300millions-1366x768.png"
          }
          alt="picyure"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col pb-0  justify-center w-full h-[200px]">
        <div className="flex gap-3 justify-end  h-full px-3 flex-col">
          <h3 className="text-[13px] font-light text-start text-[#ddd]">
            Public Playlist
          </h3>
          <h1
            className={`${
              cardTarget ? "text-5xl" : "text-7xl"
            } text-white font-bold text-start`}
          >
            {playlist.name}
          </h1>
          <p className="text-[#bbb] font-normal text-[12px] text-start w-[75%]">
            {playlist.description}
          </p>
          <h2 className="text-start text-white flex items-center text-sm font-medium">
            <span className="flex items-center mr-1">
              <img src={logo} alt="logo" className="w-10" />
              Spotify •{" "}
            </span>
            <span className="text-sm">
              {tracks == null ? "0" : tracks?.length} Lagu, sekitar{" "}
              {MilisecondToMinute(entireMinutes).split(":")[0]} menit,{" "}
              {MilisecondToMinute(entireMinutes).split(":")[1].substring(1)}{" "}
              detik
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
