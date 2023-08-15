import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function UnitTiles ({ unit, link, course }) {
  return (
    <>
      <div className="unitTiles">
        <div>
          <form>
            <input type="checkbox" id={`unit-${unit}`} name={`unit-${unit}`} value="done" />
          </form>
          <p>{unit}</p>
        </div>
        <div>
          <Link to={`/Home${course + link}`}>
            <button type="button">
              Complete
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
