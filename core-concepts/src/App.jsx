import "./App.css";
import { Button } from "./Button";
import Alert from "./components/Alert";
import { Welcome } from "./Welcome";

function Component3() {
  return <h3>Lorem ipsum dolor sit amet.</h3>;
}

function App() {
  return (
    <>
      <h1>Hi</h1>
      {/* <h1>Lorem ipsum dolor sit amet.</h1>
      <Welcome />
      <Component3 />
      <Button /> */}

      <Alert type="success">JK</Alert>
    </>
  );
}

export default App;
