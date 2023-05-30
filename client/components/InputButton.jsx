import React, { useState, useEffect } from "react";

function InputButton(props){
  
    const [formData, setFormData] = useState('')

    function handleClick(e) {
        e.preventDefault()
        props.schemaFunc.addName(formData)
        setFormData('')
    }
    return (
        <div>
            <div>
                <input type="text" placeholder="New Schema Name" value={formData} onChange={(e) => setFormData(e.target.value)} />
                <button onClick = {handleClick}>Set Name</button>
            </div>
            <div>
            <button type="reset" onClick = {props.schemaFunc.clearSchema}>Reset Schema</button >
            </div>
        </div>
        
      );
}
export default InputButton;