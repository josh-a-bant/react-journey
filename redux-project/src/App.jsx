// import { fetchGIF, fetchImage, fetchVideos } from "./api/mediaApi";
import ResultGrid from "./components/ResultGrid";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div>
      <SearchBar />

      <Tabs />
      <ResultGrid />
    </div>
  );
}

export default App;
