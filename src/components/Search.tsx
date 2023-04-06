import React, { ChangeEvent, useRef } from 'react';
import './index.scss';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks';
import { selectUsers } from '../redux/users/selectors';
import { setSearchValue } from '../redux/users/slice';

const Search = () => {
  const dispatch = useAppDispatch();
  const { searchValue } = useSelector(selectUsers);
  const inputRef = useRef<HTMLInputElement>(null);

  const resetSearchValue = () => {
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
  };
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(setSearchValue(e.target.value));

  return (
    <div className="search">
      <svg
        className="icon"
        enableBackground="new 0 0 32 32"
        id="Glyph"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
          id="XMLID_223_"
        />
      </svg>
      <input
        type="text"
        ref={inputRef}
        value={searchValue}
        onChange={onInputChange}
        placeholder="Поиск"
        className="search__input"
      />
      {searchValue
        && (
          <svg
            className="close"
            onClick={resetSearchValue}
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="18" x2="6" y1="6" y2="18" />
            <line x1="6" x2="18" y1="6" y2="18" />
          </svg>
        )}
    </div>
  );
};

export default Search;
