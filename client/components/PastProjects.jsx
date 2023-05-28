import React, { useState, useEffect } from "react";


function PastProjects(){

    const url = "/getalldocuments";

    let count = 0;
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url, {
              method: "GET",
              headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
                 'Content-type': 'application/json; charset=UTF-8',
              },
              mode: 'cors'
        
            });
            const result = await response.json();
            console.log(result);
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