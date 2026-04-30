import '../App.css';
import React from 'react';
import { useParams } from "react-router";

export default function ApartmentDetailsView() {

    let params = useParams();

    return (
        <div>{params.apartmentId}</div>

    );

};

