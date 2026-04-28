import '../App.css';
import React, { useState } from 'react';

export default function Filter({ apartments }) {

    const [city, setCity] = useState("");

    function handleOnChangeCity(e) {
        setCity(e.target.value);
    }

    return (
        <div>
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

