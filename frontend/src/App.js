import React from 'react';
import './App.css';

function App() {
  const callApi = () => {
    fetch('http://localhost:3001/api') 
      .then(response => response.text())
      .then(data => {        
        alert(`Response from API: ${data}`);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        alert('An error occurred while fetching data from the API.');
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>EC2 Deployment Frontend</h1>
        <button onClick={callApi}>Button</button>
      </header>
    </div>
  );
}

export default App;
