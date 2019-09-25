import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => {
  const {getInputValue, gap, getGender, gender,location,getLocation} = props;
  return (
    <div className="gap__search-container">
      Name  <input type="text" className="gap__search" onChange={getInputValue} value={gap}/>
      Location  <input type="text" className="gap__search-location" onChange={getLocation} value={location}/> 

      <label>Género:</label>  
      <select id="gender" name="size" onChange={getGender}>
        <option value="all" defaultValue = {gender === 'all'}>all</option>
        <option value ="Female" defaultValue = {gender === 'Female'}>Female</option>
        <option value="Male" defaultValue = {gender === 'Male'}>Male</option>
        <option value="unknown" defaultValue = {gender === 'unknown'}>unknown</option>
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