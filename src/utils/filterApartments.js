export const filterApartments = (apartments, filterList) => {
    return apartments.filter(apartment => (
        apartment.city?.toLowerCase().includes(filterList.city.toLowerCase())
        &&
        Number(apartment.pricePerNight) <= (filterList.maxPrice === "" ? Infinity : Number(filterList.maxPrice))
        &&
        Number(apartment.guests) >= (filterList.guests === "" ? 1 : Number(filterList.guests))
    ))
}