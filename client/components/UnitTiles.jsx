import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function UnitTiles({ unit }) {
  return (
    <>
      <div className="unitTiles">
        <div>
          <form>
            <input type="checkbox" id={`unit-${unit}`} name={`unit-${unit}`} value="done" />
          </form>
          <p>{unit}</p>
        </div>
        <button>Complete</button>
      </div>
    </>
  );
}
