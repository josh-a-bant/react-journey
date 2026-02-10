import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;

export async function fetchImage(query, page = 1, per_page = 20) {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  console.log(res.data.results);
}

export async function fetchVideos(query) {
  const res = await axios.get("https://api.pexels.com/videos/search", {
    params: { query },
    headers: { Authorization: PEXELS_KEY },
  });

  console.log(res.data.videos);
}

export async function fetchGIF(query, limit = 20) {
  const res = await axios.get("https://tenor.googleapis.com/v2/search", {
    params: { q: query, key: TENOR_KEY, client_key: "my_react_app", limit },
  });

  console.log(res.data.results);
}
