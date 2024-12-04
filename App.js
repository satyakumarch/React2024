
// import React from "react";
// import "./App.css";
// import HotelInfo from "./Components/HotelInfo";
// const App = () => {
//   const hotelData = {
//     name: "Grand Stay Hotel",
//     address: "123 Luxury Lane, Paradise City",
//     rooms: [
//       { type: "Single Room", price: 100 },
//       { type: "Double Room", price: 150 },
//       { type: "Suite", price: 300 },
//     ],
//   };

//   return (
//     <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
//       <HotelInfo
//         name={hotelData.name}
//         address={hotelData.address}
//         rooms={hotelData.rooms}
//       />
//     </div>
//   );
// };

// export default App;



// import React, { useState } from "react";
// import "./App.css"; // Import CSS for styling

// const App = () => {
//   const [formData, setFormData] = useState({ name: "", email: "" });
//   const [welcomeMessage, setWelcomeMessage] = useState("");
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setWelcomeMessage(`Welcome, ${formData.name}!`);
//     setFormData({ name: "", email: "" }); // Reset form fields
//   };

//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <div className={isDarkMode ? "app dark-mode" : "app"}>
//       <div className="toggle-container">
//         <button onClick={toggleTheme} className="toggle-btn">
//           {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//         </button>
//       </div>
//       <form onSubmit={handleSubmit} className="form-container">
//         <h1>{isDarkMode ? "Dark Mode Form" : "Light Mode Form"}</h1>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="submit-btn">
//           Submit
//         </button>
//       </form>
//       {welcomeMessage && <p className="welcome-message">{welcomeMessage}</p>}
//     </div>
//   );
// };

// export default App;




// import React from "react";
// import StudentList from "./Components/StudentList";
// import "./App.css"; // Add CSS for styling

// const App = () => {
//   return (
//     <div className="app">
//       <StudentList />
//     </div>
//   );
// };

// export default App;



// import React, { useState } from "react";
// import LifecycleDemo from "./Components/LifecycleDemo";
// const App = () => {
//   const [showComponent, setShowComponent] = useState(true);

//   return (
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       <button onClick={() => setShowComponent(!showComponent)}>
//         {showComponent ? "Hide Component" : "Show Component"}
//       </button>
//       {showComponent && <LifecycleDemo />}
//     </div>
//   );
// };

// export default App;




//calculator code
// import React from "react";
// import Calculator from "./Components/Calculator";
// import "./App.css"; // Add styles for the calculator

// const App = () => {
//   return (
//     <div className="App">
//       <Calculator />
//     </div>
//   );
// };

// export default App;


//Home service and contact page
// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Home from "./Components/Home.js";
// import Service from "./Components/Service.js";
// import Contact from "./Components/Contact.js";
// import "./App.css";  // You can style the app here

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <nav>
//           <ul className="nav-links">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/service">Service</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>

//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/service" element={<Service />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;



//DataFetcher
// import React from "react";
// import DataFetcher from "./Components/DataFetcher"; // Import the DataFetcher component
// import "./App.css";

// const App = () => {
//   return (
//     <div className="App">
//       <h1>API Data Fetching Example</h1>
//       <DataFetcher />
//     </div>
//   );
// };

// export default App;


//CountDownTimer
// import React from "react";
// import CountdownTimer from "./Components/CountdownTimer"; // Import the CountdownTimer component
// import "./App.css";

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Countdown Timer Example</h1>
//       {/* Pass initial time in seconds (e.g., 60 seconds) */}
//       <CountdownTimer initialTime={60} />
//     </div>
//   );
// };

// export default App;



// import React from "react";
// import { Button } from "react-bootstrap"; // Import Button component from Bootstrap
// import WrestlerList from "./Components/WrestlerList"; // Import WrestlerList component
// import "./App.css"; // Import custom CSS

// const App = () => {
//   const contestName = "Ultimate Wrestling Showdown";
//   const wrestlers = [
//     "John Cena",
//     "The Rock",
//     "Stone Cold Steve Austin",
//     "Hulk Hogan",
//     "Randy Orton",
//     "Brock Lesnar",
//   ];

//   const handleContestClick = () => {
//     alert(`Welcome to the ${contestName}!`);
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4">{contestName}</h1>
//       <Button onClick={handleContestClick} variant="primary" className="mb-4">
//         Start Contest
//       </Button>
//       <WrestlerList wrestlers={wrestlers} /> {/* Pass wrestlers to WrestlerList */}
//     </div>
//   );
// };

// export default App;














import React from "react";
import LoginForm from "./Components/LoginForm";


const App = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default App;

