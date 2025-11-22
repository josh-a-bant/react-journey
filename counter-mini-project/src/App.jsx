import "./App.css";
import Counter from "./Counter";

function App() {
  // return (
  //   <>
  //     <h1>JK - Jagannath</h1>
  //     <Counter />
  //   </>
  // );

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-7xl font-semibold text-white mb-3 tracking-tight">
          JK - Jagannath
        </h1>
        <div className="h-0.5 w-24 bg-white mx-auto"></div>
      </div>
      <Counter />
    </div>
  );
}

export default App;
