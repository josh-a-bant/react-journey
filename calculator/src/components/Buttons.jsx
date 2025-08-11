import styles from "../assets/Buttons.module.css";

const Buttons = () => {
  const buttons = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.btnContainer}>
      {buttons.map((button) => (
        <button className={styles.btn}>{button}</button>
      ))}
    </div>
  );
};

export default Buttons;
