import React, { Component, useState, useEffect } from 'react';
import { HashRouter, BrowserRouter, Router, Route, Redirect, Routes } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import Overview from './pages/Overview.jsx'
import PostgreSQL from './pages/PostgreSQL.jsx';
import NoSQL from './pages/NoSQL.jsx';
import SchemaModel from './pages/SchemaModel.jsx';
import Login from './components/Authentication/Login.jsx';
import SignUp from './components/Authentication/SignUp.jsx'
import Team from './pages/Team.jsx';
import Contact from './pages/Contact.jsx';

export default function App(){
    return (
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="Overview" element={<Overview />} />
            <Route path="PostgreSQL" element={<PostgreSQL />} />
            <Route path="NoSQL" element={<NoSQL />} />
            <Route path="SchemaModel" element={<SchemaModel />} />
            <Route path="Login" element={<Login />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="Team" element={<Team />} />
            <Route path="Contact" element={<Contact />} />
          </Route>
        </Routes>
    );
}