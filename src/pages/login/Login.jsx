import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import useAppStore from "../../zustand/StoreApp";
function Login() {
  const navigate = useNavigate();
  const handleClick = () => {
    const clientId = "09f45ad923af4e06b03c5387bbd28783";
    const redirectUrl = "http://localhost:5173/";
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
      navigate(`playlist/7i5tGT8NEDeBZcMXd20YA4/`);
    } else {
      navigate("/");
    }
  }, [token]);
  return (
    <>
      <button onClick={handleClick} className="mx-auto text-green-400">
        Login
      </button>
    </>
  );
}

export default Login;
