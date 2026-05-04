import '../App.css';
import img from "../images/apartment3.PNG";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useStore from '../store/store.js';


export default function ApartmentCard({ apartment }) {

    let navigate = useNavigate();
    const favoriteIds = useStore((state) => state.favoriteIds)
    const toggleFavorite = useStore((state) => state.toggleFavorite);


    return (
        <Card className="apartment-card" >
            <CardMedia
                component="img"
                image={img}
                sx={{
                    height: 150,
                    width: "100%",
                    objectFit: "cover"
                }}
            />
            <CardContent sx={{ overflow: "hidden" }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "16px" }}>
                    {apartment.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: "12px" }}>
                    {apartment.city}<br />
                    Address: {apartment.address}<br />
                    Number od guests: {apartment.guests}<br />
                    <b>{apartment.pricePerNight} {apartment.currency}</b>
                </Typography>
            </CardContent>
            <CardActions className="card-actions">
                <Button size="small" sx={{ color: "primary.main" }} onClick={() => navigate(`/apartments/${apartment.id}`)}>Details</Button>
                {
                    !favoriteIds.includes(apartment.id)
                        ?
                        // Add to favorites button
                        < FavoriteBorderIcon onClick={() => toggleFavorite(apartment.id)} color="primary" > </FavoriteBorderIcon>
                        :
                        // Remove from favorites button
                        < FavoriteIcon onClick={() => toggleFavorite(apartment.id)} color="primary"> </FavoriteIcon>

                }
            </CardActions >
        </Card >
    );

};

