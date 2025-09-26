const Card = ({ card }) => {
  const Icon = card.icon;
  return (
    <div className="shadow-[0px_0px_20px_0px_#00000024] p-6 flex flex-col gap-4 rounded-2xl transition-transform hover:scale-105 hover:shadow-lg">
      <div
        className={`size-10 flex justify-center items-center text-4xl text-white ${card.bgColor} rounded-lg p-2`}
      >
        <Icon />
      </div>
      <h2 className="font-semibold text-lg">{card.title}</h2>
      <p className="text-sm text-gray-500">{card.description}</p>
    </div>
  );
};

export default Card;
