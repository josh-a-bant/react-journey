import { useRef } from "react";
import { forwardRef } from "react";

const CustomInput = forwardRef(({ label, placeholder, className }, ref) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-mediummb-2">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        ref={ref}
      />
    </div>
  );
});

CustomInput.displayName = "CustomInput";

function RefProps() {
  const inputRef = useRef(null);
  const secondInput = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const getInputValue = () => {
    if (inputRef.current) {
      alert(`input value: ${inputRef.current.value}`);
      console.log(inputRef);
    }
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const focusSecondInput = () => {
    secondInput.current?.focus();
  };

  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2>Ref props</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quo
        pariatur eveniet animi id exercitationem!
      </p>

      <div>
        <div>
          <h3>Try it out</h3>
        </div>
        <CustomInput
          ref={inputRef}
          label="First Input with ref"
          placeholder="type something"
        />
        <CustomInput
          ref={secondInput}
          label="Second Input with ref"
          placeholder="type something else..."
        />

        <div className="flex flex-wrap gap-3 mt-4">
          <button
            onClick={focusInput}
            className="border rounded-lg px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Focus First Input
          </button>
          <button
            onClick={focusSecondInput}
            className="border rounded-lg px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Focus Second Input
          </button>
          <button
            onClick={getInputValue}
            className="border rounded-lg px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            get first input value
          </button>
          <button
            onClick={clearInput}
            className="border rounded-lg px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            clear first input
          </button>
        </div>
      </div>
    </section>
  );
}

export default RefProps;
