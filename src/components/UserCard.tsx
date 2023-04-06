import React, { FC } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Highlighted } from '../utils';
import { selectUsers } from '../redux/users/selectors';
import { IUser } from '../redux/users/types';

const UserCard: FC<IUser> = ({ id, username, firstName, lastName }) => {
  const { searchValue } = useSelector(selectUsers);

  return (
    <div className="card">
      <div className="card__info">
        <h2><Highlighted text={username} highlight={searchValue} /></h2>
        <h4>
          {firstName}
          {' '}
          {lastName}
        </h4>
      </div>
      <Link to={`/users/${id}`}>
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512
            114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25
            0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96
            256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75
            0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416
            256C416 260.9 414.6 270.7 406.6 278.6z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default UserCard;
