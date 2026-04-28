import '../App.css';

export default function Filter({ apartments, filteredApartments, setFilteredApartments }) {

    function handleOnChangeCity(e) {
        setFilteredApartments(apartments.filter(apartment => apartment.city.includes(e.target.value)));
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Filter apartments..."
                value={apartments.search}
                onChange={handleOnChangeCity}
            />

        </div>
    );

};