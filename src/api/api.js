import { apartments } from "./data.js";

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

//...update, delete...