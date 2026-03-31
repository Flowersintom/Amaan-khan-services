import React from 'react';
import './style.css'; // Assuming there's a separate CSS file for styling

const teamMembers = [
    { name: 'Amaan Khan', role: 'CEO' },
    { name: 'Afaan Khan', role: 'Manager' },
    { name: 'Junaid Ansari', role: 'Crew' },
    { name: 'Yaqoob Malik', role: 'Crew' },
    { name: 'Muzammil Hawladar', role: 'Carpenter' },
    { name: 'Shumun', role: 'Carpenter' }
];

const App = () => {
    return (
        <div>
            <header>
                <h1>FLOWERS INTERNATIONAL AND BUSINESS L.L.C</h1>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Gallery</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="team">
                    <h2>Our Team</h2>
                    <ul>
                        {teamMembers.map(member => (
                            <li key={member.name}>
                                {member.name} - {member.role}
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="services">
                    <h2>Services</h2>
                    <p>We offer a variety of carpentry services.</p>
                </section>
                <section className="packages">
                    <h2>Packages</h2>
                    <p>Basic and Premium packages available.</p>
                </section>
                <section className="gallery">
                    <h2>Gallery</h2>
                    <p>Check out our previous work.</p>
                </section>
                <section className="contact">
                    <h2>Contact Us</h2>
                    <form>
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <textarea placeholder="Your Message"></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default App;