import "./App.css";

import BasicProps from "./components/BasicProps";
import ComplexProps from "./components/ComplexProps";
import ThemeToggle from "./components/ThemeToggle";
import ChildrenProps from "./components/ChildrenProps";
import RefProps from "./components/RefProps";

function Navigation() {
  const isDark = true;

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "theme", label: "Theme Props", icon: "🎨" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
  ];


  return (
    <nav>
       
    </nav>
  )
}

function App() {
  return (
    <>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
