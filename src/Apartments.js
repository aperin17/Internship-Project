import './App.css';
import React, { useEffect, useState } from 'react';

export default function Apartments() {

    const [apartments, setApartments] = useState(null);
    const [city, setCity] = useState("");

    useEffect(() => {
        fetch('./apartments.json')
            // .then(response => console.log(response))
            .then(response => response.json())
            .then(apartments => setApartments(apartments))
            .catch(error => console.error('Error fetching apartments:', error));
    }, []);

    if (!apartments) {
        return <div>Loading...</div>;
    }

    function handleOnChangeCity(e) {
        setCity(e.target.value);
    }

    // console.log(city);
    // console.log(apartments);

    return (

        <div className="App">
            <input
                type="text"
                placeholder="Filter apartments..."
                value={apartments.search}
                onChange={handleOnChangeCity}
            />

            <div>
                {apartments.filter(apartments => apartments.city.includes(city)).map(apartment => (<div> {apartment.title} </div>))}
            </div>

        </div>
    );

};

