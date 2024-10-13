import React from 'react';
import './Body.css'; // Assuming you will create a CSS file for styling

function Body() {
    return (
        <div className="body">
            <section id="home" className="section">
                <h1>Welcome to Our School</h1>
                <p>Our school is committed to providing quality education and fostering a love for learning.</p>
            </section>
            <section id="about" className="section">
                <h2>About Us</h2>
                <p>We are a prestigious institution with a rich history of academic excellence and a vibrant community.</p>
            </section>
            <section id="courses" className="section">
                <h2>Our Courses</h2>
                <p>We offer a wide range of courses designed to cater to the diverse interests and needs of our students.</p>
            </section>
            <section id="contact" className="section">
                <h2>Contact Us</h2>
                <p>Feel free to reach out to us for any inquiries or further information.</p>
            </section>
        </div>
    );
}

export default Body;