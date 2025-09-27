const Navbar = () => {
  return (
    <nav className="w-full bg-violet-900 text-violet-100 px-4 py-2">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-sm md:text-xl">Todo-App</div>
        <ul className="flex gap-4 md:gap-6 list-none ">
          <li className="cursor-pointer text-sm md:text-base hover:scale-110 hover:text-white transform transition-all duration-200">
            Home
          </li>
          <li className="cursor-pointer text-sm md:text-base hover:scale-110 hover:text-white transform transition-all duration-200">
            Your Task
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
