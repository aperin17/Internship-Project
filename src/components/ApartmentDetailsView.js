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
import { getApartment } from '../api/api.js';
import { useQuery } from '@tanstack/react-query'


export default function ApartmentDetailsView() {

    let params = useParams();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['apartment', params.apartmentId],
        queryFn: () => getApartment(params.apartmentId),
    })

    const favoriteIds = useStore((state) => state.favoriteIds);
    const toggleFavorite = useStore((state) => state.toggleFavorite);


    if (isLoading) {
        return (<Typography className="loading" variant="h4">Loading...</Typography>);
    }

    if (isError) {
        return (<Typography className="error" variant="h4">Error: {error.message}</Typography>);
    }


    return (
        <Container maxWidth="md" sx={{ marginTop: 4 }}>

            <Box sx={{ mb: 3, width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
                <Typography variant="h4">
                    {data.title} in {data.city}
                </Typography>
                {
                    !favoriteIds.includes(data.id)
                        ?
                        // Add to favorites button
                        < FavoriteBorderIcon onClick={() => toggleFavorite(data.id)} color="primary" > </FavoriteBorderIcon>
                        :
                        // Remove from favorites button
                        < FavoriteIcon onClick={() => toggleFavorite(data.id)} color="primary"> </FavoriteIcon>
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
                {data.pricePerNight} {data.currency} / night
            </Typography>

            <Rating value={data.rating} precision={0.5} readOnly />

            <Grid container spacing={2} sx={{ marginTop: 2 }}>

                <Grid xs={6}>
                    <Typography><b>Address:</b> {data.address}</Typography>
                </Grid>

                <Grid xs={6}>
                    <Typography><b>Guests:</b> {data.guests}</Typography>
                </Grid>

                <Grid xs={6}>
                    <Typography><b>Bedrooms:</b> {data.bedrooms}</Typography>
                </Grid>

                <Grid xs={6}>
                    <Typography><b>Beds:</b> {data.beds}</Typography>
                </Grid>

                <Grid xs={6}>
                    <Typography><b>Bathrooms:</b> {data.bathrooms}</Typography>
                </Grid>

                <Grid xs={6}>
                    <Typography><b>Coordinates:</b> {data.lat}, {data.lng}</Typography>
                </Grid>
            </Grid>

            <Box sx={{ marginTop: 4 }}>
                <Typography variant="h6" gutterBottom>
                    Amenities
                </Typography>

                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {data.amenities.map((item, index) => (
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
