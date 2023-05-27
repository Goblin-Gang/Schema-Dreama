import React, { useState, useEffect } from "react";

function InputButton(){
  
    return (
        <div>
            <div>
            <input type="text" placeholder = "New Schema Name"/>
            </div>
            <div>
            <button type="reset">Create Schema</button >
            </div>
        </div>
        
      );
}
export default InputButton;