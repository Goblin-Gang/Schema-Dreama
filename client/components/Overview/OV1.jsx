import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function OV1 () {
  return (
    <>
      <div className="unitTiles">
        <div>
          <form>
            <input type="checkbox" id="unit1" name="unit1" value="done" />
          </form>
          <p>What are Databases?</p>
        </div>
        <button>Complete</button>
      </div>
    </>
  );
}
