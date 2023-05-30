import React, { useState} from "react";
import PastProjects from "./PastProjects";


const styles = {
    color:'blue', 
    display: "flex",
    height: 100,
    width: 500,
    boxShadow: "0 5px 5px 2px #cec7c759",
    border: "1px solid #ccc",
    borderRadius: 20
  }

function Container(props){
    const [currDoc, setCurrDoc] = useState('');

    function documentUpdater(propsData){
        setCurrDoc(propsData)
    }
return(
    <>
    <span  className="container">
        <PastProjects documentUpdater={documentUpdater} />
        
    </span>
    <span>
        <InputButton />
    </span>
    </>
)
}

export default Container;