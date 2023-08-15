import React from "react";
import { Link } from "react-router-dom";

export default function Footer (){

    return (
        <>
          <div>
            <ul>
              <a>
                <Link to="/Home/Team">Team</Link>
              </a>
              <a>
                <Link to="/Home/Contact">Contact Us</Link>
              </a>
            </ul>
          </div>
        </>
    );
}