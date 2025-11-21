import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt, commodi illum recusandae illo fugiat.",
      color: "royalblue",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "lightseagreen",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt, commodi illum recusandae illo fugiat.",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "orange",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt, commodi illum recusandae illo fugiat.",
      tag: "Underbanked",
    },
    {
      img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "pink",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt, commodi illum recusandae illo fugiat.",
      tag: "Underwear",
    },
    {
      img: "https://images.unsplash.com/photo-1748785826435-83c5062a5737?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt, commodi illum recusandae illo fugiat.",
      color: "black",
      tag: "Average",
    },
  ];

  return (
    <>
      <HomePage users={users} />
    </>
  );
}

export default App;
