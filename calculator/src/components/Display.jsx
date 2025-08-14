import styles from "../assets/Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <div>
      <input
        type="text"
        className={styles.displayInput}
        value={displayValue}
        readOnly
      />
    </div>
  );
};

export default Display;
