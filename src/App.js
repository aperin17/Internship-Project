import './App.css';
import React from 'react';
import ApartmentListView from './components/ApartmentListView.js';
import ApartmentDetailsView from './components/ApartmentDetailsView.js';
import FavoritesView from './components/FavoritesView.js';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<ApartmentListView />} />
      <Route path="apartments/:apartmentId" element={<ApartmentDetailsView />} />
      <Route path="favorites" element={<FavoritesView />} />
    </Routes>
  );
}

export default App;
