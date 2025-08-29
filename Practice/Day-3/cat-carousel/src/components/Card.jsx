import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import CatDetails from "./CatDetails";

const Card = ({ CATS }) => {
  const [imgIndx, setImgIndx] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-8 text-4xl text-center font-bold text-cyan-800">
        Cat-{imgIndx + 1}
      </div>
      <div className="mt-8 flex justify-center items-center">
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

        <div className="border border-black rounded-2xl m-8 flex flex-col">
          <img
            className="h-[200px] w-[280px] rounded-t-2xl object-cover"
            src={CATS[imgIndx].imageUrl}
            alt="Dog-1"
          />
          <div className="rounded-b-2xl overflow-hidden px-4 py-2">
            <CatDetails labels={"name"} value={CATS[imgIndx].name} />
            <CatDetails labels={"age"} value={CATS[imgIndx].age} />
            <CatDetails labels={"breed"} value={CATS[imgIndx].breed} />
            <CatDetails labels={"location"} value={CATS[imgIndx].location} />
          </div>
        </div>

        <button
          className="bg-cyan-300 h-8 w-8 rounded-full flex justify-center items-center"
          onClick={() => {
            if (imgIndx < CATS.length - 1) {
              setImgIndx(imgIndx + 1);
            }
          }}
        >
          <MdKeyboardArrowRight className="text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default Card;
