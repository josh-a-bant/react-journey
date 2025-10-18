import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkMode = () => {
    setThemeMode("dark");
  };

  const lightMode = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <div className="flex justify-center items-center min-h-screen dark:bg-neutral-900">
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;
