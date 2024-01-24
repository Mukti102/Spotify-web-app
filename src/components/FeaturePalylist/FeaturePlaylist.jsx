import axios from "axios";
import React, { useEffect, useState } from "react";
import useAppStore from "../../zustand/StoreApp";
import CardFeaturedPlaylist from "../../Atoms/Card/CardFeaturedPlaylist";
import { useParams } from "react-router";
function FeaturePlaylist({ name }) {
  const defaultUrl = useAppStore((state) => state.defaultUrl);
  const getPlaylist = useAppStore((state) => state.getPlaylist);
  const playlistsFeatured = useAppStore((state) => state.playlistsFeatured);
  const [playlists, setPlaylists] = useState([]);
  const token = useAppStore((state) => state.token);
  const params = useParams;
  useEffect(() => {
    const fetch = async () => {
      try {
        axios
          .get(`${defaultUrl}/v1/browse/featured-playlists`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((res) => {
            setPlaylists(res.data.playlists.items);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch {
        console.log(err);
      }
    };
    fetch();
  }, [params]);
  console.log(playlists);
  return (
    <div className="w-full px-5  my-5">
      <h1 className="text-white font-bold text-xl text-start my-2">{name}</h1>
      <div className="w-full flex flex-wrap gap-5">
        {playlists?.map((item, index) => {
          return <CardFeaturedPlaylist {...item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default FeaturePlaylist;
