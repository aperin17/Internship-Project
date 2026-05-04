import './App.css';
import React, { useEffect, useState } from 'react';
import ApartmentListView from './components/ApartmentListView.js';
import ApartmentDetailsView from './components/ApartmentDetailsView.js';
import { Routes, Route } from "react-router-dom";

function App() {

  // const { apartments, filteredApartments, setApartments, setFilteredApartments } = useStore()
  const [apartments, setApartments] = useState(null);
  const [filteredApartments, setFilteredApartments] = useState(null); //

  useEffect(() => {
    fetch('./apartments.json')
      .then(response => response.json())
      .then(apartments => {
        setApartments(apartments)
        setFilteredApartments(apartments) //
      })
      .catch(error => console.error('Error fetching apartments:', error));
  }, []);

  if (!apartments) {
    return <div>Loading...</div>;
  }
  if (!filteredApartments) {
    return <div>Loading filtered apartments...</div>;
  }


  return (
    <Routes>
      <Route path="/" element={<ApartmentListView apartments={apartments} filteredApartments={filteredApartments} setFilteredApartments={setFilteredApartments} />} />
      <Route path="apartments/:apartmentId" element={<ApartmentDetailsView apartments={apartments} />} />
    </Routes>
  );
}

export default App;
