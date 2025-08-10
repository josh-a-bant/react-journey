import React from "react";
import style from "../assets/css/DisplayItems.module.css";

const DisplayItems = () => {
  const items = [
    {
      task: "Anniversary",
      dueDate: "25/08/2017",
    },
    {
      task: "Buy Milk",
      dueDate: "11/08/2017",
    },
    {
      task: "Home Work",
      dueDate: "11/08/2017",
    },
  ];
  return (
    <div>
      {items.map((item) => (
        <div key={item.task} className={style.displayContainer}>
          <div>{item.task}</div>
          <div>{item.dueDate}</div>
          <button className={style.btn}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default DisplayItems;
