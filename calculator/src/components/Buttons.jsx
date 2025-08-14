import styles from "../assets/Buttons.module.css";

const Buttons = ({ displayButtonValue }) => {
  const buttons = [
    "C",
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
      {buttons.map((buttonName) => (
        <button
          className={styles.btn}
          key={buttonName}
          onClick={() => {
            displayButtonValue(buttonName);
          }}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
