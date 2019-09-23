import React from 'react';
import PropTypes from 'prop-types';

const CharacterList = props => {
  const {characters} = props;
  return(
    <ol className="characters__list">
    {characters.map(characterList => {
      return(
        <li className="character__List" key={characterList.id}>
          <div className="character__List-container">
            <h2 className="character__List-name">{characterList.name}</h2>
            <div className="character__img-container">
              <img src={characterList.image} alt={`imagen de ${characterList.name}`} className="character__img"/>
            </div>
            <p className="character__species">{characterList.species}</p>
          </div>
        </li>
      );
    })}
  </ol> 
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CharacterList;