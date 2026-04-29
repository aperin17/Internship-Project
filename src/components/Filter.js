import '../App.css';

export default function Filter({ apartments, filteredApartments, setFilteredApartments }) {

    function handleOnChangeCity(e) {
        setFilteredApartments(apartments.filter(apartment => apartment.city.toLowerCase().includes(e.target.value.toLowerCase())));
    }

    return (
        <div className="filter-container">
            <input
                type="text"
                placeholder="Filter apartments..."
                value={apartments.search}
                onChange={handleOnChangeCity}
            />

        </div>
    );

};