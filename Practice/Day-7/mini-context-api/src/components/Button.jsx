import { IconSun } from "@tabler/icons-react";
import { IconMoon } from "@tabler/icons-react";
import useTheme, { ThemeContext } from "../context/ThemeContext";

const Button = () => {
  const { themeMode, darkMode, lightMode } = useTheme(ThemeContext);

  return (
    <button
      className="border-[1px] rounded-xl cursor-pointer dark:border-gray-300 dark:text-gray-300 p-1 bg-white dark:bg-gray-800 hover:scale-105 transition-all duration-200"
      onClick={themeMode === "light" ? darkMode : lightMode}
    >
      {themeMode === "light" ? (
        <IconMoon stroke={1} className="size-8" />
      ) : (
        <IconSun stroke={1} className="size-8" />
      )}
    </button>
  );
};

export default Button;
