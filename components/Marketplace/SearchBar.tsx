import { FiSearch } from "react-icons/fi";

const SearchBar = ({
  setSearch,
  search,
}: {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
}) => {
  return (
    <div className="relative w-fit mx-auto">
      <input
        id="search-items"
        placeholder="ここでアイテムを検索"
        className="outline-none text-[#f2f2f2] font-medium w-full py-4 px-6 rounded-full text-xl border-2
        border-[#2E314F] bg-[#1619299d] md:w-126"
        spellCheck={false}
        type="text"
        name="search-items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <FiSearch className="text-[#f2f2f2] absolute top-1/2 -translate-y-1/2 right-5 text-3xl" />
    </div>
  );
};

export default SearchBar;
