import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Nav (){


    return (
        <>
            <div className="nav">

              <div className="navLeft">

                <h3>SchemaDreama</h3>

                <nav className="navLeftLinks">
                  <ul>
                      <a>
                          <Link to="/">Home</Link>
                      </a>
                      <a>
                          <Link to="/SchemaModel">Schema Model</Link>
                      </a>
                  </ul>
                </nav>
              </div>

              <div className="navRight">
                <ul>
                  <a>
                      <Link to="/login">Login</Link>
                  </a>
                  <a>
                      <Link to="/">Sign Out</Link>
                  </a>
                </ul>
              </div>

            </div>

            <Outlet />
        </>
    );
}