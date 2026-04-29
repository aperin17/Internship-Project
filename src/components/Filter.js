import '../App.css';
import useStore from '../store/store.js'

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
            <input
                type="text"
                placeholder="City"
                id="city"
                onChange={(e) => { setFilterList({ city: e.target.value }) }}
            />
            <input
                type="text"
                placeholder="Maximum price per night (EUR)"
                id="maxPrice"
                onChange={(e) => { setFilterList({ maxPrice: e.target.value }) }}
            />
            <input
                type="text"
                placeholder="Number of guests"
                id="guests"
                onChange={(e) => { setFilterList({ guests: e.target.value }) }}
            />

            <button onClick={filterApartments}>Search</button>

        </div >
    );

};