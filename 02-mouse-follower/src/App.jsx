import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
  const [fact, setFact] = useState('lorem ipsum cat fact whatver')
  const [imageUrl, setImageUrl] = useState('lorem ipsum cat fact whatver')

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const {fact} = data
        setFact(data.fact)
        const threeFirstWords = fact.split(' ', 3).join(' ')
        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
          const { url } = response
          setImageUrl(url)
        })
      })
  }, [])

  return (
    <main>
      <h1>Cat Facts App</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={[`Image extracted using the first three words from ${fact}`]}/>}
    </main>
  )
}
