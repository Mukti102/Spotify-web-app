import React, { useEffect, useState } from "react";
import "./Hero.css";
import { useParams } from "react-router";
import useAppStore from "../../zustand/StoreApp";
import Thumbnail from "../../elements/Thumbnail/Thumbnail";
import Icon from "../../Atoms/icon/Icon";
import ArboardListSong from "../../elements/Arboart/ArboardListSong";

function Hero() {
  const params = useParams();
  const playlists = useAppStore((state) => state.playlists);
  const getPlaylistsItem = useAppStore((state) => state.getItemPlaylist);
  const playlist = useAppStore((state) => state.playlist);
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);
  const id = params.id;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await getPlaylistsItem(
          `https://api.spotify.com/v1/playlists/${id}`,
          `https://api.spotify.com/v1/playlists/${id}/tracks`
        );
        if (res) {
          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(true);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [params]);
  return (
    <div className=" flex-1  h-full rounded-xl gradient overflow-hidden pb-3 pt-0">
      <div className="w-full h-full overflow-y-auto scroll-bar">
        <Icon />
        <Thumbnail />
        <ArboardListSong Loading={isLoading} />
      </div>
    </div>
  );
}
export default Hero;
