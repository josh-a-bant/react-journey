const Button = ({ children, click, name }) => {
  return <button onClick={() => click(name)}>{children}</button>;
};

export default Button;
