import './App.css';
import React from 'react';
import ApartmentListView from './components/ApartmentListView.js';
import ApartmentDetailsView from './components/ApartmentDetailsView.js';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ApartmentListView />} />
      <Route path="apartments/:apartmentId" element={<ApartmentDetailsView />} />
    </Routes>
  );
}

export default App;
