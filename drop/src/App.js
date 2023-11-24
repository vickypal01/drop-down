import React from 'react';
import './App.css';
import Dropdown from './dropdown/dropdown';

function App() {
  const items = ["HTML", "CSS", "ReactJS", "NodeJS"]

  return (
    <div className="App">
      <h2>Dropdown with React</h2>
      <Dropdown items={items} />
    </div>
  );
}

export default App;
