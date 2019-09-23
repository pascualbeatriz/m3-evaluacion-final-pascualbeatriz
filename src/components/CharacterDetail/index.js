import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

// import PropTypes from 'prop-types';

const CharacterDetail = () => {
  const {characters} = props;
  // tengo que pasarle name,status,origen,episode,imagen
  return(
    <Fragment>
    <Link to="/" className="character__List-Home-link">
      <div className="container__detail">Hola!</div>
    </Link>
    </Fragment>
  );
};

export default CharacterDetail;