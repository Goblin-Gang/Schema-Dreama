import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function OV2 () {
  return (
    <>
      <div className="unitTiles">
        <form>
          <input type="checkbox" id="unit1" name="unit1" value="done" />
        </form>
        <p>Types of Databases</p>
        <button>Complete</button>
      </div>
    </>
  );
}
