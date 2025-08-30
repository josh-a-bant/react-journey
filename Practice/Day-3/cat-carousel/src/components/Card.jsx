import CatDetails from "./CatDetails";

const Card = ({ cat }) => {
  return (
    <div className="mx-8 flex justify-center items-center">
      <div className="border border-black rounded-2xl flex flex-col">
        <img
          className="h-[200px] w-[280px] rounded-t-2xl object-cover"
          src={cat.imageUrl}
          alt="Dog-1"
        />
        <div className="rounded-b-2xl overflow-hidden px-4 py-2">
          <CatDetails labels={"name"} value={cat.name} />
          <CatDetails labels={"age"} value={cat.age} />
          <CatDetails labels={"breed"} value={cat.breed} />
          <CatDetails labels={"location"} value={cat.location} />
        </div>
      </div>
    </div>
  );
};

export default Card;
