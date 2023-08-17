import React, { Component, useState, useEffect } from 'react';
import { HashRouter, BrowserRouter, Router, Route, Redirect, Routes } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import Overview from './pages/Overview.jsx';
import OV1 from './pages/Overview/OV1.jsx'
import OV2 from './pages/Overview/OV2.jsx';
import OV3 from './pages/Overview/OV3.jsx';
import OV4 from './pages/Overview/OV4.jsx';
import OV5 from './pages/Overview/OV5.jsx';
import PostgreSQL from './pages/PostgreSQL.jsx';
import NoSQL from './pages/NoSQL.jsx';
import SchemaModel from './pages/SchemaModel.jsx';
// import Login from './components/Authentication/Login.jsx';
import Login from './pages/Login.jsx'
import SignUp from './components/Authentication/SignUp.jsx';
import Team from './pages/Team.jsx';
import Contact from './pages/Contact.jsx';



export default function App (){
    return (
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="Home" element={<Nav/>}>
            <Route index element={<Home />} />
              <Route path="Overview" > 
                <Route index element={<Overview/>}/>
                <Route path="OV1" element={<OV1 />} />
                <Route path="OV2" element={<OV2 />} />
                <Route path="OV3" element={<OV3 />} />
                <Route path="OV4" element={<OV4 />} />
                <Route path="OV5" element={<OV5 />} />
              </Route>
              <Route path="PostgreSQL" >
                <Route index element={<PostgreSQL />} />
                <Route path="PSQL1" element={<OV1 />} />
                <Route path="PSQL2" element={<OV2 />} />
                <Route path="PSQL3" element={<OV3 />} />
              </Route>
              <Route path="NoSQL" >
                <Route index element={<NoSQL />} />
                <Route path="NSQL1" element={<OV1 />} />
                <Route path="NSQL2" element={<OV2 />} />
                <Route path="NSQL3" element={<OV3 />} />
              </Route>
            <Route path="SchemaModel" element={<SchemaModel />} />
            <Route path="Team" element={<Team />} />
            <Route path="Contact" element={<Contact />} />
          </Route>
        </Routes>
    );
}