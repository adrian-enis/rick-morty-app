import logo from './logo.svg';
import imageRickMorty from './img/rick-morty.png';
import './App.css';

import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null); // agregando un estado
  const reqApi =  async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");// hace la peticion
    const characterApi = await api.json();//agregamos una constante al const api anterios y, le agregamos un json.
    setCharacters(characterApi.results); // muestra el resultado de la api  
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>

        {characters ? (
           <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className='img-home' />
            <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
          </>
        )}
      </header>

    </div>
  );
}

export default App;
