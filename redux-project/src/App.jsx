import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import CollectionPage from "./pages/CollectionPage";

function App() {
  return (
    <div className="bg-(--c1) min-h-screen flex flex-col gap-5">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </div>
  );
}

export default App;
