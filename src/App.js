// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Filter from './components/Filter';

function App() {
  const [apartments, setApartments] = useState(null);

  useEffect(() => {
    fetch('./apartments.json')
      // .then(response => console.log(response))
      .then(response => response.json())
      .then(apartments => setApartments(apartments))
      .catch(error => console.error('Error fetching apartments:', error));
  }, []);

  if (!apartments) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Filter apartments={apartments} />
    </div >
  );
}

export default App;
