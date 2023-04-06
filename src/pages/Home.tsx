import React, { FC } from 'react';
import './index.scss';
import { Search, UserCard } from "../components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUsers } from "../redux/users/selectors";
import { declination } from "../utils";

const Home: FC = () => {
  const { users, searchValue } = useSelector(selectUsers);
  const filteredUsers =
    users.filter(user => user.username.toLowerCase().includes(searchValue.toLowerCase()));

  const totalLength = filteredUsers.length;
  const declFind = declination(totalLength, ['Найдена', 'Найдены', 'Найдено']);
  const declUser = declination(totalLength, ['карточка', 'карточки', 'карточек']);

  const foundUsersCountInfo = totalLength === 0
    ? <h2 className="decl">Карточки не найдены</h2>
    : <h2 className="decl">{declFind} {totalLength} {declUser}</h2>;

  return (
    <div className="wrapper">
      <h1>Список пользователей</h1>
      {users.length > 0 && <Search/>}
      {searchValue && foundUsersCountInfo}
      {filteredUsers.length > 0
        && <div className="list">
          {filteredUsers.map(user => <UserCard key={user.id} {...user}/>)}
        </div>
      }
      <Link to="/user">
        <button className="outline-btn">Добавить пользователя</button>
      </Link>
    </div>
  );
};

export default Home;