import { ThemeContext, UserContext } from "../App";
import { useContext } from "react";

const ChildC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const name = useContext(UserContext);

  function handleClicked() {
    console.log(theme);
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div>
      <button onClick={handleClicked}>Change theme</button>
      <p>{name}</p>
    </div>
  );
};

export default ChildC;
