import './App.css';
import React from 'react';
import ApartmentListView from './components/ApartmentListView.js';
import ApartmentDetailsView from './components/ApartmentDetailsView.js';
import FavoritesView from './components/FavoritesView.js';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.js';
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  return (

    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ApartmentListView />} />
        <Route path="apartments/:apartmentId" element={<ApartmentDetailsView />} />
        <Route path="favorites" element={<FavoritesView />} />
      </Route>
    </Routes >

  );
}

export default App;
