import React from "react";
import { Link } from "react-router-dom";

export default function Footer (){

    return (
        <>
          <div>
            <ul>
              <a>
                <Link to="/Team">Team</Link>
              </a>
              <a>
                <Link to="/Contact">Contact Us</Link>
              </a>
            </ul>
          </div>
        </>
    );
}