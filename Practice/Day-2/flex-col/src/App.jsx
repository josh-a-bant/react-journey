import "./App.css";
import Box from "./components/Box";

function App() {
  return (
    <>
      <div className="h-50 border-2 border-blue-400 p-2 m-2 flex justify-center items-center">
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </div>

      <div className="h-50 border-2 border-gray-400 p-2 m-2 flex flex-col justify-between items-center">
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </div>

      <div className="h-50 border-2 border-cyan-400 p-2 m-2 flex flex-col items-center justify-end">
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </div>

      <div className="h-50 border-2 border-red-90000 p-2 m-2 flex flex-col items-end justify-around">
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </div>
    </>
  );
}

export default App;
