import { useState } from "react";
import QueueForm from "./components/QueueForm";

function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
  };

  const updateStatus = (id, newStatus) => {
    setQueue(
      queue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer
      )
    );
  };

  const removeFromQueue = (id) => {
    setQueue(queue.filter((customer) => customer.id !== id));
  };

  return (
    <>
      <header className="flex flex-col gap-1 items-center mt-10">
        <h1 className="text-3xl text-indigo-600 font-semibold">
          Queue Management Application
        </h1>
        <p className="text-lg font-medium">Manage your customer efficiently</p>
      </header>

      <main className="flex gap-2 mt-4 justify-center">
        <QueueForm addToQueue={addToQueue} />
        <h2>quue Display</h2>
      </main>
    </>
  );
}

export default App;
