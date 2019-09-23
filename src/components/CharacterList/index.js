import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';

const CharacterList = props => {
  const {characters,gap} = props;
  return(
    <ol className="characters__list">
    {characters
    .filter(myCharacter => myCharacter.name.toUpperCase().includes(gap.toUpperCase()))
    .map(characterList => {
      return(
        <li className="character__List" key={characterList.id}>
          <Link to="/character_detail" className="character__List-link">
          <CharacterCard 
          name = {characterList.name}
          image = {characterList.image}
          species = {characterList.species}
          />
          </Link>

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