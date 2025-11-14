import "./App.css";
import { Button } from "./Button";
import { Welcome } from "./Welcome";

function Component3() {
  return <h3>Lorem ipsum dolor sit amet.</h3>;
}

function App() {
  return (
    <>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <Welcome />
      <Component3 />
      <Button />
    </>
  );
}

export default App;
