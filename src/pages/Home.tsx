import React, { FC } from 'react';
import './index.scss';
import { UserCard } from "../component";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUsers } from "../redux/users/selectors";

const Home: FC = () => {
  const { users } = useSelector(selectUsers);

  return (
    <div className="wrapper">
      <h1>Список пользователей</h1>
      {users.length > 0
        ? <div className="list">
          {users.map(user => <UserCard key={user.id} {...user}/>)}
        </div>
        : <div className="empty-list">Список пользователей пуст</div>
      }
      <Link to="/user">
        <button className="outline-btn">Добавить пользователя</button>
      </Link>
    </div>
  );
};

export default Home;