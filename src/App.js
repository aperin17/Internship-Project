// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Filter from './components/Filter';
import ApartmentCard from './components/ApartmentCard';

function App() {

  const [apartments, setApartments] = useState(null);
  const [filteredApartments, setFilteredApartments] = useState(null);

  useEffect(() => {
    fetch('./apartments.json')
      // .then(response => console.log(response))
      .then(response => response.json())
      .then(apartments => {
        setApartments(apartments)
        setFilteredApartments(apartments)
      })
      .catch(error => console.error('Error fetching apartments:', error));
  }, []);

  if (!apartments) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Filter apartments={apartments} filteredApartments={filteredApartments} setFilteredApartments={setFilteredApartments} />

      {filteredApartments.map(apartment => (<ApartmentCard key={apartment.id} apartment={apartment} />))}

    </div >
  );
}

export default App;
