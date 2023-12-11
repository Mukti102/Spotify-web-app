import React, { useState } from "react";
import { useEffect } from "react";
import useAppStore from "../../zustand/StoreApp";
import { BiLibrary } from "react-icons/bi";
import { GrLinkNext } from "react-icons/gr";
import { LuSearch } from "react-icons/lu";
import { HiMiniListBullet } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import PlaylistsLoad from "../../Atoms/Card/PlaylistsLoad";
import "./Sidebar.css";
function Sidebar() {
  const getPlaylists = useAppStore((state) => state.getPlaylist);
  const playlists = useAppStore((state) => state.playlists);
  const Loading = useAppStore((state) => state.loading);
  const token = useAppStore((state) => state.token);
  const setLoading = useAppStore((state) => state.setLoading);
  useEffect(() => {
    const getDataPlayLists = async () => {
      setLoading(true);
      try {
        const res = await getPlaylists(
          "https://api.spotify.com/v1/me/playlists"
        );
        if (res) {
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(true);
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      getDataPlayLists();
    }
  }, [token, getPlaylists]);
  return (
    <>
      <div className="flex-initial pl-2 pr-3 py-3 h-full text-white bg-[#111] rounded-xl ">
        <div className="w-full px-1 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <BiLibrary className="text-2xl" />
              <h1 className="text-[16px] font-semibold">Your Library</h1>
            </div>
            <div>
              <GrLinkNext className="text-xl" />
            </div>
          </div>
          <button className="w-20 rounded-2xl py-1 text-sm text-white bg-black">
            Playlist
          </button>
        </div>
        <div className="w-full px-1 bg-[#0000] overflow-x-auto">
          <div className="flex px-0 items-center justify-between pt-4">
            <div>
              <LuSearch className="text-lg" />
            </div>
            <div className="flex items-center gap-1">
              <h1 className="text-sm">Recents</h1>
              <HiMiniListBullet className="text-lg" />
            </div>
          </div>
          {Loading ? (
            <PlaylistsLoad />
          ) : (
            playlists?.map((item, index) => {
              return (
                <NavLink
                  // className="text-white"
                  to={`/playlist/${item.id}`}
                  key={index}
                >
                  <div className="w-full h-[60px] mt-2 flex items-center gap-2 rounded-lg cursor-pointer px-1 hover:bg-slate-100 hover:bg-opacity-5">
                    <div className="w-[50px] h-[50px]  bg-blue-500 rounded-md overflow-hidden">
                      <img
                        src={item.images[0].url}
                        alt=""
                        width={`${item.images[0].width}`}
                        height={`${item.images[0].height}`}
                      />
                    </div>
                    <div className="flex flex-col gap-[1px]">
                      <h1 className="text-[15px] font-semibold ">
                        {item.name}
                      </h1>
                      <h2 className="text-[13px] text-[#bbb]">
                        Playlist • {item.owner.display_name}
                      </h2>
                    </div>
                  </div>
                </NavLink>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
