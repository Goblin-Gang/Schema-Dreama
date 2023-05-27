import React, { useState, useEffect } from "react";

const dogs = [
    {name:'Seven', legs: 4, breed: "German Shepard", id: 1},
    {name:'Comet', legs: 4, breed: "Terrier", id: 2},
    {name:'DA', legs: 4, breed: "Coton de Tulear", id: 3}
]
function PastProjects(){
    let newDogId = Math.floor(Math.random() * 3)
    // [id, setId] = useState(1)


    const projects = dogs.map(dog => 
        <li 
            key = {dog.id}> 
            {dog.name}
        </li>
        );

    return (
        <header>
            <ul>{projects}</ul>
            
        </header>
    );
}

export default PastProjects;