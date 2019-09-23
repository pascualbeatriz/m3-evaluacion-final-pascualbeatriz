import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => {
  const {getInputValue, gap} = props;
  return (
    <div className="gap__search-container">
      <input type="text" className="gap__search" onChange={getInputValue} value={gap}/>
    </div>
  );
};

Filter.propTypes = {
  getInputValue:PropTypes.func,
  gap:PropTypes.string
}

export default Filter;