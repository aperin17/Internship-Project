import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function NewApartmentDialog({ setIsPopupOpen }) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());

        const newApartmentData = {
            title: formJson.title,
            city: formJson.city,
            address: formJson.address,
            lat: formJson.lat,
            lng: formJson.lng,
            pricePerNight: formJson.pricePerNight,
            currency: formJson.currency,
            guests: formJson.guests,
            bedrooms: formJson.bedrooms,
            beds: formJson.beds,
            bathrooms: formJson.bathrooms,
            rating: formJson.rating,
            //...
        };

        console.log(newApartmentData);
        handleClose();
    };


    return (
        <React.Fragment>
            <Button variant="app" onClick={handleClickOpen}>New apartment</Button>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md" disableRestoreFocus>
                <DialogTitle>Add new apartment</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit} id="subscription-form" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <TextField
                                name="title"
                                label="Title"
                                sx={{ flex: 1 }}
                                size="small"
                            />
                        </Box>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <TextField
                                name="city"
                                label="City"
                                sx={{ flex: 1 }}
                                size="small"
                            />
                            <TextField
                                name="address"
                                label="Address"
                                sx={{ flex: 1 }}
                                size="small"
                            />
                        </Box>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <TextField
                                name="lat"
                                label="Latitude"
                                sx={{ flex: 1 }}
                                size="small"
                            />
                            <TextField
                                name="lng"
                                label="Longitude"
                                sx={{ flex: 1 }}
                                size="small"
                            />
                        </Box>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <TextField
                                name="pricePerNight"
                                label="Price per night"
                                sx={{ flex: 1 }}
                                size="small"
                            />
                            <TextField
                                name="currency"
                                label="Currency"
                                sx={{ flex: 1 }}
                                size="small"
                            />
                        </Box>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <TextField
                                name="guests"
                                label="Number of guests"
                                sx={{ flex: 1 }}
                                size="small"
                            />
                            <TextField
                                name="bedrooms"
                                label="Number of bedrooms"
                                sx={{ flex: 1 }}
                                size="small"
                            />
                            <TextField
                                name="beds"
                                label="Number of beds"
                                sx={{ flex: 1 }}
                                size="small"
                            />
                            <TextField
                                name="bathrooms"
                                label="Number of bathrooms"
                                sx={{ flex: 1 }}
                                size="small"
                            />
                        </Box>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <TextField
                                name="rating"
                                label="Rating"
                                sx={{ flex: 1 }}
                                size="small"
                            />
                            {/* images */}
                            {/* amenities */}
                        </Box>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button variant="app" onClick={handleClose}>Cancel</Button>
                    <Button variant="app" type="submit" form="subscription-form">Submit</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}