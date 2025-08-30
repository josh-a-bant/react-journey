const CatDetails = ({ labels, value }) => {
  return (
    <div className="flex h-8">
      <div className="text-start w-20 text-gray-800 font-medium">{labels}</div>
      <div>{value}</div>
    </div>
  );
};

export default CatDetails;
