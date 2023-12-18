import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import useAppStore from "../../zustand/StoreApp";
import SearchCard from "../../Atoms/Card/SearchCard";
import Icon from "../../Atoms/icon/Icon";
import "../SongDetail/SongDetail.css";
import SearcCardLoad from "../../Atoms/Card/skeleton/SearcCardLoad";
import { useNavigate } from "react-router";
import Profile from "../../Atoms/icon/Profile";
function SearchPage() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const getSearch = useAppStore((state) => state.getSearch);
  const searchResult = useAppStore((state) => state.searchResult);
  const [mouseEnter, setMouseEnter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const CardTarget = useAppStore((state) => state.CardTarget);
  const inputChange = useCallback((e) => {
    setInputValue(e.target.value);
  });

  const submitInput = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const fetchSearch = async () => {
      try {
        const res = await getSearch(
          `https://api.spotify.com/v1/search?q=${inputValue}&type=track`
        );
        if (res) {
          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(true);
        console.log(err);
      }
    };
    fetchSearch();
    setInputValue("");
  };
  return (
    <div
      className={` scroll-barr w-full overflow-y-auto h-full py-3 px-2 relative overflow-hidden ${
        !mouseEnter ? "scroll-bar-thumb" : ""
      }`}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <div
        className={`flex-auto w-1/2  items-center flex gap-2 z-10 bg-transparent backdrop-blur-md top-4 h-max py-4 px-2 shadow-lg fixed justify-between`}
      >
        <div className="w-1/2  flex gap-0 items-center">
          <Icon />
          <div className=" flex-none w-full h-12 flex bg-[#333] rounded-full overflow-hidden px-5">
            <button className="text-white">
              <LuSearch className="text-lg" />
            </button>
            <form onSubmit={submitInput} className="w-full">
              <input
                type="text"
                value={inputValue}
                onChange={inputChange}
                placeholder="What do you want to listen"
                className="px-2 font-normal placeholder:text-[13px] placeholder:text-[#888] bg-transparent w-full outline-none text-white h-full"
              />
            </form>
          </div>
        </div>
        <Profile />
      </div>
      <div className="mt-16 w-full h-full text-start">
        <h1 className="text-xl my-3 text-white font-semibold">
          Recent Searches
        </h1>
        <div className="flex w-full overflow-y-auto flex-wrap gap-6">
          {!isLoading ? (
            searchResult?.map((card) => {
              return <SearchCard {...card} item={card} />;
            })
          ) : (
            <SearcCardLoad />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
