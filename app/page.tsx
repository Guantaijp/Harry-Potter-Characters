'use client'

// imports
import { useState, useEffect } from "react"
import getAllCharacter from "./lib/getAllCharacters"
import Character from "./components/Character"


// main
export default function Home() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getAllCharacter().then((data) => setCharacters(data))
  }, [])


  return (
   <>
   <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Harry Potter Characters</h1>
      <Character character={characters} />
    </div>

   </>
  )
}
