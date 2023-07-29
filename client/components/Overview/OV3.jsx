import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function OV3 () {
  return (
    <>
      <div className="unitTiles">
        <form>
          <input type="checkbox" id="unit1" name="unit1" value="done" />
        </form>
        <p>What are Transactions?</p>
        <button>Complete</button>
      </div>
    </>
  );
}
