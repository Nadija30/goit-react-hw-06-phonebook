import React from 'react';
import css from './Filter.module.css';
export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <label className={css.label}>
        Find contacts by name:
        <input
          className={css.input}
          name="filter"
          type="text"
          value={filter}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
};
