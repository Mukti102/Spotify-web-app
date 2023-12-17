import React, { useEffect, useState } from "react";
import "./Hero.css";
import { Outlet, useParams } from "react-router";
import useAppStore from "../../zustand/StoreApp";

function Hero() {
  const params = useParams();
  const playlists = useAppStore((state) => state.playlists);
  const getPlaylistsItem = useAppStore((state) => state.getItemPlaylist);
  const playlist = useAppStore((state) => state.playlist);
  const cardTarget = useAppStore((state) => state.cardTarget);
  const [isLoading, setIsLoading] = useState(false);
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
  }, [id]);
  return (
    <div
      className={`flex-auto h-full rounded-lg  ${
        id ? "gradient" : "bg-[#111]"
      } overflow-hidden pt-1 pb-3  ${cardTarget ? "w-[60%]" : "w-[60%]"}`}
    >
      <Outlet />
    </div>
  );
}
export default Hero;
