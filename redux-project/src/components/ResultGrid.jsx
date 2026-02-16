import { useEffect } from "react";
import { fetchImage, fetchVideos, fetchGIF } from "../api/mediaApi";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, reults, loading, error } = useSelector(
    (store) => store.search,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activeTab == "photos") {
          let response = await fetchImage(query);
          console.log(response);
          data = response.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        }
        if (activeTab == "videos") {
          let response = await fetchVideos(query);
          // console.log(response);
          data = response.map((item) => ({
            id: item.id,
            type: "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            title: item.user.name,
            url: item.url,
          }));
        }
        if (activeTab == "gifs") {
          let response = await fetchGIF(query);
          console.log(response);
          data = response.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.content_description,
            src: item.media_formats.gif.url,
            thumbnail: item.media_formats.tinygif.url,
            url: item.url,
          }));
          // console.log(response);
        }

        dispatch(setResults(data));
      } catch (error) {
        dispatch(setError(error));
      }
    };
    getData();
  }, [query, activeTab, dispatch]);

  if (error)
    return <h3 className="text-(--c4) text-4xl text-center py-5">Error</h3>;
  if (loading)
    return <h3 className="text-(--c4) text-4xl text-center py-5">Loading</h3>;
  return (
    <div className="flex justify-between w-full flex-wrap gap-3 overflow-auto py-5 px-10">
      {reults.map((item, idx) => {
        return <ResultCard item={item} key={idx} />;
      })}
    </div>
  );
};

export default ResultGrid;
