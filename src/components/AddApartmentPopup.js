
export default function AddApartmentPopup({ setIsPopupOpen }) {

    return (<div className="overlay">
        <div className="popup" onClick={(e) => e.stopPropagation()}>





            <button onClick={() => setIsPopupOpen(false)}>
                Close
            </button>
        </div>
    </div>
    )
}