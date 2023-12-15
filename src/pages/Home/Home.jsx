import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router";
import Hero from "../../components/Hero/Hero";
import SongDetail from "../../components/SongDetail/SongDetail";
import useAppStore from "../../zustand/StoreApp";
import PlayTarck from "../../components/PlayTrack/PlayTarck";

function Home() {
  const getPlaylists = useAppStore((state) => state.getPlaylist);
  const token = useAppStore((state) => state.token);
  const setLoading = useAppStore((state) => state.setLoading);
  const loading = useAppStore((state) => state.loading);
  const playlists = useAppStore((state) => state.playlists);
  const tracks = useAppStore((state) => state.tracks);
  const cardTarget = useAppStore((state) => state.cardTarget);

  return (
    <div className="h-screen">
      <div className="flex h-[85%] pt-3 px-1 gap-2">
        <Sidebar />
        <Hero />
        {cardTarget !== null && <SongDetail />}
      </div>
      <PlayTarck />
    </div>
  );
}

export default Home;
