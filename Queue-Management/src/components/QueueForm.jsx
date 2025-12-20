import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

const QueueForm = ({ addToQueue }) => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !service.trim()) return;

    addToQueue({ name, service });
    setName("");
    setService("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 border p-4"
    >
      <h2>Queue Form</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="outline-1"
        />
      </div>
      <div>
        <select value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">Select Service</option>
          <option value="consultaion">Consultation</option>
          <option value="payment">Payment</option>
          <option value="support">Support</option>
        </select>
      </div>
      <button
        type="submit"
        className="flex items-center justify-center border gap-2 py-1 w-full"
      >
        <FaUserPlus />
        Add customer
      </button>
    </form>
  );
};

export default QueueForm;
