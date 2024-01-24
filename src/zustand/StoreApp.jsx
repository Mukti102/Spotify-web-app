import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
const useAppStore = create(
  persist(
    (set) => ({
      token: window.location.hash.substring(1).split("&")[0].split("=")[1],
      playlistsFeatured: null,
      playlist: [],
      loading: false,
      cardTarget: null,
      playing: false,
      tracks: null,
      aboutArtist: null,
      searchResult: null,
      defaultUrl: "https://api.spotify.com",
      getPlaylist: (url) => {
        return new Promise((resolve, reject) => {
          axios
            .get(url, {
              headers: {
                Authorization: "Bearer " + useAppStore.getState().token,
              },
            })
            .then((res) => {
              set({ playlists: res.data.items });
              set({ playlistsFeatured: res.data.items });
              resolve(res);
            })
            .catch((err) => {
              reject("fetch playlists", err);
            });
        });
      },
      getItemPlaylist: (playlist, tracks) => {
        return new Promise((resolve, reject) => {
          let PlaylistItem = "";
          let trackItem = "";
          axios
            .get(playlist, {
              headers: {
                Authorization: "Bearer " + useAppStore.getState().token,
              },
            })
            .then((res) => {
              const selectedPlylist = {
                data: res.data.description,
                owner: res.data.owner.display_name,
                id: res.data.id,
                name: res.data.name,
                description: res.data.description.startsWith("<a")
                  ? ""
                  : res.data.description,
                image: res.data.images[0].url,
              };
              PlaylistItem = selectedPlylist;
              set({ playlist: PlaylistItem });
              resolve(true);
              // set({ playlist: selectedPlylist });
            })
            .catch((err) => {
              reject(err);
            });

          axios
            .get(tracks, {
              headers: {
                Authorization: "Bearer " + useAppStore.getState().token,
              },
            })
            .then((res) => {
              trackItem = res.data.items.map((item) => ({
                id: item.track.id,
                name: item.track.name,
                artists: item.track.artists.map((artist) => artist.name),
                artistId: item.track.artists.map((artist) => artist.id),
                image: item.track.album.images[1],
                album: item.track.album.name,
                duration: item.track.duration_ms,
                track_Number: item.track.track_number,
                preview_Url: item.track.preview_url,
              }));
              set({ track: trackItem });
              resolve(true);
            })
            .catch((err) => {
              console.log(err);
              reject(err);
            });
        });
      },
      setLoading: (boolean) => {
        set((state) => ({ loading: (state.loading = boolean) }));
      },
      getCardTarget: (item) => {
        if (item.preview_Url == null) {
          alert("lagu tidak ditemukan ");
          return;
        } else {
          set({ cardTarget: item });
        }
      },
      getArtist: (id) => {
        return new Promise((resolve, reject) => {
          axios
            .get(`https://api.spotify.com/v1/artists/${id}`, {
              headers: {
                Authorization: "Bearer " + useAppStore.getState().token,
              },
            })
            .then((res) => {
              const artistDetail = {
                followers: res.data.followers.total,
                genres: res.data.genres,
                images: res.data.images,
                name: res.data.name,
                popularity: res.data.popularity,
              };
              set({ aboutArtist: artistDetail });
              resolve(true);
            })
            .catch((err) => {
              reject("fetch get artist", err);
            });
        });
      },
      setPlaying: (condition) => {
        set({ playing: condition });
      },
      getSearch: (url) => {
        return new Promise((resolve, reject) => {
          axios
            .get(url, {
              headers: {
                Authorization: "Bearer " + useAppStore.getState().token,
              },
            })
            .then((res) => {
              console.log(res);
              const selectedSearch = res.data.tracks.items.map((item) => ({
                artists: item.artists.map((artist) => artist.name),
                image: item.album.images[0],
                id: item.id,
                is_local: item.is_local,
                name: item.name,
                popularity: item.popularity,
                preview_Url: item.preview_url,
                uri: item.uri,
              }));
              set({ searchResult: selectedSearch });
              resolve(true);
            })
            .catch((err) => {
              reject("getSearch", err);
            });
        });
      },
    }),
    {
      name: "spotify-storage",
    }
  )
);

export default useAppStore;
