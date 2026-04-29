import '../App.css';
import img from "../images/apartment3.PNG";

export default function ApartmentCard({ apartment }) {

    return (
        <div className="apartment-card">
            {/* <img src={apartment.image} alt="ApartmentImage"></img> */}
            <img src={img} alt="ApartmentImage"></img>
            <div className="apartment-data">
                <h4>{apartment.title}</h4>
                <p>{apartment.city}</p>
                <p>Address: {apartment.address}</p>
                <p>Number od guests: {apartment.guests}</p>
                <p>{apartment.pricePerNight} {apartment.currency}</p>
            </div>
        </div>
    );

};

