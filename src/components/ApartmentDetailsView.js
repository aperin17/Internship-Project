import '../App.css';
import React from 'react';
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import img from "../images/apartment3.PNG";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useStore from '../store/store.js';
import Rating from "@mui/material/Rating";
import WifiIcon from '@mui/icons-material/Wifi';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import BalconyIcon from '@mui/icons-material/Balcony';
import AcUnitIcon from "@mui/icons-material/AcUnit";
import KitchenIcon from "@mui/icons-material/Kitchen";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TvIcon from "@mui/icons-material/Tv";
import HotTubIcon from "@mui/icons-material/HotTub";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function ApartmentDetailsView({ apartments }) {

    let params = useParams();

    const apartment = apartments?.find(
        (a) => a.id === Number(params.apartmentId)
    );

    const favoriteIds = useStore((state) => state.favoriteIds);
    const toggleFavorite = useStore((state) => state.toggleFavorite);


    return (
        <Container maxWidth="md" sx={{ marginTop: 4 }}>

            <Box sx={{ mb: 3, width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
                <Typography variant="h4">
                    {apartment.title} in {apartment.city}
                </Typography>
                {
                    !favoriteIds.includes(apartment.id)
                        ?
                        // Add to favorites button
                        < FavoriteBorderIcon onClick={() => toggleFavorite(apartment.id)} color="primary" > </FavoriteBorderIcon>
                        :
                        // Remove from favorites button
                        < FavoriteIcon onClick={() => toggleFavorite(apartment.id)} color="primary"> </FavoriteIcon>
                }
            </Box>

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

            <Typography variant="h6" color="primary" gutterBottom>
                {apartment.pricePerNight} {apartment.currency} / night
            </Typography>

            <Rating value={apartment.rating} precision={0.5} readOnly />

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
                        <Chip key={index} icon={amenityIcons[item] || null} label={item} />
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

const amenityIcons = {
    WiFi: <WifiIcon />,
    Klima: <AcUnitIcon />,
    Kuhinja: <KitchenIcon />,
    Parking: <LocalParkingIcon />,
    Balkon: <BalconyIcon />,
    Grejanje: <WhatshotIcon />,
    TV: <TvIcon />,
    Jacuzzi: <HotTubIcon />,
    View: <VisibilityIcon />,
};
