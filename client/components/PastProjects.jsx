import React, { useState, useEffect } from "react";


function PastProjects(props){
  
  const [data, setData] = useState([]);
 
    const url = "/getalldocuments";
    const tempData = [
      {
          "_id": "6472390fdbeb9b56b2f98835",
          "schemaSchema": "[{\"name\":\"GoblinGang\",\"type\":\"String\",\"require\":false}]",
          "title": "Goblin Schema1"
      },
      {
          "_id": "647240575ae09fd47062b9e3",
          "title": "Goblin Schema 2",
          "schemaSchema": "new schema",
          "__v": 0
      },
      {
          "_id": "647240618ae16081a1f88e38",
          "title": "Goblin Schema",
          "schemaSchema": "new schema",
          "__v": 0
      }]
   
      
  // console.log(data)
  const styles = {
    color:'blue', 
    display: "flex",
    height: 100,
    width: 500,
    boxShadow: "0 5px 5px 2px #cec7c759",
    border: "1px solid #ccc",
    borderRadius: 20
  }
  //1. you want to get the document id when they click on the link
  //2. make a fetch request based on the id
  //3. display the SchemaMaker
  const dataElements = data.map(item => (
    <li key={item._id}
    onClick = {()=> props.updateState(item)}
    > 
        {item.title}
     
    </li>
  ));

  useEffect(() => {
    setData(tempData) 
  },[])
    // useEffect(() => {
    //     const fetchData = async () => {
    //       const controller = new AbortController();
    //       try {
    //         const response = await fetch(url, {
    //           method: "GET",
    //           headers: {
    //             'Access-Control-Allow-Origin': 'http://localhost:3000/',
    //              'Content-type': 'application/json; charset=UTF-8',
    //           },
    //           signal: controller.signal,
    //           mode: 'cors'
        
    //         });
    //         const result = await response.json();
    //         console.log(result);
    //         setData(result);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //       return () => controller.abort();
    //     };
    
    //     fetchData();
    //   }, []);
    return ( <>
    <h2>Saved Schemas</h2>
    <div style={styles}>
        
        <span className="data-container" >
          <ul className="list">
            {dataElements}
          </ul>
        </span>
    </div>
    </>
      );

}

export default PastProjects;