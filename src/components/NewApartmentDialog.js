import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from "@mui/material/MenuItem";
import FormTextField from "./FormTextField";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { addApartment } from '../utils/addApartment.js';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const AMENITIES = [
    "WiFi",
    "Klima",
    "Kuhinja",
    "Parking",
    "Balkon",
    "Grejanje",
    "TV",
    "Jacuzzi",
    "View",
];

export default function NewApartmentDialog() {

    const [open, setOpen] = React.useState(false);

    const queryClient = useQueryClient();

    const methods = useForm({
        defaultValues: {
            title: "",
            city: "",
            address: "",
            lat: "",
            lng: "",
            pricePerNight: "",
            currency: "EUR",
            guests: "",
            bedrooms: "",
            beds: "",
            bathrooms: "",
            rating: "",
            amenities: [],
        },
    });

    const [snackbar, setSnackbar] = React.useState({
        open: false,
        message: "",
        severity: "success",
    });

    const showSnackbar = (message, severity = "success") => {
        setSnackbar({
            open: true,
            message,
            severity,
        });
    };

    const handleSnackbarClose = (_, reason) => {
        if (reason === "clickaway") return;
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    const mutation = useMutation({
        mutationFn: addApartment,
        onSuccess: async (newApartment) => {
            showSnackbar("Apartment successfully added!", "success");

            // queryClient.setQueryData(['apartments'], (oldData) => {
            //     if (!oldData) return [newApartment];

            //     return [...oldData, newApartment];
            // });

            queryClient.invalidateQueries({ queryKey: ['apartments'] })

            methods.reset();
            setOpen(false);
        },
        onError: (error) => {
            showSnackbar(
                error?.message || "Something went wrong",
                "error"
            );
        },
    });


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = async (data) => {
        const newApartmentData = {
            ...data,
            lat: Number(data.lat),
            lng: Number(data.lng),
            pricePerNight: Number(data.pricePerNight),
            guests: Number(data.guests),
            bedrooms: Number(data.bedrooms),
            beds: Number(data.beds),
            bathrooms: Number(data.bathrooms),
            rating: Number(data.rating),
        };

        console.log(newApartmentData);
        mutation.mutate(newApartmentData);
    };

    return (
        < React.Fragment >
            <Button variant="app" onClick={handleClickOpen}>New apartment</Button>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md" disableRestoreFocus>
                <DialogTitle>Add new apartment</DialogTitle>
                <DialogContent>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)} id="subscription-form" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                            <Box sx={{ display: "flex", gap: 2 }}>
                                <FormTextField
                                    name="title"
                                    label="Title"
                                    rules={{
                                        required: "Required field",
                                        minLength: { value: 3, message: "Title must be at least 3 characters" },
                                    }}
                                />
                            </Box>
                            <Box sx={{ display: "flex", gap: 2 }}>
                                <FormTextField
                                    name="city"
                                    label="City"
                                    rules={{ required: "Required field" }}
                                />
                                <FormTextField
                                    name="address"
                                    label="Address"
                                    rules={{ required: "Required field" }}
                                />
                            </Box>
                            <Box sx={{ display: "flex", gap: 2 }}>
                                <FormTextField
                                    name="lat"
                                    label="Latitude"
                                    rules={{
                                        required: "Required field",
                                        pattern: {
                                            value: /^-?\d+(\.\d+)?$/,
                                            message: "Invalid number",
                                        },
                                    }}
                                />
                                <FormTextField
                                    name="lng"
                                    label="Longitude"
                                    rules={{
                                        required: "Required field",
                                        pattern: {
                                            value: /^-?\d+(\.\d+)?$/,
                                            message: "Invalid number",
                                        },
                                    }}
                                />
                            </Box>
                            <Box sx={{ display: "flex", gap: 2 }}>
                                <FormTextField
                                    name="pricePerNight"
                                    label="Price per night"
                                    type="number"
                                    rules={{
                                        required: "Required field",
                                        min: { value: 1, message: "Min 1" },
                                    }}
                                />
                                <FormTextField
                                    name="currency"
                                    label="Currency"
                                    select
                                    rules={{ required: "Required field" }}
                                >
                                    <MenuItem value="EUR">EUR</MenuItem>
                                    <MenuItem value="USD">USD</MenuItem>
                                    <MenuItem value="RSD">RSD</MenuItem>
                                </FormTextField>
                            </Box>
                            <Box sx={{ display: "flex", gap: 2 }}>
                                <FormTextField
                                    name="guests"
                                    label="Number of guests"
                                    type="number"
                                    rules={{
                                        required: "Required field",
                                        min: { value: 0, message: "Min 0" },
                                    }}
                                />
                                <FormTextField
                                    name="bedrooms"
                                    label="Number of bedrooms"
                                    type="number"
                                    rules={{
                                        required: "Required field",
                                        min: { value: 0, message: "Min 0" },
                                    }}
                                />
                                <FormTextField
                                    name="beds"
                                    label="Number of beds"
                                    type="number"
                                    rules={{
                                        required: "Required field",
                                        min: { value: 0, message: "Min 0" },
                                    }}
                                />
                                <FormTextField
                                    name="bathrooms"
                                    label="Number of bathrooms"
                                    type="number"
                                    rules={{
                                        required: "Required field",
                                        min: { value: 0, message: "Min 0" },
                                    }}
                                />
                            </Box>
                            <Box sx={{ display: "flex", gap: 2 }}>
                                <Box sx={{ flex: 1 }}>
                                    <FormTextField
                                        name="rating"
                                        label="Rating"
                                        type="number"
                                        rules={{
                                            required: "Required field",
                                            min: { value: 0, message: "Min 0" },
                                            max: { value: 5, message: "Max 5" },
                                        }}
                                    />
                                </Box>
                                <Box sx={{ flex: 3 }}>
                                    <Controller
                                        name="amenities"
                                        control={methods.control}
                                        render={({ field }) => {
                                            const { value = [], onChange } = field;

                                            const handleChange = (option) => {
                                                if (value.includes(option)) {
                                                    onChange(value.filter((v) => v !== option));
                                                } else {
                                                    onChange([...value, option]);
                                                }
                                            };
                                            return (
                                                <FormControl>
                                                    <FormLabel>Amenities</FormLabel>
                                                    <FormGroup row>
                                                        {AMENITIES.map((option) => (
                                                            <FormControlLabel
                                                                key={option}
                                                                control={
                                                                    <Checkbox
                                                                        checked={value.includes(option)}
                                                                        onChange={() => handleChange(option)}
                                                                    />
                                                                }
                                                                label={option}
                                                            />
                                                        ))}
                                                    </FormGroup>
                                                </FormControl>
                                            );
                                        }}
                                    />
                                    {/* images */}
                                </Box>
                            </Box>
                        </form>
                    </FormProvider>
                </DialogContent>
                <DialogActions>
                    <Button variant="app" onClick={handleClose}>Cancel</Button>
                    <Button variant="app" type="submit" form="subscription-form" disabled={mutation.isLoading}>
                        {mutation.isLoading ? "Adding..." : "Submit"}
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity={snackbar.severity}
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </React.Fragment >
    )
}