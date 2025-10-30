import './Body.css';
import { useState } from 'react';

function Body() {
    return (
        <div className="grid-container">
            <div className="headshot">
                <img src="/zohra.jpg" />
            </div>
            <h1 className="title">WEB DESIGNER</h1>
            <p className="text">Hi, I'm Zohra. I design and develop clean, easy-to-use websites for all.</p>
            <button className="btn-contact">Contact Me</button>
            <button className="btn-see">See Work</button>
        </div>
    )
}

export default Body;