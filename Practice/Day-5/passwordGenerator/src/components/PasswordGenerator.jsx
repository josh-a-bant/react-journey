import { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  const [password, setPassword] = useState("");

  const passwordRef = useRef();

  const generatePassword = useCallback(() => {
    let pass = "";

    let Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) Characters += "0123456789";
    if (characterAllowed) Characters += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let randomNumber = Math.floor(Math.random() * Characters.length + 1);
      pass += Characters.charAt(randomNumber);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed, generatePassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="border rounded-2xl p-8 flex flex-col gap-4 justify-center items-center">
      <h1 className="text-neutral-200 text-4xl">Password Generator</h1>
      <div className="rounded-xl overflow-hidden">
        <input
          type="text"
          placeholder="Password"
          readOnly
          className="focus:outline-none text-2xl bg-white w-sm px-2 py-1 text-black"
          value={password}
          ref={passwordRef}
        />
        <button
          className="bg-neutral-900 py-1 px-2 text-2xl text-neutral-200 cursor-pointer hover:bg-neutral-500 hover:text-neutral-900"
          onClick={copyPassword}
        >
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
