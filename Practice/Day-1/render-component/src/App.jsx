import "./App.css";

const FirstComponen = () => {
  return <div>Lorem ipsum dolor sit amet.</div>;
};

const SecondComponent = () => {
  return (
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
      fugit!
    </div>
  );
};

function App() {
  return (
    <>
      <FirstComponen />
      <SecondComponent />
    </>
  );
}

export default App;
