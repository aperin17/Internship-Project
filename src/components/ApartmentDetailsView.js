import '../App.css';
import React from 'react';
import { useParams } from "react-router";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import img from "../images/apartment3.PNG";

export default function ApartmentDetailsView({ apartments }) {

    let params = useParams();

    const apartment = apartments?.find(
        (a) => a.id === Number(params.apartmentId)
    );

    return (
        <Container maxWidth="md" sx={{ marginTop: 4 }}>

            <Box
                component="img"
                src={img}
                sx={{
                    width: "100%",
                    height: 400,
                    borderRadius: 2,
                    objectFit: "cover",
                    marginBottom: 3
                }}
            />

            <Typography variant="h4" gutterBottom>
                {apartment.title} in {apartment.city}
            </Typography>

            <Typography variant="h6" color="primary" gutterBottom>
                {apartment.pricePerNight} {apartment.currency} / night
            </Typography>

            <Typography variant="body2" sx={{ mb: 2 }}>
                ⭐ {apartment.rating} / 5
            </Typography>

            <Grid container spacing={2} sx={{ marginTop: 2 }}>

                <Grid item xs={6}>
                    <Typography><b>Address:</b> {apartment.address}</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography><b>Guests:</b> {apartment.guests}</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography><b>Bedrooms:</b> {apartment.bedrooms}</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography><b>Beds:</b> {apartment.beds}</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography><b>Bathrooms:</b> {apartment.bathrooms}</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography><b>Coordinates:</b> {apartment.lat}, {apartment.lng}</Typography>
                </Grid>
            </Grid>

            <Box sx={{ marginTop: 4 }}>
                <Typography variant="h6" gutterBottom>
                    Amenities
                </Typography>

                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {apartment.amenities.map((item, index) => (
                        <Chip key={index} label={item} />
                    ))}
                </Box>
            </Box>

            <Box sx={{ marginTop: 4 }}>
                <Typography variant="h6">Description</Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                    Opis.
                </Typography>
            </Box>

        </Container>
    );

};

