import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Form from './components/Form';

function App() {

  const [result, setResult] = useState(null)



  const handleFormSubmit = (formData) => {
    let url = formData.file.split('\\')[2];

    console.log(url)

    let data = {
      name: formData.name,
      lastname: formData.lastname,
      image: url
    }

    setResult(data)
  }


  
  return (
    <div className='container'>
      <h2>FORMULARIOS</h2>
      <Form onSubmit={handleFormSubmit} />
      {result &&
        <Content
          name={result.name}
          lastname={result.lastname}
          image={result.image}
        />}
    </div>
  );
}

export default App;
