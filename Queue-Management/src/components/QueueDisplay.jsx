import React from "react";

function QueueDisplay({ queue, updateStatus, removeFromQueue }) {
  return (
    <div className="border p-4 w-4xl">
      <h1 className="mb-2">Queue Display</h1>

      {queue.length === 0 ? (
        <h2>0 Customer</h2>
      ) : (
        <div className="flex flex-col gap-2">
          {queue.map((customer) => (
            <div
              key={customer.id}
              className="border px-4 py-2 flex justify-between rounded"
            >
              <div>
                <h3>{customer.name}</h3>
                <p>{customer.service}</p>
                <span>{customer.status}</span>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  {customer.status === "waiting" && (
                    <button
                      className="border py-1 px-4 rounded bg-amber-300 text-shadow-lg"
                      onClick={() => updateStatus(customer.id, "serving")}
                    >
                      Serv
                    </button>
                  )}
                  {customer.status === "serving" && (
                    <button
                      className="border py-1 px-4 rounded bg-green-500 text-shadow-lg"
                      onClick={() => updateStatus(customer.id, "complete")}
                    >
                      Complete
                    </button>
                  )}
                </div>
                <button
                  onClick={() => removeFromQueue(customer.id)}
                  className=" border-black border text-shadow-lg py-1 px-4 rounded bg-blue-400 text-white"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QueueDisplay;
