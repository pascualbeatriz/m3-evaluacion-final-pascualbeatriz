import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = props => {
  const {name,image,species} = props;
  return(
    <div className="character__List-container">
      <h2 className="character__List-name">{name}</h2>
      <div className="character__img-container">
        <img src={image} alt={`imagen de ${name}`} className="character__img"/>
      </div>
      <p className="character__species">{species}</p>
    </div>
    );
};

CharacterCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string
};


export default CharacterCard;