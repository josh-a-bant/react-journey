import "./App.css";
import { createContext } from "react";
import ChildA from "./components/ChildA";
import { useState } from "react";

const ThemeContext = createContext();
const UserContext = createContext();

function App() {
  const [name, setName] = useState("Krishna");
  const [theme, setTheme] = useState("light");

  return (
    <>
      <div
        className="mainContainer"
        style={{ backgroundColor: theme === "light" ? "grey" : "black" }}
      >
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <UserContext.Provider value={name}>
            <ChildA />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
export { ThemeContext };
export { UserContext };
