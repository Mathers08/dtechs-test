import React from 'react';
import './App.scss';
import { AddUser, Home, UserInfo } from "./pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<AddUser/>}/>
        <Route path="/users/:id" element={<UserInfo/>}/>
      </Routes>
    </div>
  );
};

export default App;
