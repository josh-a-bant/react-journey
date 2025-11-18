const Button = ({ children }) => {
  const name = "JK";
  function handleClick() {
    alert(`Thanks for ${children}, ${name}`);
  }

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
