import { apartments } from "../api/data.js";

export const addApartment = (newApartment) =>
    new Promise((resolve, reject) => {
        try {
            const newId =
                apartments.length > 0
                    ? Math.max(...apartments.map(a => a.id)) + 1
                    : 1;

            console.log(newId);
            const apartmentToAdd = {
                ...newApartment,
                id: newId,
                image: "../images/apartment3.PNG",
            };

            apartments.push(apartmentToAdd);

            setTimeout(() => {
                resolve(apartmentToAdd);
            }, 250);
        } catch (error) {
            setTimeout(() => reject(error), 250);
        }
    });