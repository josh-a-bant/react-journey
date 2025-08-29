import { useState } from "react";
import { FaPoop } from "react-icons/fa";

const Widget3 = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col items-center bg-purple-100 border border-purple-300 px-4 py-2 m-4 rounded-md">
      {show && <FaPoop className="text-2xl text-purple-600" />}
      <button
        className="rounded-full bg-purple-400 px-2 py-0.5 mt-1"
        onClick={() => {
          setShow(!show);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Widget3;
