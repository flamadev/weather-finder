import React from 'react';

const Filter = (props) => {
  return (
    <>
      <h1>Weather Finder</h1>
      <form className="filter">
        <input
          className="filter-input"
          onChange={props.handleInputSearch}
          value={props.searchInputValue}
          placeholder="Example: Argentina"
        />
      </form>
      <p className="text">Write your country and find out the weather</p>
    </>
  );
};

export default Filter;
