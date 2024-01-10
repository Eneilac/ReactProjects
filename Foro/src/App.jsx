import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Cards/Card'

function App() {

  const format = (userName) => `@${userName}`; //funcion que formatea el texto
  const [profiles, setProfiles] = useState(null);

  /**
   * El hook realiza la peticion cuando el componente se monta.
   */
  useEffect(() => {


    if(profiles === null){

    fetch("https://randomuser.me/api/?results=5") //traigo solo 5 perfiles
      .then(response => response.json())
      .then(data => {
        setProfiles(data.results);
      }
      )
      .catch(error => {
        console.error(error);
      })
    }
  }, [profiles])




  return (
    <div className="container">
      {profiles&&profiles.map((profile,index) => (
        <div key={index}>
          <Card
            formatUserName={format}
            className="tarjeta"
            userName={profile.name.first}
            name={profile.name.first}
            avatar={profile.picture.thumbnail}
          />
        </div>
      ))}   
    </div>
  )
}

export default App;
