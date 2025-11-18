const Button = ({ children, name }) => {
  function handleClick(name) {
    alert(`Thanks for ${children}, ${name}`);
  }

  return <button onClick={() => handleClick(name)}>{children}</button>;
};

export default Button;
