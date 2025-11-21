import Card from "./Card";

const LeftSide = ({ users }) => {
  return (
    <div className="flex gap-5 p-6 w-2/3 overflow-x-auto flex-nowrap">
      {users.map((user, idx) => (
        <Card key={idx} id={idx} user={user} />
      ))}
    </div>
  );
};

export default LeftSide;
