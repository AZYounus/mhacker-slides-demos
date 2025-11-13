import './Body.css';
import { useState } from 'react';

function Body() {
    return (
        <div className="grid-container">
            <div className="headshot">
                <div className="photo">
                    <img src="/zohra.jpg" />
                    <div className="my-name">
                        <s style={{all: 'unset', textDecoration: 'line-through'}}>Aneekah</s> Zohra Younus
                    </div>
                </div>
            </div>
            <h1 className="title">WEB DESIGNER</h1>
            <p className="text">Hi, I'm Zohra. I design and develop clean, easy-to-use websites for all.</p>
            <button className="btn-contact">Contact Me</button>
            <button className="btn-see">See Work</button>
        </div>
    )
}

export default Body;