import React, { useEffect, useState } from "react";
import "./SongDetail.css";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import useAppStore from "../../zustand/StoreApp";
import { useParams } from "react-router";
function SongDetail() {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [isLike, setIslike] = useState(false);
  const playslistsItem = useAppStore((state) => state.playlistsItem);
  const getTracks = useAppStore((state) => state.getTracks);
  const tracks = useAppStore((state) => state.tracks);
  const params = useParams();
  const [id, setId] = useState(params.index.split("=")[1]);
  console.log(id);
  // console.log(id);
  useEffect(() => {
    setId(params.index.split("=")[1]);
    const getArtist = async () => {
      try {
        const res = await getTracks(`https://api.spotify.com/v1/tracks/${id}`);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getArtist();
  }, [params, id]);
  return (
    <div
      className="w-1/4 h-max z-50"
      onMouseOver={() => setMouseEnter(false)}
      onMouseLeave={() => setMouseEnter(true)}
    >
      {tracks ? (
        <div
          className={`overflow-y-auto scroll-barr w-full pl-4 pr-1 pt-5 pb-3  h-screen bg-[#111] rounded-xl  ${
            mouseEnter ? "scroll-bar-thumb" : ""
          }`}
        >
          <div className="flex justify-between">
            <div className="text-sm font-semibold text-[#fff]">
              Indonesian song
            </div>
            <div>
              <IoCloseOutline className="text-xl text-[#ddd]" />
            </div>
          </div>
          <div className="w-full h-64 bg-slate-50 rounded-xl overflow-hidden mt-3">
            <img
              src={
                tracks
                  ? tracks.album.images[0].url
                  : "https://k-gen.fr/wp-content/uploads/2018/04/blackpink-boombayah-300millions-1366x768.png"
              }
              alt="picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-2 px-2 flex justify-between items-center">
            <div>
              <h1 className="text-xl text-white font-semibold">
                {tracks.name}
              </h1>
              <h2 className="text-[15px] text-[#aaa]">
                {tracks.artists[0].name}
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
              <button>
                <SlOptions />
              </button>
            </div>
          </div>
          <div className="w-full h-96 mt-5 bg-[#111] rounded-xl overflow-hidden">
            <div className="w-full bg-red-300 h-[55%] overflow-hidden">
              <img
                src="https://k-gen.fr/wp-content/uploads/2018/04/blackpink-boombayah-300millions-1366x768.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full px-3">
              <div className="pt-4">
                <h1 className="text-lg text-white font-semibold">Title</h1>
              </div>
              <div className="flex justify-between w-full">
                <div>
                  <h1>
                    2.34.4444 <span className="text-sm">Mothly</span>
                  </h1>
                  <h2 className="text-sm">Listeners</h2>
                </div>
                <button className="w-20 h-max py-1 text-sm border-[1px] border-white bg-transparent rounded-full text-white font-semibold">
                  Follow
                </button>
              </div>
              <div className="w-full text-[12px] mt-3">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perferendis dignissimos voluptatibus tenetur sed
                  exercitationem! Numquam
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
}
export default SongDetail;
