import React, { Component, useState, useEffect } from 'react';
import { HashRouter, BrowserRouter, Router, Route, Redirect, Routes } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import Overview from './pages/Overview.jsx'
import PostgresSQL from './pages/PostgresSQL.jsx';
import NoSQL from './pages/NoSQL.jsx';
import SchemaModel from './pages/SchemaModel.jsx';


export default function App(){
    return (
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="Overview" element={<Overview />} />
            <Route path="PostgresSQL" element={<PostgresSQL />} />
            <Route path="NoSQL" element={<NoSQL />} />
            <Route path="SchemaModel" element={<SchemaModel />} />
          </Route>
        </Routes>
    );
}