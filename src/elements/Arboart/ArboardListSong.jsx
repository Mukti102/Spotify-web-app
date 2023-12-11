import React, { useEffect, useRef, useState } from "react";
import PlayButton from "../Play/PlayButton";
import HeaderListSong from "../Lists/ListArboardSong";
import CardPlaylist from "../../Atoms/Card/CardPlaylist";
import CardLoad from "../../Atoms/Card/CardLoad";
import useAppStore from "../../zustand/StoreApp";
function ArboardListSong({ Loading }) {
  const playlistsItem = useAppStore((state) => state.track);
  return (
    <div className="w-full text-[#ccc] mt-10 bg-black bg-opacity-10 min-h-screen px-6 pt-8">
      {/* Play button playlist */}
      <PlayButton />
      {/* List song from playlists */}
      <HeaderListSong />
      {Loading ? (
        <CardLoad />
      ) : (
        playlistsItem?.map((item, index) => {
          return <CardPlaylist item={item} key={index} index={index} />;
        })
      )}
    </div>
  );
}

export default ArboardListSong;
