import React, { useState } from 'react';
import data from './data.js';
import Tours from './components/Tours.js';
import './App.css';

function App() {
  const [tours, setTours] = useState(data);

  function remove(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length===0){
    return (
      <div className='refresh'>
        <h2>No tours left</h2>
        <button className='refresh-btn' onClick={() => setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div>
      <Tours tours={tours} remove={remove} />
    </div>
  );
}

export default App;
