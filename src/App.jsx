import React, { useEffect, useState } from 'react';
import Card from './Card';
import './App.css'; // Make sure to create some basic styles for the cards in App.css

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycby2xrZ1wsll241kuY0kB4McVNX0nQ27foYkM4ChU-mVihulQ5IwaZDy6Qq_Q_2ya8N08A/exec')
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
          <Card key={index} name={item.Name} role={item.Roll} course={item.Course} year={item.Year} />
        ))}
      </div>
    </div>
  );
}

export default App;
