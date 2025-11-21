import { ArrowRight } from "lucide-react";

const CardContext = ({ user, id }) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-between p-6">
      <h2 className="size-9 text-black bg-white flex justify-center items-center font-bold rounded-full border-none">
        {id + 1}
      </h2>

      <div>
        <p className="text-white mb-10 text-shadow-md">{user.intro}</p>
        <div className="flex justify-between">
          <button className="text-white bg-blue-600 rounded-full text-sm px-4 py-1 font-semibold cursor-pointer">
            {user.tag}
          </button>
          <ArrowRight size={30} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default CardContext;
