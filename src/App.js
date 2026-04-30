import './App.css';
import React from 'react';
import ApartmentListView from './components/ApartmentListView.js';

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<ApartmentListView />} />

    </Routes>
  );
}

export default App;
