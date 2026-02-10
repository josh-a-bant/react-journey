import { fetchGIF, fetchImage, fetchVideos } from "./api/mediaApi";

function App() {
  return (
    <div className="h-screen w-full bg-neutral-600 text-white">
      <button
        className="m-4 border px-4 py-2"
        onClick={() => {
          fetchImage("cat");
        }}
      >
        Get Photos
      </button>
      <button
        className="m-4 border px-4 py-2"
        onClick={() => {
          fetchVideos("dog");
        }}
      >
        Get videos
      </button>

      <button
        className="m-4 border px-4 py-2"
        onClick={() => {
          fetchGIF("dog");
        }}
      >
        Get GIF
      </button>
    </div>
  );
}

export default App;
