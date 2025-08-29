import { useState } from "react";
import { CiFaceSmile } from "react-icons/ci";

const Widget1 = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col items-center bg-green-100 border border-green-300 px-4 py-2 m-4 rounded-md">
      {show ? <CiFaceSmile className="text-2xl text-green-600" /> : null}
      <button
        className="rounded-full bg-green-400 px-2 py-0.5 mt-1"
        onClick={() => {
          // setShow(!show);

          // {
          //   show ? setShow(false) : setShow(true);
          // }

          if (show) {
            setShow(false);
          } else {
            setShow(true);
          }
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Widget1;
