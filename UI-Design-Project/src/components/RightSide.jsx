import { ArrowUpRight } from "lucide-react";

const RightSide = () => {
  return (
    <div className="w-1/3 h-full flex flex-col justify-between px-8 py-0 overflow-hidden">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-bold">
          Prospective <br /> Customer <br /> Segmentation
        </h1>
        <p className="text-base font-semibold text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis
          pariatur perspiciatis excepturi rem blanditiis eum accusantium cum
          tenetur aliquid!
        </p>
      </div>
      <div>
        <ArrowUpRight size={90} />
      </div>
    </div>
  );
};

export default RightSide;
