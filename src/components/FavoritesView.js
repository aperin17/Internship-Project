import '../App.css';
import React from 'react';
import ApartmentCard from './ApartmentCard';
import useStore from '../store/store.js';
import Typography from '@mui/material/Typography';

export default function FavoritesView({ apartments }) {

    const favoriteIds = useStore((state) => state.favoriteIds);

    return (
        <div className="App">
            <Typography variant="h4" sx={{ mb: 3 }}>Favorites</Typography>

            {favoriteIds?.length
                ? apartments?.filter(apartment => favoriteIds.includes(apartment.id))
                    .map(apartment => (<ApartmentCard key={apartment.id} apartment={apartment} />))
                : <Typography className="no-favorite-apartments">No favorite apartments yet.</Typography>
            }
        </div >
    );

};

