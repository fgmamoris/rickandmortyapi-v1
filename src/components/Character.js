import React, { Fragment } from 'react';

const Character = (props) => {
  /*console.log*/
  const { character } = props;

  return (
    <Fragment>
      <img
        className="img-character"
        src={character.image}
        alt={character.name}
      ></img>
      <div className="character">
        <h3 className="name"> {character.name}</h3>
        <p className="species"> {character.species}</p>
        <p className="status"> {character.status}</p>
      </div>
    </Fragment>
  );
};

export default Character;
