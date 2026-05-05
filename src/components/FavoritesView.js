import '../App.css';
import React from 'react';
import ApartmentCard from './ApartmentCard';
import useStore from '../store/store.js';
import { useQuery } from '@tanstack/react-query';
import { getApartments } from '../api/api.js';
import Typography from '@mui/material/Typography';


export default function FavoritesView() {

    const favoriteIds = useStore((state) => state.favoriteIds);

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['apartments'],
        queryFn: getApartments,
    })


    if (isLoading) {
        return (<Typography className="loading" variant="h4">Loading...</Typography>);
    }

    if (isError) {
        return (<Typography variant="h5">Error: {error.message}</Typography>);
    }


    return (
        <div className="App">
            <Typography variant="h4" sx={{ mb: 3 }}>Favorites</Typography>

            {favoriteIds?.length
                ? data?.filter(apartment => favoriteIds.includes(apartment.id))
                    .map(apartment => (<ApartmentCard key={apartment.id} apartment={apartment} />))
                : <Typography className="no-favorite-apartments">No favorite apartments yet.</Typography>
            }
        </div >
    );

};

