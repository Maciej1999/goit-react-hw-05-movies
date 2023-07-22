import { useState } from 'react';
import { PropTypes } from 'prop-types';
import css from './Searchbar.module.css';

export const Searchbar = ({ searchHandle, query }) => {
  const [input, setInput] = useState(query || '');
  const inputHandle = e => setInput(e.target.value);
  const submitHandle = e => {
    e.preventDefault();
    searchHandle(input);
  };

  return (
    <div className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={submitHandle}>
        <button type="submit" className={css.button}>
          <span className={css.label}>🔍</span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          value={input}
          onInput={inputHandle}
          placeholder="Search for movies"
        />
      </form>
    </div>
  );
};

Searchbar.propTypes = {
  query: PropTypes.string,
  searchHandle: PropTypes.func.isRequired,
};
