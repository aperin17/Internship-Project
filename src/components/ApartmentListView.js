import '../App.css';
import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import ApartmentCard from './ApartmentCard';
import { useQuery } from '@tanstack/react-query';
import { getApartments } from '../api/api.js';
import Typography from '@mui/material/Typography';


export default function ApartmentListView() {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['apartments'],
        queryFn: getApartments,
    })

    const [filteredApartments, setFilteredApartments] = useState(null);


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

            {filteredApartments?.map(apartment => (<ApartmentCard key={apartment.id} apartment={apartment} />))}

        </div >
    );

};

