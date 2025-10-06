import style from "./header.module.css";

const Header = () => {
  return (
    <>
      <div className={style.test}>Hello jaan</div>
      <button className={style.mybutton}>
        Hi kana karucha go mor job heigala
      </button>
      <button className={`${style.primary}`}>My Primary Button</button>
      <button className={`${style.secondary}`}>My Secondary Button</button>
    </>
  );
};

export default Header;
