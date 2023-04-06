import React, { FC } from 'react';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AddUser, Home, UserInfo } from './pages';

const App: FC = () => {
  return (
    <div className="app">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<AddUser />} />
        <Route path="/users/:id" element={<UserInfo />} />
      </Routes>
    </div>
  );
};

export default App;
