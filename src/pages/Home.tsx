import React from 'react';
import './index.scss'
import { UserCard } from "../component";

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
    </div>
  );
};

export default Home;