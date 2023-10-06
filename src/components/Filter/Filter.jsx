import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterSet, getFilter } from 'redux/filterSlise';
import css from './Filter.module.css';
export const Filter = () => {
  const dispatch = useDispatch();

  const filterPhoneBook = useSelector(getFilter);

  const onChangeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(filterSet(value));
  };

  return (
    <div>
      <label className={css.label}>
        Find contacts by name:
        <input
          className={css.input}
          name="filter"
          type="text"
          value={filterPhoneBook}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
};
