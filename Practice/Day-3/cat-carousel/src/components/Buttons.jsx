const Buttons = (props) => {
  const { show, children, onClick } = props;
  return !show ? null : (
    <div>
      <button
        className="bg-cyan-300 h-8 w-8 rounded-full flex justify-center items-center"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Buttons;
