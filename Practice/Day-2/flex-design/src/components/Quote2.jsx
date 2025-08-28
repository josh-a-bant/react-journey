const Quote2 = (props) => {
  const { quote } = props;
  return (
    <div className="flex m-8">
      <div className="bg-blue-700 text-gray-200 p-6 text-lg w-64 rounded-l-lg">
        <div className="text-gray-200 text-2xl">{quote.author}</div>
        <div className="text-blue-400">{quote.bio}</div>
      </div>
      <div className="flex items-center justify-center px-8 border border-stone-300 text-lg text-stone-500 bg-stone-100 rounded-r-full w-80">
        <div>{quote.text}</div>
      </div>
    </div>
  );
};

export default Quote2;
