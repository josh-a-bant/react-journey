const Quote3 = (props) => {
  const { quote } = props;
  return (
    <div className="flex flex-col items-start m-8">
      <div className="bg-rose-400 text-white text-xl p-8 rounded-t-lg rounded-br-lg">
        {quote.text}
      </div>
      <div className="bg-rose-100 border-b-2 border-x-2 border-rose-300 p-4 rounded-b-lg flex flex-col">
        <div className="text-rose-700 text-lg">{quote.author}</div>
        <div className="text-rose-400">{quote.bio}</div>
      </div>
    </div>
  );
};

export default Quote3;
