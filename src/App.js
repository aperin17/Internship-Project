import './App.css';
import React, { useEffect, useState } from 'react';
import ApartmentListView from './components/ApartmentListView.js';
import ApartmentDetailsView from './components/ApartmentDetailsView.js';
import FavoritesView from './components/FavoritesView.js';
import { Routes, Route } from "react-router-dom";
import { getApartments } from './api/api.js';
import Typography from '@mui/material/Typography';

function App() {

  // const { apartments, filteredApartments, setApartments, setFilteredApartments } = useStore()
  const [apartments, setApartments] = useState(null);
  const [filteredApartments, setFilteredApartments] = useState(null); //
  const [loading, setLoading] = useState(true);

  const doGetApartments = React.useCallback(async () => {
    try {
      setLoading(true);
      const result = await getApartments();
      setApartments(result);
      setFilteredApartments(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    doGetApartments();
  }, [doGetApartments]);

  // const refetchApartments = async () => {
  //   await doGetApartments();
  // };

  if (loading) {
    return <Typography className="loading" variant="h4">Loading...</Typography>;
  }

  return (
    <Routes>
      <Route path="/" element={<ApartmentListView apartments={apartments} filteredApartments={filteredApartments} setFilteredApartments={setFilteredApartments} />} />
      <Route path="apartments/:apartmentId" element={<ApartmentDetailsView apartments={apartments} />} />
      <Route path="favorites" element={<FavoritesView apartments={apartments} />} />
    </Routes>
  );
}

export default App;
