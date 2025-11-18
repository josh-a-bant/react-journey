const Button = ({ children, name }) => {
  const handleClick = (name) => {
    alert(`Thanks for ${children}, ${name}`);
  };

  return <button onClick={() => handleClick(name)}>{children}</button>;
};

export default Button;
