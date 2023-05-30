Schema Dreama is a developer tool to automate the process of creating Mongo DB schemas.   It's going to great. 



Sample :


import React, {useState, useEffect} from "react"
import JeremysSchema from "./components/JeremysSchema";
import "./styles.css";

export default function App() {

  const [current, setCurrent] = useState('') 

  const words = [
    {name: 'pizza'},
    {name: 'hainses chicken'},
    {name: 'pernil'}
  ]

  const wordElements = words.map(ele => {
    return <button
      id = {ele.name}
      onClick = {clickHandler}
    >
    {ele.name}
    
    </button>
  })

  function clickHandler(e) {
    console.log(e.target.id)
    setCurrent(e.target.id)
  }
 
  useEffect(()=> {
    console.log('hi')
  }, [current])
  
  //make a state for the current state initally set to ''
  //conditionally show jeremy's scehma based on a current state
  return (
    <div className="App">
      {wordElements}
      {current ? 
      <JeremysSchema word = {current} /> 
      : ""}
    </div>
  );
}
