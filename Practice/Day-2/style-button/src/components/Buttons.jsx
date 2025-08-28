const Buttons = (props) => {
  const { children, large } = props;

  const largeStyle = large ? "text-3xl rounded-full" : "text-base rounded-md";

  return (
    <button
      className={`bg-blue-100 px-10 py-2 border-2 border-blue-600 text-blue-600 m-4 ${largeStyle}`}
    >
      {children}
    </button>
  );
};

export default Buttons;
