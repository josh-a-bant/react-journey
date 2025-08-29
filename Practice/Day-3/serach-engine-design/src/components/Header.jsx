import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between px-4 py-2 text-2xl bg-orange-300 text-orange-900">
      <div className="flex items-center">
        <div className="mx-4">About</div>
        <div className="mx-4">Store</div>
      </div>
      <div className="flex items-center">
        <div className="mx-4">Settings</div>
        <div className="mx-4">
          <FaUser className="text-3xl text-amber-600" />
        </div>
      </div>
    </div>
  );
};

export default Header;
