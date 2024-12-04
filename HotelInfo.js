import React from "react";
import "./Hotel.css";
import { OrderedBulkOperation } from "mongodb";

const HotelInfo = ({ name, address, rooms }) => {
  const handleBooking = (roomType) => {
    alert(`Booking confirmed for ${roomType}!`);
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", margin: "20px" }}>
      <h1>{name}</h1>
      <p>{address}</p>
      <h3>Room Types & Prices:</h3>
      <ul>
        {rooms.map((room) => (
          <li key={room.type} style={{ marginBottom: "10px" }}>
            <strong>{room.type}</strong>: ${room.price} per night
            <button
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => handleBooking(room.type)}
            >
              Book Now
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelInfo;






























// crete a simple login form with fiels for email and pasword using controlled input in react .validate form to ensure tha email is 
// in the correct foramat and the password has at least 8 character before allowing submission.
// b) extend the form to display validation error message in real time as teh user types implement logic tom disable the ubmit bbutton if the
// validation citeriia are not met