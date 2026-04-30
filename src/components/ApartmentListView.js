import '../App.css';
// import React, { useEffect, useState } from 'react';
import React from 'react';
import Filter from './Filter';
import ApartmentCard from './ApartmentCard';
// import useStore from './store/store.js'

export default function ApartmentListView({ apartments, filteredApartments, setFilteredApartments }) {

    // // const { apartments, filteredApartments, setApartments, setFilteredApartments } = useStore()
    // const [apartments, setApartments] = useState(null);
    // const [filteredApartments, setFilteredApartments] = useState(null); //

    // useEffect(() => {
    //     fetch('./apartments.json')
    //         .then(response => response.json())
    //         .then(apartments => {
    //             setApartments(apartments)
    //             setFilteredApartments(apartments) //
    //         })
    //         .catch(error => console.error('Error fetching apartments:', error));
    // }, []);

    // if (!apartments) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className="App">
            {/* <Filter /> */}
            {/* <Filter apartments={apartments} /> */}
            <Filter apartments={apartments} setFilteredApartments={setFilteredApartments} />

            {filteredApartments?.map(apartment => (<ApartmentCard key={apartment.id} apartment={apartment} />))}

        </div >
    );

};

