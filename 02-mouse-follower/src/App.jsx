import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

const useCatFact = () => {
  const [fact, setFact] = useState()
  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))}
    useEffect(refreshFact, [])
  return { fact, refreshFact }
}

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async() => {
    refreshFact()
  }

  return (
    <main>
      <h1>Cat Facts App</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={[`Image extracted using the first three words from ${fact}`]}/>}
    </main>
  )
}
