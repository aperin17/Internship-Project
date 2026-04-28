import '../App.css';

export default function ApartmentCard({ apartment }) {

    return (
        <div className="card">
            <div className="container">
                <h4><b>{apartment.title}</b></h4>
                <p>{apartment.city}</p>
                <p>{apartment.address}</p>
            </div>
        </div>
    );

};