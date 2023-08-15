import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function TableOfContents (){
    return (
        <>
        <ul className="tableOfConents">
          <a>
           <Link to="/Home/Overview">Overview</Link>
          </a>
          <a>
           <Link to="/Home/PostgresQL">PostgresSQL</Link>
          </a>
          <a>
           <Link to="/Home/NoSQL">NoSQL</Link>
          </a>
        </ul>

        </>
    );
}