import React from "react";

const Banner = () => {
  return (
    <div className="h-screen max-w-6xl mx-auto bg-gray-950 relative overflow-hidden">
      <img
        src="/ss.jpg"
        className="h-[550px] w-full object-center mask-b-from-70% mask-l-from-10% opacity-70"
        alt="hitman"
      />
      <div className="absolute z-10 top-15 ml-10 max-w-lg">
        <div className="max-w-sm">
          <p className="font-bold text-xl text-neutral-300 flex justify-center">
            HITMAN
          </p>
          <h1 className="font-extrabold text-5xl text-shadow-sm text-shadow-white tracking-wide text-red-500 font-michroma">
            AGENT 47
          </h1>
          <p className="text-blue-500 mt-4 font-inter">Newly Added</p>
        </div>
        <div className="mt-8 font-inter">
          <ul className="flex gap-2 items-center text-neutral-300">
            <li className="font-semibold">2015</li>
            <li>
              <div className="circle"></div>
            </li>
            <li className="font-semibold">U/A 16+</li>
            <li>
              <div className="circle"></div>
            </li>
            <li className="font-semibold">1h 32m</li>
            <li>
              <div className="circle"></div>
            </li>
            <li className="font-semibold">English</li>
          </ul>
        </div>
        <div className="mt-8 max-w-sm font-inter">
          <p className="text-gray-300 tracking-tight text-sm font-semibold">
            47, an elite assassin, has his sights trained on a mega-corporation
            that plans to unlock the secret of Agent 47's past and create an
            army of killers.
          </p>
        </div>
        <div className="mt-8 font-inter">
          <ul className="flex gap-2 items-center text-base text-neutral-200">
            <li className="font-bold">Action</li>
            <li className="line"></li>
            <li className="font-bold">Conspiracy</li>
            <li className="line"></li>
            <li className="font-bold">Hitman</li>
            <li className="line"></li>
            <li className="font-bold">Assassination</li>
          </ul>
        </div>
        <div className="flex gap-4 mt-8 items-center font-inter">
          <button className="px-14 py-4 rounded-xl flex gap-2 hover:scale-105 bg-gradient-to-r from-indigo-700 from-60% to-pink-600 font-bold tracking-wide text-base text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-player-play"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
            </svg>
            Subscribe to Watch
          </button>
          <button className="p-4 border rounded-xl text-xl cursor-pointer text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 5l0 14" />
              <path d="M5 12l14 0" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
