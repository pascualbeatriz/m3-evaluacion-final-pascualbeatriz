import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = props => {
  const {routerProps, characters} = props;
  const getId = parseInt(routerProps.match.params.id);

  const characterDetail = characters.filter(detail => detail.id === getId);

  if(characterDetail[0]){
    const {name,status,species,origin,episode,image} = characterDetail[0];
      return(
        <Fragment>
          <Link to="/" className="character__List-Home-link"> Volver </Link>
            <h3 className="detail-name">{`Name: ${name}`}</h3>
            <p className="detail-status">{`Status: ${status}`}</p>
            <p className="detail-species">{`Species: ${species}`}</p>
            <p className="detail-origen">{`Origin: ${origin.name}`}</p>
            <p className="detail-episode">{`Episodes: ${episode.length}`}</p>
            <div className="container__detail-img">
              <img src={image} alt={`Imagen de ${name}`} className="detail_img"/> 
            </div>
        </Fragment>
      );
  }else{
    return(
      <Fragment>
        <p className="warning__messagge">Ese personaje no existe, intentalo de nuevo</p>
        <Link to="/" className="character__List-Home-link"> Volver </Link>
      </Fragment>
    );
  }
};

CharacterDetail.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  routerProps: PropTypes.object
};

export default CharacterDetail;