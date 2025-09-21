import { useEffect, useState } from "react";
import "./App.css";
import dayjs from "dayjs";

function App() {
  const [time, setTime] = useState(dayjs().format("HH:mm:ss"));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>Current time: {time}</p>
    </div>
  );
}

export default App;
