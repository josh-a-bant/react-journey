import "./App.css";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <>
      <div className="min-h-screen w-full relative bg-black flex justify-center items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
          }}
        />

        <div className="relative z-10">
          <LoginPage />
        </div>
      </div>
    </>
  );
}

export default App;
