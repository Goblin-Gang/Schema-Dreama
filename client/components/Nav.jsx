import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Nav (){
    return (
        <>
            <div className="nav">

              <div className="nav-left">

                <h3>SchemaDreama</h3>

                <nav className="nav-left-links">
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

              <div className="nav-right">
                <ul>
                  <a>
                      <Link to="/login">Login</Link>
                  </a>
                  <a>
                      <Link to="/features">Sign Out</Link>
                  </a>
                </ul>
              </div>

            </div>

            <Outlet />
        </>
    );
}