"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Searchbar = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/details/${searchText}`);
    }
  };

  return (
    <div className="pl-2 pr-2 pb-5">
      <label className="mb-2 text-sm font-medium sr-only">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          name="searchText"
          type="search"
          id="default-search"
          className="block w-full p-6 pl-10 text-sm border border-gray-300 rounded-lg"
          placeholder="Search for a location"
          required
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleEnterKeyDown}
        />
      </div>
    </div>
  );
};

export default Searchbar;
