import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Button from "./component/Button";

function App() {
  const [theme, setTheme] = useState("light");

  function light() {
    setTheme("light");
  }

  function dark() {
    setTheme("dark");
  }

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeProvider value={{ theme, light, dark }}>
      <div className="bg-neutral-300 dark:bg-neutral-500 h-screen flex justify-center items-center flex-col">
        <Button />
      </div>
    </ThemeProvider>
  );
}

export default App;
