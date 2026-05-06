import '../App.css';
import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import ApartmentCard from './ApartmentCard';
import { useQuery } from '@tanstack/react-query';
import { getApartments } from '../api/api.js';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddApartmentPopup from './AddApartmentPopup.js';

export default function ApartmentListView() {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['apartments'],
        queryFn: getApartments,
    })

    const [filteredApartments, setFilteredApartments] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        if (data) setFilteredApartments(data);
    }, [data]);


    if (isLoading) {
        return (<Typography className="loading" variant="h4">Loading...</Typography>);
    }

    if (isError) {
        return (<Typography variant="h5">Error: {error.message}</Typography>);
    }


    return (
        <div className="App">
            <Filter apartments={data} setFilteredApartments={setFilteredApartments} />

            <Box sx={{ mb: "12px", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
                <Typography variant="h5" component="div" sx={{ fontSize: "20px" }}>Apartments</Typography>

                <Button type="submit" variant="app" onClick={() => setIsPopupOpen(true)}>New apartment</Button>
                {isPopupOpen && (<AddApartmentPopup setIsPopupOpen={setIsPopupOpen} />)}

            </Box>

            {filteredApartments?.map(apartment => (<ApartmentCard key={apartment.id} apartment={apartment} />))}

        </div >
    );

};

