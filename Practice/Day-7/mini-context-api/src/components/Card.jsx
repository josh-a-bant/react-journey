import Button from "./Button";

const Card = () => {
  return (
    <div className="max-w-md shadow-[0px_0px_21px_0px_#a0aec0] dark:shadow-[0px_0px_21px_0px_#2d3748] p-4 rounded-2xl flex flex-col gap-2 font-open-sans bg-neutral-100 dark:bg-neutral-900">
      <div className="flex justify-end">
        <Button />
      </div>
      <div>
        <img
          src="/Himalayan.jpg"
          alt="himalayan bike image"
          className="rounded"
        />
      </div>
      <h1 className="text-lg text-gray-700 dark:text-gray-400 font-semibold">
        Royal Enfield Himalayan
      </h1>
      <div>
        <p className="text-sm tracking-wide text-gray-500 dark:text-gray-600">
          The Royal Enfield Himalayan is a rugged adventure motorcycle built for
          all terrains - from city roads to mountain trails. Powered by a 411cc
          engine, it offers smooth performance, comfort, and durability. With
          its minimalist design and strong off-road capability, the Himalayan is
          made for true explorers.
        </p>
      </div>
    </div>
  );
};

export default Card;
