"use client";

import SearchBar from "./SearchBar";
import ItemsList from "./ItemsList";
import Filters from "./Filters";

import { MarketPlaceData } from "@/data/Marketplace";
import { MarketplaceTypes } from "@/types/Marketplace";
import { useMemo, useState } from "react";

const MarketplaceClient = () => {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("all");

  const searchedItems = useMemo<MarketplaceTypes[]>(() => {
    return MarketPlaceData.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const filteredItems = useMemo<MarketplaceTypes[]>(() => {
    return searchedItems.filter((item) =>
      category === "all"
        ? true
        : item.category.toLowerCase() === category.toLowerCase(),
    );
  }, [searchedItems, category]);

  return (
    <>
      <section id="search-section">
        <div className="xl:container xl:mx-auto pt-32 pb-8 px-4">
          <SearchBar setSearch={setSearch} />
        </div>
      </section>

      <section id="filter-and-items-section">
        <div className="xl:container xl:mx-auto pt-8 pb-24 px-4 flex flex-col gap-y-20">
          <Filters setCategory={setCategory} category={category} />

          <ItemsList
            category={category}
            setCategory={setCategory}
            filteredItems={filteredItems}
          />
        </div>
      </section>
    </>
  );
};

export default MarketplaceClient;
