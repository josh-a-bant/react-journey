import "./App.css";

const Props = (props) => {
  const { children } = props;

  const { color, bgColor, height } = props;
  return (
    <div style={{ color: color, background: bgColor, height: height }}>
      <p>{children}</p>
    </div>
  );
};

function App() {
  return (
    <>
      <Props color="white" bgColor="purple" height={50}>
        Lorem, ipsum dolor.
      </Props>
      <Props color="purple" bgColor="lavender" height={50}>
        Lorem, ipsum dolor.
      </Props>
      <Props color="whitesmoke" bgColor="blue" height={50}>
        Lorem, ipsum dolor.
      </Props>
    </>
  );
}

export default App;
