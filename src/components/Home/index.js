import React, {Fragment} from 'react';
import CharacterList from '../CharacterList';
import Filter from '../Filter';
import PropTypes from 'prop-types';

const Home = props => {
  const {getInputValue, gap ,characters,gender} = props;
  return(
    <Fragment>
    <Filter 
      getInputValue = {getInputValue}
      gap = {gap}
      gender = {gender}
      />

    <CharacterList
      characters = {characters}
      gap = {gap}
      gender = {gender}
      />   
    </Fragment>
  );
};

Home.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  getInputValue:PropTypes.func,
  gap:PropTypes.string,
}

export default Home;