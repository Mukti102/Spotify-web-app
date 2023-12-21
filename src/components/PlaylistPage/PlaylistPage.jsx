import React from "react";
import Thumbnail from "../../elements/Thumbnail/Thumbnail";
import ArboardListSong from "../../elements/Arboart/ArboardListSong";
import Icon from "../../Atoms/icon/Icon";
import Profile from "../../Atoms/icon/Profile";
import useAppStore from "../../zustand/StoreApp";
function PlaylistPage({ isLoading }) {
  const tracks = useAppStore((state) => state.track);
  return (
    <div className="w-full h-full overflow-y-auto scroll-bar">
      <div className="w-full flex justify-between items-center pr-5 py-2">
        <Icon />
        <Profile />
      </div>
      <Thumbnail />
      <ArboardListSong Loading={isLoading} tracks={tracks} />
    </div>
  );
}

export default PlaylistPage;
