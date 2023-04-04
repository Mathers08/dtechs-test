import React from 'react';
import './App.scss';
import { AddUser, Home, UserInfo } from "./pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-user" element={<AddUser/>}/>
        <Route path="/user/:id" element={<UserInfo/>}/>
      </Routes>
    </div>
  );
};

export default App;
