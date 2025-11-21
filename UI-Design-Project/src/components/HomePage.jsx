import Header from "./Header";
import Main from "./Main";

const HomePage = ({ users }) => {
  return (
    <div>
      {/* <h1 className="bg-yellow-400 text-white text-center text-3xl">
        JK - Jagannath
      </h1> */}
      <Header />
      <Main users={users} />
    </div>
  );
};

export default HomePage;
