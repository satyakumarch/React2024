import React from 'react';
import './Body.css'; // Assuming you will create a CSS file for styling

function Body() {
    return (
        <div className="body">
            <section id="home" className="section">
                <h1>Welcome to Our Professional Recommendation Website</h1>
                <p>Our platform is dedicated to connecting you with top professionals in various fields, ensuring you receive the best recommendations tailored to your needs.</p>
                <div className='about'>

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfBrJAPMvKHQxga0oc-c0M5KGddZ6eBrC2mQ&s"/>
                </div>

            </section>
            <section id="about" className="section">
                <h2>About Us</h2>
                <p>We are a trusted source for professional recommendations, with a network of experts across multiple industries.</p>
                <p>Our website is highly recommended by industry leaders, clients, and professionals for its reliability and comprehensive database of experts.</p>
                <p>We believe in providing personalized recommendations to help you find the right professional for your specific requirements.</p>
                <div className="gallery">
                    <h3>Gallery</h3>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfBrJAPMvKHQxga0oc-c0M5KGddZ6eBrC2mQ&s"/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcq9mYf0YK08g0arGjaca3WLfyZ2UrTmowZQ&s" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPaV8GjcqADSwnZq8UOA1BcA_qWZwDKRzT2g&s" />
                </div>
            </section>
            <section id="services" className="section">
                <h2>Our Services</h2>
                <p>We offer a wide range of services to help you find the best professionals, including personalized consultations and detailed profiles.</p>
            </section>
            <section id="contact" className="section">
                <h2>Contact Us</h2>
                <p>Feel free to reach out to us for any inquiries or further information.</p>
            </section>
        </div>
    );
}

export default Body;