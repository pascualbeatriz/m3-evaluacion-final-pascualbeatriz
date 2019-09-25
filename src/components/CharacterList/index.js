import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';

const CharacterList = props => {
  const {characters,gap,gender,location} = props;
  return(
    <ol className="characters__list">
    {characters
    .filter(myCharacterLocation => myCharacterLocation.location.name.toUpperCase().includes(location.toUpperCase()))

    .filter(myCharacter => myCharacter.name.toUpperCase().includes(gap.toUpperCase()))
    .filter(item => {
      if (gender === 'all') {
        return true;
      } else {
        return gender === item.gender;
      }
    })
    .map(characterList => {
      return(
        <li className="character__List" key={characterList.id}>
          <Link to={`/character_detail/${characterList.id}`} className="character__List-link">
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