import React, { useEffect, useState } from "react";
import useAppStore from "../../zustand/StoreApp";
import axios from "axios";
import { useNavigate } from "react-router";
function Profile() {
  const token = useAppStore((state) => state.token);
  const [profileData, setProfileData] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + useAppStore.getState().token,
        },
      })
      .then((res) => setProfileData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleLogOut = () => {
    localStorage.removeItem("spotify-storage");
    setTimeout(() => {
      window.location.href = "http://localhost:5173/";
    }, 1000);
  };
  return (
    <div
      className="dropdown dropdown-bottom dropdown-end"
      data-tip={profileData.display_name}
    >
      <div className="">
        <div
          tabIndex={0}
          role="button"
          className="avatar dropdown dropdown-hover"
        >
          <div
            className="w-8 rounded-full border-[1.7px]"
            tabIndex={0}
            role="button"
          >
            <img
              src={
                "https://i.pinimg.com/originals/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg"
              }
              className="object-cover w-full h-full"
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu shadow bg-[#333] text-white font-normal rounded-sm mt-2 w-max px-2 text-[12px]"
          >
            <h1 className="text-center">{profileData.display_name}</h1>
          </ul>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu  shadow text-white font-normal rounded-sm bg-[#333] w-32 hover:bg-[#555]"
          onClick={handleLogOut}
        >
          <button className="text-start">Log out</button>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
