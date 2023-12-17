import React from "react";
import Thumbnail from "../../elements/Thumbnail/Thumbnail";
import ArboardListSong from "../../elements/Arboart/ArboardListSong";
import Icon from "../../Atoms/icon/Icon";
function PlaylistPage({ isLoading }) {
  return (
    <div className="w-full h-full overflow-y-auto scroll-bar">
      <div className="w-full flex justify-between px-0 py-2">
        <Icon />
      </div>
      <Thumbnail />
      <ArboardListSong Loading={isLoading} />
    </div>
  );
}

export default PlaylistPage;
