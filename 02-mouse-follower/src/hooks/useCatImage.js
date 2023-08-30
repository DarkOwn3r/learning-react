import { useEffect, useState } from "react"

export function useCatImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState()
  
    // get the image from the fact
    useEffect(() => {
      if(!fact) return
  
      const threeFirstWords = fact.split(' ', 3).join(' ')
      fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
     .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  
    }, [fact])
    
    return { imageUrl }
  } // CustomHook returns imageUrl