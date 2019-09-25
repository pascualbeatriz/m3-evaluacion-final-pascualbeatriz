import React, {Fragment} from 'react';
import CharacterList from '../CharacterList';
import Filter from '../Filter';
import PropTypes from 'prop-types';

const Home = props => {
  const {getInputValue, gap ,characters,gender,getGender,location,getLocation} = props;
  return(
    <Fragment>
    <Filter 
      getInputValue = {getInputValue}
      gap = {gap}
      gender = {gender}
      getGender = {getGender}
      location = {location}
      getLocation = {getLocation}
      />

    <CharacterList
      characters = {characters}
      gap = {gap}
      gender = {gender}
      location = {location}
      />   
    </Fragment>
  );
};

Home.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  getInputValue:PropTypes.func,
  gap:PropTypes.string,
  getGender: PropTypes.func
}

export default Home;