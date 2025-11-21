import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

const Main = ({ users }) => {
  return (
    <div className="px-14 py-6 h-[85vh] flex gap-10">
      <RightSide />
      <LeftSide users={users} />
    </div>
  );
};

export default Main;
