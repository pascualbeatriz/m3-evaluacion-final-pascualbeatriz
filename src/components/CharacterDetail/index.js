import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = props => {
  const {routerProps, characters} = props;
  const getId = parseInt(routerProps.match.params.id);

  const characterDetail = characters.filter(detail => detail.id === getId);
  console.log(characterDetail);
  const {name,status,species,origin,episode,image} = characterDetail[0];
  // tengo que pasarle name,status,origen,episode,imagen
  return(
    <Fragment>
    <Link to="/" className="character__List-Home-link"/>
      <h3 className="detail-name">{name}</h3>
      <p className="detail-status">{status}</p>
      <p className="detail-species">{species}</p>
      <p className="detail-origen">{origin.name}</p>
      <p className="detail-episode">{episode.length}</p>
      <div className="container__detail-img">
        <img src={image} alt={`Imagen de ${name}`} className="detail_img"/> 
      </div>
    
    </Fragment>
  );
};

CharacterDetail.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  routerProps: PropTypes.object
};

export default CharacterDetail;