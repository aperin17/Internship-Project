import '../App.css';
import useStore from '../store/store.js'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Filter({ apartments, setFilteredApartments }) {

    // const { apartments, setFilteredApartments } = useStore()
    const filterList = useStore((state) => state.filterList)
    const setFilterList = useStore((state) => state.setFilterList);

    const filterApartments = () => {
        return setFilteredApartments(apartments.filter(apartment => (
            apartment.city.toLowerCase().includes(filterList.city.toLowerCase())
            &&
            Number(apartment.pricePerNight) <= (filterList.maxPrice === "" ? Infinity : Number(filterList.maxPrice))
            &&
            Number(apartment.guests) >= (filterList.guests === "" ? 1 : Number(filterList.guests))
        )))
    }

    return (
        <div className="filter-container">
            <h3>Filter apartments</h3>
            <Box component="form" className="filter-form" noValidate autoComplete="off" >
                <TextField className="filter-input" label="City" id="outlined-size-small" size="small" variant="outlined"
                    onChange={(e) => { setFilterList({ city: e.target.value }) }} />
                <TextField className="filter-input" label="Maximum price per night (EUR)" id="outlined-size-small" size="small" variant="outlined"
                    onChange={(e) => { setFilterList({ maxPrice: e.target.value }) }} />
                <TextField className="filter-input" label="Number of guests" id="outlined-size-small" size="small" variant="outlined"
                    onChange={(e) => { setFilterList({ guests: e.target.value }) }} />

                <Button className="app-button" variant="contained" size="small"
                    onClick={filterApartments}>Filter</Button>
            </Box>
        </div >
    );

};