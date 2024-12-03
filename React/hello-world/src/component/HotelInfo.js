import React from 'react';
import './hotelinfo.css';

const HotelInfo = ({ name, address, rooms }) => {
  const handleBooking = (roomType) => {
    alert(`You have booked a ${roomType} room!`);
  };

  return (
    <div className='hotelhome'>
      <h2>Hotel Details</h2>
      <p><strong>Address:</strong> {address}</p>
      <h3>Available Rooms</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {rooms.map((room) => (
          <li
            key={room.id}
            style={{
                backgroundColor: '#f959f6',
              marginBottom: '10px',
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            <strong>{room.type}</strong> - ${room.price}/night
            <button
              onClick={() => handleBooking(room.type)}
              style={{
                
                marginLeft: '10px',
                padding: '5px 10px',
                backgroundColor: '#908bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
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
