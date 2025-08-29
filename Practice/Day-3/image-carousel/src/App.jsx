import { useState } from "react";
import "./App.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const ImgURLS = [
  "https://images.pexels.com/photos/32320061/pexels-photo-32320061.jpeg",
  "https://images.pexels.com/photos/16238725/pexels-photo-16238725.jpeg",
  "https://images.pexels.com/photos/32697461/pexels-photo-32697461.jpeg",
  "https://images.pexels.com/photos/31870308/pexels-photo-31870308.jpeg",
  "https://images.pexels.com/photos/8932593/pexels-photo-8932593.jpeg",
];

function App() {
  const [imgIndx, setImgIndx] = useState(4);
  return (
    <div className="flex flex-col">
      <div className="text-4xl text-center font-bold mt-8 text-cyan-800">
        Dog-{imgIndx + 1}
      </div>

      <div className="flex justify-center items-center ">
        <button
          className="bg-cyan-300 h-8 w-8 rounded-full flex justify-center items-center"
          onClick={() => {
            if (imgIndx > 0) {
              setImgIndx(imgIndx - 1);
            }
          }}
        >
          <MdKeyboardArrowLeft className="text-4xl" />
        </button>
        <img
          className="h-[350px] w-[250px] object-cover m-8 rounded-2xl"
          src={ImgURLS[imgIndx]}
          alt="Dog-1"
        />
        <button
          className="bg-cyan-300 h-8 w-8 rounded-full flex justify-center items-center"
          onClick={() => {
            if (imgIndx < ImgURLS.length - 1) {
              setImgIndx(imgIndx + 1);
            }
          }}
        >
          <MdKeyboardArrowRight className="text-4xl" />
        </button>
      </div>
    </div>
  );
}

export default App;
