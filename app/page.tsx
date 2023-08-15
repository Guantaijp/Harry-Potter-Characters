'use client'

// imports
import { useState, useEffect } from "react"
import getAllCharacter from "./lib/getAllCharacters"
import Character from "./components/Character"
import SearchCharacter from "./components/SearchCharacter"

// main
export default function Home() {
  // states
  const [characters, setCharacters] = useState([])
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 30

  // useEffect hook to fetch characters
  useEffect(() => {
    const promise = getAllCharacter()
    promise.then((data) => {
      setCharacters(data)
      setFilteredCharacters(data)
    })
  }, [])

  // pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredCharacters.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold text-center mb-8">Harry Potter Characters</h1>
      <SearchCharacter characters={characters} setFilteredCharacters={setFilteredCharacters} />
      <Character character={currentItems} />
      <div className="flex justify-center my-8">
        <button
          className="bg-black text-white rounded-full px-3 py-2 hover:bg-black/60"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-4">
          {currentPage} of {Math.ceil(filteredCharacters.length / itemsPerPage)}
        </span>
        <button
          className="bg-black text-white rounded-full px-3 py-2 hover:bg-black/60"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastItem >= filteredCharacters.length}
        >
          Next
        </button>
      </div>
    </div>
  )
}
