import { SlMagnifier } from "react-icons/sl";
const Search = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center bg-orange-200">
      <div className="text-7xl mb-5">Foogle</div>
      <div className="w-100  py-3 px-3 rounded-full bg-orange-300 flex items-center">
        <SlMagnifier className="mx-2 text-3xl text-orange-800" />
        <input type="text" className="flex-1 mx-2 text-2xl " />
      </div>
      <div className="mt-5">
        <button className="bg-violet-200 text-violet-700 px-4 py-2 text-xl mx-2 rounded-xl">
          Foogle Search
        </button>
        <button className="bg-violet-200 text-violet-700 px-4 py-2 text-xl mx-2 rounded-xl">
          Image Search
        </button>
      </div>
    </div>
  );
};

export default Search;
