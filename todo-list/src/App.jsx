import "./App.css";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="font-poppins">
      <header>
        <Navbar />
      </header>
      <main className="mt-6">
        <Todo />
      </main>
    </div>
  );
}

export default App;
