import '../App.css';
import useStore from '../store/store.js';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { filterApartments } from '../utils/filterApartments.js'


export default function Filter({ apartments, setFilteredApartments }) {

    const setFilterList = useStore((state) => state.setFilterList);


    const handleClickOnFilterButton = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const filters = {
            city: formData.get("city") || "",
            maxPrice: formData.get("maxPrice") || "",
            guests: formData.get("guests") || ""
        };

        setFilterList(filters);

        setFilteredApartments(filterApartments(apartments, filters))
    };


    return (
        <div className="filter-container">
            <Typography variant="h5" component="div" sx={{ fontSize: "20px", marginBottom: "12px" }}>
                Filter apartments
            </Typography>
            <Box component="form" className="filter-form" onSubmit={handleClickOnFilterButton} noValidate autoComplete="off" >

                <TextField className="filter-input" name="city" label="City" fullWidth id="outlined-size-small" size="small" variant="outlined" />
                <TextField className="filter-input" name="maxPrice" label="Maximum price per night (EUR)" fullWidth id="outlined-size-small" size="small" variant="outlined" />
                <TextField className="filter-input" name="guests" label="Number of guests" fullWidth id="outlined-size-small" size="small" variant="outlined" />

                <Button type="submit" className="app-button" variant="contained" size="small">Filter</Button>

            </Box>
        </div >
    );

};