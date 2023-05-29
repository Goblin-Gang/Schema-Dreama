import React, { useState, useEffect } from "react";

function InputButton(props){
  
    return (
        <div>
            <div>
            <input type="text" placeholder = "New Schema Name"/>
            </div>
            <div>
            <button type="reset" onClick = {props.handleClick.clearSchema}>Create Schema</button >
            </div>
        </div>
        
      );
}
export default InputButton;