import React, { useEffect, useState } from "react";
import "./SongDetail.css";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import useAppStore from "../../zustand/StoreApp";
import HandleName from "../../Functions/HandleName";
function SongDetail() {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [isLike, setIslike] = useState(false);
  const playslistsItem = useAppStore((state) => state.playlistsItem);
  const tracks = useAppStore((state) => state.cardTarget);
  const playlist = useAppStore((state) => state.playlist);
  const getArtist = useAppStore((state) => state.getArtist);
  const artistDetail = useAppStore((state) => state.aboutArtist);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    getArtist(tracks?.artistId);
  }, [tracks]);
  const hide = () => {
    setHidden(!hidden);
  };
  return (
    <div
      className={`flex-auto w-[30%] h-full ${hidden ? "hidden" : ""}`}
      onMouseOver={() => setMouseEnter(false)}
      onMouseLeave={() => setMouseEnter(true)}
    >
      <div
        className={`overflow-y-auto scroll-barr h-full w-full pl-4 pr-1 pt-5 pb-3  bg-[#111] rounded-lg  ${
          mouseEnter ? "scroll-bar-thumb" : ""
        }`}
      >
        <div className="flex justify-between">
          <div className="text-sm font-semibold text-[#fff]">
            {playlist.name}
          </div>
          <div>
            <IoCloseOutline
              className="text-xl text-[#ddd] cursor-pointer"
              onClick={hide}
            />
          </div>
        </div>
        <div className="w-full h-72 bg-slate-50 rounded-xl overflow-hidden mt-3">
          <img
            src={
              tracks
                ? tracks?.image.url
                : "https://k-gen.fr/wp-content/uploads/2018/04/blackpink-boombayah-300millions-1366x768.png"
            }
            alt="picture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-2 px-2 flex justify-between items-center text-start">
          <div>
            <h1 className="text-xl  text-white font-semibold">
              {HandleName(tracks.name)}
            </h1>
            <h2 className="text-[15px] text-start font-medium text-[#aaa]">
              {tracks.artists[0]}
            </h2>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setIslike(!isLike)}>
              {isLike ? (
                <IoMdHeart className="text-green-600 text-xl" />
              ) : (
                <IoMdHeartEmpty className="text-green-600 text-xl" />
              )}
            </button>
            <button className="text-[#eee]">
              <SlOptions />
            </button>
          </div>
        </div>
        <div className="w-full h-96 mt-5 bg-[#111] rounded-xl overflow-hidden">
          <div className="w-full h-[55%] overflow-hidden relative">
            <div className="w-full h-full bg-black absolute bg-opacity-40"></div>
            <h1 className="text-white text-sm absolute left-3 top-3 font-semibold">
              About The Artist
            </h1>
            <img
              src={
                artistDetail?.images[0].url ||
                "https://k-gen.fr/wp-content/uploads/2018/04/blackpink-boombayah-300millions-1366x768.png"
              }
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full px-3 text-white text-start font-normal">
            <div className="pt-4">
              <h1 className="text-lg text-white font-semibold">
                {artistDetail ? artistDetail.name : ""}
              </h1>
            </div>
            <div className="flex justify-between w-full text-[#bbb]">
              <div>
                <h1>
                  {artistDetail ? artistDetail.followers : ""}
                  <span className="text-sm"> Mothly</span>
                </h1>
                <h2 className="text-sm">Listeners</h2>
              </div>
              <button className="w-20 h-max py-1 text-sm border-[1px] border-[#aaa] bg-transparent rounded-full text-white font-semibold hover:scale-105 hover:border-white">
                Follow
              </button>
            </div>
            <div className="w-full text-[12px] text-[#bbb] mt-3">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis dignissimos voluptatibus tenetur sed exercitationem!
                Numquam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SongDetail;
