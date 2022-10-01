import React, { useEffect, useState } from 'react';
import Character from './Character';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="container">
      <div className="characters">
        {characters.map((character) => (
          <div className="box" key={character.id}>
            <Character character={character} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
