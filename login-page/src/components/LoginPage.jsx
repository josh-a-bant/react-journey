import {
  IconBrandAppleFilled,
  IconBrandX,
  IconAt,
  IconFingerprint,
  IconEye,
  IconEyeOff,
} from "@tabler/icons-react";
import { useState } from "react";

const LoginPage = () => {
  const [passwordVisible, setpasswordVisible] = useState(false);

  const togglePasswordVisible = () => {
    setpasswordVisible(!passwordVisible);
  };

  return (
    <div className="w-sm shadow-[0px_10px_20px_5px_#1a202c] p-5 rounded-xl">
      <header>
        <h1 className=" text-neutral-400 text-xl text-center tracking-tight mb-4 font-bold">
          Welcome Back
        </h1>
        <p className="text-sm text-neutral-600/70 text-center mb-5 tracking-tight">
          Don't have an account?
          <span className="text-neutral-400">Sign up</span>
        </p>
      </header>

      <main>
        <div className="flex items-center gap-1 w-full text-neutral-400 bg-gray-800 rounded-lg text-md p-2 mb-4">
          <IconAt stroke={1} className="text-white h-4" />
          <input
            type="text"
            className="flex-1 outline-none bg-transparent border-0"
            placeholder="Enter Email"
          />
        </div>

        <div className="flex items-center gap-1 w-full text-neutral-400 bg-gray-800 rounded-lg text-md p-2 mb-6">
          <IconFingerprint stroke={1} className="text-white h-4" />
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter Password"
            className="bg-transparent border-0 outline-none flex-1"
          />

          <div onClick={togglePasswordVisible}>
            {passwordVisible ? (
              <IconEyeOff
                stroke={1}
                className="text-white h-4 cursor-pointer"
              />
            ) : (
              <IconEye stroke={1} className="text-white h-4 cursor-pointer" />
            )}
          </div>
        </div>

        <button className="w-full mx-auto text-neutral-300 text-shadow-md/30 bg-blue-800 py-2 rounded-lg text-md cursor-pointer hover:bg-blue-600 hover:text-neutral-200">
          Submit
        </button>
      </main>

      <footer>
        <div className="flex items-center gap-4 mt-6">
          <div className="flex-1 bg-white/10 h-[1px]"></div>
          <p className="text-neutral-600 text-md">Or</p>
          <div className="flex-1 bg-white/10 h-[1px]"></div>
        </div>

        <div className="flex justify-evenly items-center my-6 ">
          <div className="py-2 px-8 bg-gray-800 rounded-full cursor-pointer">
            <IconBrandAppleFilled stroke={1} className="text-white h-4" />
          </div>
          <div className="py-2 px-8 bg-gray-800 rounded-full cursor-pointer">
            <img src="/google-logo.png" alt="googleLogo" className="h-4" />
          </div>
          <div className="py-2 px-8 bg-gray-800 rounded-full cursor-pointer">
            <IconBrandX stroke={1} className="text-white h-4" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
