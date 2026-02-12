import { useEffect } from "react";
import { fetchImage, fetchVideos, fetchGIF } from "../api/mediaApi";
import {
  setLoading,
  setError,
  setResults,
  setQuery,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";

const ResultGrid = () => {
  const { query, activeTab, reults, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
    const getData = async () => {
      let data;
      if (activeTab == "photos") {
        let response = await fetchImage(query);
        data = response.map((item) => ({
          id: item.id,
          type: "photo",
          title: item.alt_description,
          thumbnail: item.urls.small,
          src: item.urls.full,
        }));
      }
      if (activeTab == "videos") {
        let response = await fetchVideos(query);
        data = response.map((item) => ({
          id: item.id,
          type: "video",
          thumbnail: item.image,
          src: item.url,
        }));
      }
      if (activeTab == "gifs") {
        let response = await fetchGIF(query);
        data = response.map((item) => ({
          id: item.id,
          type: "gif",
          title: item.content_description,
          src: item.url,
        }));
      }

      console.log(data);
    };
    getData();
  }, [query, activeTab]);

  return <div></div>;
};

export default ResultGrid;
