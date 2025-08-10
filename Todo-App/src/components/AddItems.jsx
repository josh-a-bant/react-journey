import React from "react";
import style from "../assets/css/AddItems.module.css";

const AddItems = () => {
  return (
    <div className={style.addItem}>
      <input type="text" placeholder="Enter Task" />
      <input type="date" />
      <button className={style.btn}>Add</button>
    </div>
  );
};

export default AddItems;
