import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from '../CharacterCard';

const CharacterList = props => {
  const {characters} = props;
  return(
    <ol className="characters__list">
    {characters.map(characterList => {
      return(
        <li className="character__List" key={characterList.id}>
          <CharacterCard 
          name = {characterList.name}
          image = {characterList.image}
          species = {characterList.species}
          />
        </li>
      );
    })}
  </ol> 
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CharacterList;