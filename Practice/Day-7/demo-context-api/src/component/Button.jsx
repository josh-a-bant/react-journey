import useTheme from "../context/ThemeContext";

const Button = () => {
  const { theme, light, dark } = useTheme();
  return (
    <div>
      <button
        className="border rounded-xl border-neutral-300 dark:border-neutral-700 cursor-pointer px-4 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-500 m-4"
        onClick={theme === "light" ? dark : light}
      >
        Theme change buttons
      </button>
    </div>
  );
};

export default Button;
