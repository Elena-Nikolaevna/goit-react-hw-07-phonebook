//import React from 'react';
///import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div className={css.filterWrap}>
      <label className={css.label}>Find contact by name</label>
      <input
        className={css.input}
        value={filter}
        type="text"
        onChange={handleFilterChange}
      ></input>
    </div>
  );
};


/* Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}; */
