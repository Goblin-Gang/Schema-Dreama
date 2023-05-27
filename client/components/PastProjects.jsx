import React, { useState, useEffect } from "react";


function PastProjects(){

    const url = "https://jsonplaceholder.typicode.com/posts";

    let count = 0;
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    return (
        <span className="data-container">
          <ul>
            {data &&
              data.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
          </ul>
        </span>
      );

}

export default PastProjects;