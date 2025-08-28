import "./App.css";
import Box from "./components/Box";

function App() {
  return (
    <>
      <div className="h-40 p-2 m-2 border-2 border-blue-400 rounded-md flex justify-center">
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </div>

      <div className="h-40 p-2 m-2 border-2 border-red-400 rounded-md flex justify-between">
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </div>

      <div className="h-40 p-2 m-2 border-2 border-green-400 rounded-md flex justify-center items-center">
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </div>

      <div className="h-40 p-2 m-2 border-2 border-purple-400 rounded-md flex justify-around items-end">
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </div>

      <div className="h-40 p-2 m-2 border-2 border-orange-400 rounded-md flex justify-between items-center">
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </div>
    </>
  );
}

export default App;
