import '../App.css';
import img from "../images/apartment3.PNG";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ApartmentCard({ apartment }) {

    return (
        <Card className="apartment-card" >
            <CardMedia
                component="img"
                image={img}
                sx={{
                    height: 140,
                    width: "100%",
                    objectFit: "cover"
                }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "16px" }}>
                    {apartment.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: "12px" }}>
                    {apartment.city}<br />
                    Address: {apartment.address}<br />
                    Number od guests: {apartment.guests}<br />
                    {apartment.pricePerNight} {apartment.currency}
                </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: "auto" }}>
                <Button size="small" sx={{ color: "primary.main" }} >Details</Button>
            </CardActions>
        </Card >
    );

};

