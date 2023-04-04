import React from 'react';
import './index.scss'
import { UserCard } from "../component";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='wrapper'>
      <h1>Список пользователей</h1>
      <div className='list'>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
      </div>
      <Link to='/add-user'>
        <button className='outline-btn'>Добавить пользователя</button>
      </Link>
    </div>
  );
};

export default Home;