"use client";

import { MarketplaceFilterData } from "@/Data/Marketplace";

interface Props {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Filters = ({ category, setCategory }: Props) => {
  return (
    <div className="flex items-center flex-wrap gap-y-4 gap-x-12 justify-center mx-auto md:w-126">
      {MarketplaceFilterData.map((item, i) => (
        <span
          key={i}
          className={`font-medium text-lg cursor-pointer px-2
             ${
               category.toLowerCase() === item.toLowerCase()
                 ? "text-[#a95bf3]"
                 : " text-[#f2f2f2] hover:text-[#c69bef] transition duration-200"
             }`}
          onClick={() => setCategory(item.toLowerCase())}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Filters;
