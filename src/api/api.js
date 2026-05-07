import { apartments } from "./data.js";
import { v4 as uuidv4 } from 'uuid';

//GET
export const getApartments = () =>
    new Promise((resolve, reject) => {
        if (!apartments?.length) {
            return setTimeout(() => reject(new Error('Apartments not found')), 250);
        }

        // setTimeout(() => resolve(apartments), 250);
        setTimeout(() => resolve([...apartments]), 250);
    });

export const getApartment = (id) =>
    new Promise((resolve, reject) => {
        const apartment = apartments.find(apartment => apartment.id === Number(id));

        if (!apartment) {
            return setTimeout(() => reject(new Error('Apartment not found')), 250);
        }

        setTimeout(() => resolve(apartment), 250);
    });

//POST
export const createApartment = (data) =>
    new Promise((resolve, reject) => {
        if (!data.title || !data.city || !data.address ||
            data.lat == null || data.lng == null ||
            data.pricePerNight == null || !data.currency ||
            data.guests == null || data.bedrooms == null || data.beds == null || data.bathrooms == null || data.rating == null) {
            //!newApartment.image || !newApartment.amenities) {
            reject(new Error('Not all information provided'));
        }
        const id = uuidv4();
        const newApartment = { id, ...data };

        // apartments = { ...apartments, [id]: newApartment };
        apartments.push(newApartment);

        setTimeout(() => resolve(true), 250);

    });