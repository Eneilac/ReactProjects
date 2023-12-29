import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFacts } from './services/facts'


//Enunciado ejercicio:
//Recupera un hecho aleatorio de gatos de la primera api --> https://catfact.ninja/fact
//Despues muestra una imagen de un gato con la primera palabra del hecho recuperado usando la segunda api --> https://cataas.com/cat/says/hello 

function App() {
  //states
  const [fact, setFact] = useState()
  const [image, setImage] = useState()

  useEffect(() => {
    getRandomFacts().then(newFact => setFact(newFact))
  }, [])

  useEffect(() => {
    //en el caso de que fact venga vacio cortamos flujo
    if (!fact) return

    //Para sacar la primea palabra hacemos un split separando por los espacios y nos quedamos el primer elemento
    const firstWord = fact.split(' ')[0];
    //Peticion
    fetch(`https://cataas.com/cat/says/${firstWord}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Network response was not ok, status: ${res.status}`);
        }
        return res;
      })
      .then(data => {
        if (!data || !data.url) {
          throw new Error('Invalid JSON format or missing "url" property');
        }
        const { url } = data;
        setImage(url);
      })
    //IMPORTANTE: establecemos como dependencia el fact para que solo se realice el useEfect cuando se renderice este elemento
  }, [fact])



  const handleClick = async () => {
    const newFact = await getRandomFacts()
    setFact(newFact)
  }


  return (
    <main>
      <h1>Peticiones Fetch</h1>
      <button onClick={handleClick}>Obtener otro fact y otra imagen</button>
      <p><strong>Fact aleatorio:</strong> {fact && fact}</p>
      {image && <img src={image} alt='imagen de un gatito obtenida con la primera palabra de la primera api' />}
    </main>

  )
}

export default App
