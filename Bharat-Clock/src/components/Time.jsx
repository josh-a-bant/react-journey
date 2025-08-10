import styles from "../assets/Time.module.css";

const Time = () => {
  const currentDate = new Date();
  return (
    <div>
      <p className={styles.time}>
        This is the current date and time :
        <span className={styles.currentTime}>
          {currentDate.toLocaleDateString()} -{" "}
          {currentDate.toLocaleTimeString()}
        </span>
      </p>
    </div>
  );
};

export default Time;
