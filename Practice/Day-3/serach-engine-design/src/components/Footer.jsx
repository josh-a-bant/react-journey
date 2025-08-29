import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex justify-between items-center p-3 bg-violet-200 text-violet-400 text-xl">
      <div>This site is not real</div>
      <div className="flex items-center">
        Made with <FaHeart className="mx-1 text-red-800" /> and{" "}
        <a
          href="https://tailwindcss.com/"
          className="mx-1 underline text-violet-600"
          target="_blank"
        >
          Tailwind
        </a>
      </div>
      <div>by Jashobanta Besra</div>
    </div>
  );
};

export default Footer;
