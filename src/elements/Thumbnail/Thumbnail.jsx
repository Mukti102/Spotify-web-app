import React from "react";
import useAppStore from "../../zustand/StoreApp";
function Thumbnail() {
  const playlist = useAppStore((state) => state.playlist);
  return (
    <div className="w-full h-max  items-center px-4  flex gap-1 mt-10">
      <div className="w-72 h-[210px] rounded-[4px] shadow-lg  overflow-hidden">
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
          <h3 className="text-[13px] font-light text-[#ddd]">
            Public Playlist
          </h3>
          <h1 className="text-7xl text-white font-bold">{playlist.name}</h1>
          <h2 className="text-white text-sm font-medium">
            ABDUL MUKTI •{" "}
            <span className="text-sm">
              {/* {playlist ? playlist.tracks.length : "0"} songs, 20min, 6sec */}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
