import React, { useEffect, useState } from 'react';
import Card from './Card';
import './App.css'; // Make sure to create some basic styles for the cards in App.css

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbxDWXNtx0A52O1O2fYdZNt-MYMkHdznbJ-RkJWp8PU_4xbIGd2ub_nSKkJ7DcMIA7lXcA/exec')
      .then((response) => response.json())
      .then((json) => {
        setData(json); // Assuming the response is an array, update the state
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Student data</h1>
      <div className="cards-container">
        {data.map((item, index) => (
          <Card key={index} title={item.Name} content={`Roll No: ${item['Roll No']}`} /> 
        ))}
      </div>
    </div>
  );
}

export default App;
