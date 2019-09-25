import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => {
  const {getInputValue, gap, getType, type} = props;
  return (
    <div className="gap__search-container">
      <label htmlFor="" className="label__gap">
        <input type="text" className="gap__search" onChange={getInputValue} value={gap}/>
      </label>
      <label htmlFor="" className="label__type">
      Introduce el tipo
        <input type="text" className="gap__type" onChange={getType} value={type}/>
      </label>
    </div>
  );
};

Filter.propTypes = {
  getInputValue:PropTypes.func,
  gap:PropTypes.string,
  getType:PropTypes.func,
  type:PropTypes.string
}

export default Filter;