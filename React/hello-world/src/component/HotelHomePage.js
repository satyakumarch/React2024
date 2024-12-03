// HotelHomepage.js

// 2. Develop a simple hotel homepage using React that includes components 
// and data as props to the HotelInfo component. Display the hotel name, address, 
// and prices. Include a "Book Now" button for each room type that triggers an action.




import React from 'react';
 import HotelInfo from './HotelInfo';

const HotelHomepage = () => {
  const hotelData = {
    name: 'Grand Hotel',
    address: '123 Main Street, Anytown USA',
    rooms: [
      { id: '1', type: 'Standard', price: 100 },
      { id: '2', type: 'Deluxe', price: 150 },
      { id: '3', type: 'Suite', price: 200 },
    ],
  };

  return (
    <div>
      <HotelInfo
        name={hotelData.name}
        address={hotelData.address}
        rooms={hotelData.rooms}
      />
    </div>
  );
};

export default HotelHomepage;
