import React, { useState } from "react";
import PlayButton from "../Play/PlayButton";
import HeaderListSong from "../Lists/ListArboardSong";
import CardPlaylist from "../../Atoms/Card/CardPlaylist";
import CardLoad from "../../Atoms/Card/skeleton/CardLoad";
import useAppStore from "../../zustand/StoreApp";
function ArboardListSong({ Loading, tracks }) {
  const playlistsItem = useAppStore((state) => state.track);
  const [inputSearch, setInputSearch] = useState("");
  const inputChange = (e) => {
    setInputSearch(e.target.value);
  };
  const playlists = playlistsItem?.filter((item) =>
    item.name.toLowerCase().includes(inputSearch.toLowerCase())
  );
  return (
    <div className="w-full text-[#ccc] mt-10 bg-black bg-opacity-10 min-h-screen px-6 pt-8">
      {/* Play button playlist */}
      <PlayButton
        tracks={tracks}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        inputChange={inputChange}
      />
      {/* List song from playlists */}
      <HeaderListSong />
      {Loading ? (
        <CardLoad />
      ) : (
        playlists?.map((item, index) => {
          return <CardPlaylist item={item} key={index} index={index} />;
        })
      )}
    </div>
  );
}

export default ArboardListSong;
