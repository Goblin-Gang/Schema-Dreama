import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function TableOfContents (){
    return (
        <>
        <ul className="tableOfConents">
          <a>
           <Link to="/Overview">Overview</Link>
          </a>
          <a>
           <Link to="/PostgresQL">PostgresSQL</Link>
          </a>
          <a>
           <Link to="/NoSQL">NoSQL</Link>
          </a>
        </ul>
        </>
    );
}