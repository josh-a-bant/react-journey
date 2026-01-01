import "./App.css";

import BasicProps from "./components/BasicProps";
import ComplexProps from "./components/ComplexProps";
import ThemeToggle from "./components/ThemeToggle";
import ChildrenProps from "./components/ChildrenProps";
import RefProps from "./components/RefProps";

function Navigation() {
  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "theme", label: "Theme Props", icon: "🎨" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
  ];

  return (
    <nav className="sticky z-50 top-0 flex gap-2 justify-center pt-4">
      {sections.map((section) => (
        <button
          key={section.id}
          className="flex gap-1 items-center bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <span>{section.icon}</span>
          {section.label}
        </button>
      ))}
    </nav>
  );
}

function App() {
  // const isDark = true;

  return (
    <div className="min-h-screen bg-gray-800">
      <Navigation />
      <header className="text-center mt-12 text-white">
        <h1 className="text-5xl font-bold mb-4">React props explained</h1>
        <p className="text-xl text-gray-300">
          A comprehensive guide to understanding props in react
        </p>
      </header>

      {/* <BasicProps /> */}
      <RefProps />
    </div>
  );
}

export default App;
