import React, { useState } from "react";

export default function SearchCharacter({ characters, setFilteredCharacters }: any) {
  
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    // Prevent the default form submission behavior
    e.preventDefault(); 

    // Filter the characters based on the search query of name and house
    const filteredResults = characters.filter((character: any) =>
      character.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      character.house.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCharacters(filteredResults);
  };

  // Return the search form
  return (
    <div className="text-center my-20">
      <form onSubmit={handleSearch}>
        <input
          className="text-black border-2 border-[#DEDCDC] rounded-full px-3 py-2"
          type="text"
          placeholder="Search character..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-[#57707A] text-[#DEDCDC] rounded-full px-3 py-2 hover:bg-black/60"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
