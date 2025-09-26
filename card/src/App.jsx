import "./App.css";
import { cards } from "./card";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-screen sm:max-w-2xl md:max-w-6xl mx-auto flex flex-col gap-10 justify-center items-center font-po font-poppins">
      <Header />

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 md:gap-6 p-6">
        {cards.map((card, index) => {
          return <Card key={index} card={card} />;
        })}
      </div>
    </div>
  );
}

export default App;
