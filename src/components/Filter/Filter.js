//import React from 'react';
///import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
//import { getFilter } from 'redux/contactsSlice';
import { getFilter } from '../../redux/phonebook/selectors';
import { filterChangeAction } from '../../redux/phonebook/actions';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleFilterChange = event =>
    dispatch(filterChangeAction(event.target.value));
  return (
    <div className={css.filterWrap}>
      <label className={css.label}>Find contact by name</label>
      <input
        className={css.input}
        value={value}
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
