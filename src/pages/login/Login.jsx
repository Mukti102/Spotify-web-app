import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAppStore from "../../zustand/StoreApp";
function Login() {
  const navigate = useNavigate();
  const handleClick = () => {
    const clientId = "09f45ad923af4e06b03c5387bbd28783";
    const redirectUrl = "http://localhost:5173";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scopes = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
      "app-remote-control",
      "streaming",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scopes=${scopes.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  const token = useAppStore((state) => state.token);
  useEffect(() => {
    if (token) {
      navigate(`spotify/playlist/Home`);
    } else {
      navigate("/");
    }
  }, [token]);
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#222]">
      <div className="w-1/2 flex justify-center flex-col items-center ">
        <div className="w-[60%] overflow-hidden h-max">
          <img
            src="https://logosmarcas.net/wp-content/uploads/2020/09/Spotify-Logo.png"
            alt=""
          />
        </div>
        <button
          onClick={handleClick}
          className="mx-auto w-56 translate-x-7 -translate-y-4 text-white bg-green-500 text-xl px-0 py-2 font-medium rounded-full hover:bg-green-400"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
