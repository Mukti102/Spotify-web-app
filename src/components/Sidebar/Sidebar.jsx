import React, { useState } from "react";
import { useEffect } from "react";
import useAppStore from "../../zustand/StoreApp";
import { BiLibrary } from "react-icons/bi";
import { GrLinkNext } from "react-icons/gr";
import { LuSearch } from "react-icons/lu";
import { HiMiniListBullet } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import PlaylistsLoad from "../../Atoms/Card/skeleton/PlaylistsLoad";
import "../SongDetail/SongDetail.css";
import "./Sidebar.css";
function Sidebar() {
  const getPlaylists = useAppStore((state) => state.getPlaylist);
  const playlists = useAppStore((state) => state.playlists);
  const Loading = useAppStore((state) => state.loading);
  const token = useAppStore((state) => state.token);
  const setLoading = useAppStore((state) => state.setLoading);
  const cardTarget = useAppStore((state) => state.cardTarget);
  const [mouseEnter, setMouseEnter] = useState(false);
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
    <div
      className={`${
        cardTarget ? " flex-auto" : "flex-initial"
      } w-[25%] pl-2 pr-1  flex-col`}
    >
      <div className="h-[18%] flex flex-col gap-4 justify-center py-0 px-3 mb-2 rounded-lg w-full bg-[#111]">
        <NavLink
          to={"playlist/search"}
          className="text-white gap-4 items-center w-full flex"
        >
          <GoHome className="text-2xl text-[#ccc]" />
          <h1 className="text-[15px] text-[#ccc] font-semibold">Home</h1>
        </NavLink>
        <NavLink
          to={"playlist/search"}
          className="text-white gap-4 items-center w-full flex"
        >
          <LuSearch className="text-2xl text-[#ccc]" />
          <h1 className="text-[15px] text-[#ccc] bg-none font-semibold">
            Search
          </h1>
        </NavLink>
      </div>
      <div className={`pl-2 pr-1 py-4 h-[80%] text-white bg-[#111] rounded-lg`}>
        <div className="w-full shadow-custom z-50 h-max  pb-2">
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
            <button className="w-20 font-medium rounded-2xl py-1 text-sm text-white  bg-[#444] bg-opacity-60">
              Playlist
            </button>
          </div>
        </div>
        <div
          className={`w-full h-[85%] scroll-barr  overflow-y-auto ${
            mouseEnter ? "scroll-bar-thumb" : ""
          }`}
          onMouseLeave={() => setMouseEnter(true)}
          onMouseEnter={() => setMouseEnter(false)}
        >
          <div className="w-full h-full">
            <div className="w-full px-1 bg-[#0000] shadow-xl ">
              <div className="flex px-0 items-center justify-between pt-4">
                <div className="text-[#bbb] cursor-pointer">
                  <LuSearch className="text-lg" />
                </div>
                <div className="flex font-normal items-center gap-1">
                  <h1 className="text-sm">Recents</h1>
                  <HiMiniListBullet className="text-lg" />
                </div>
              </div>
            </div>
            {Loading ? (
              <PlaylistsLoad />
            ) : (
              playlists?.map((item, index) => {
                return (
                  <NavLink to={`playlist/${item.id}`} key={index}>
                    <div className="w-full h-[60px] mt-2 flex items-center gap-2 rounded-lg cursor-pointer px-1 hover:bg-slate-100 hover:bg-opacity-5">
                      <div className="w-[50px] h-[50px]  bg-black rounded-md overflow-hidden">
                        <img
                          src={item.images[0].url}
                          alt=""
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <div className="flex flex-col gap-[1px]">
                        <h1 className="text-start text-[15px] font-semibold ">
                          {item.name}
                        </h1>
                        <h2 className="text-[12px] font-medium text-[#bbb]">
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
      </div>
    </div>
  );
}

export default Sidebar;
