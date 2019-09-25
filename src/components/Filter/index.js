import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => {
  const {getInputValue, gap, getGender,gender} = props;
  return (
    <div className="gap__search-container">
      <input type="text" className="gap__search" onChange={getInputValue} value={gap}/>
      <label>Género:</label>
      <select id="gender" name="size" onChange={getGender} value={gender}>
        <option value="all" >all</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="unknown">unknown</option>
      </select>
    </div>
  );
};

Filter.propTypes = {
  getInputValue:PropTypes.func,
  gap:PropTypes.string,
  getGender: PropTypes.func,
}

export default Filter;