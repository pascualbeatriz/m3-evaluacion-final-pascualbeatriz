import React, {Fragment} from 'react';
import CharacterList from '../CharacterList';
import Filter from '../Filter';
import PropTypes from 'prop-types';

const Home = props => {
  const {getInputValue, gap ,characters, getType, type} = props;
  return(
    <Fragment>
    <Filter 
      getInputValue = {getInputValue}
      gap = {gap}
      getType = {getType}
      type = {type}
      />

    <CharacterList
      characters = {characters}
      gap = {gap}
      type = {type}
      />   
    </Fragment>
  );
};

Home.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  getInputValue:PropTypes.func,
  gap:PropTypes.string,
  getType:PropTypes.func,
  type:PropTypes.string
}

export default Home;