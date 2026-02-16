import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-(--c4) text-(--c1) flex justify-between items-center py-5 px-10">
      <h1 className="text-4xl font-semibold ">Media Search</h1>
      <div className="flex gap-5">
        <Link
          to="/"
          className="text-sm bg-(--c2) text-(--c1) px-3 py-1 rounded active:scale-95 font-semibold"
        >
          Search
        </Link>
        <Link
          to="/collection"
          className="text-sm bg-(--c2) text-(--c1) px-3 py-1 rounded active:scale-95 font-semibold"
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
