import useTheme from "../context/ThemeContext";

const Button = () => {
  const { theme, light, dark } = useTheme();
  return (
    <div>
      <button
        className="border rounded-xl border-neutral-400 dark:border-neutral-500 cursor-pointer px-4 py-1 bg-neutral-200 dark:bg-neutral-600 text-neutral-700 dark:text-neutral-300 m-4"
        onClick={theme === "light" ? dark : light}
      >
        Theme change buttons
      </button>
    </div>
  );
};

export default Button;
