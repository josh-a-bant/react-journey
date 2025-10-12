import React, { useCallback, useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  }, [length, numberAllowed, characterAllowed, setPassword]);

  return (
    <div className="border rounded-2xl p-8 flex flex-col gap-4 justify-center items-center">
      <h1 className="text-neutral-200 text-4xl">Password Generator</h1>
      <div className="rounded-xl overflow-hidden">
        <input
          type="text"
          id="password"
          readOnly
          className="focus:outline-none text-2xl bg-white w-sm p-1 text-black"
          value={password}
        />
        <button className="bg-neutral-900 py-1 px-2 text-2xl text-neutral-200 cursor-pointer">
          Copy
        </button>
      </div>
      <div className="flex gap-6 text-xl text-neutral-200 items-center">
        <div className="flex gap-4 items-center">
          <input
            type="range"
            id="length"
            min="8"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer"
          />
          <label htmlFor="length" className="w-22">
            length: {length}
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            id="numberAllowed"
            className="size-4"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberAllowed">Number</label>
        </div>

        <div className="flex gap-2 items-center justify-center">
          <input
            type="checkbox"
            id="characterAllowed"
            className="size-4"
            onChange={() => setCharacterAllowed((prev) => !prev)}
          />
          <label htmlFor="characterAllowed">Character</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
