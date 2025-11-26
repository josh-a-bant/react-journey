import React from "react";

const Console = () => {
  localStorage.setItem("JK", ["jagannath", "subhadra", "balabhadra"]);
  localStorage.setItem("JJ", ["jasho", "jyoti"]);

  // const names = localStorage.getItem("JK");

  localStorage.removeItem("JJ");
  // console.log(names);

  // localStorage.clear();

  return <div>JK - Jagannath</div>;
};

export default Console;
