import style from "./Alert.module.css";
const Alert = ({ children, type }) => {
  return <div className={`${style.alert} ${style[type]}`}>{children}</div>;
};

export default Alert;
