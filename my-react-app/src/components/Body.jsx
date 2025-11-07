import './Body.css'

function Body() {
    return (
        <>
        <div className="grid-container">
            <div className="headshot">
                <div className="photo">
                    <img src="/zohra.jpg" alt="the frog" />
                </div>
            </div>
            <div className="content">
                <h1>WEB DESIGNER</h1>
                <p>Hi, I'm Zohra. I design and develop clean, easy-to-use websites for all.</p>
                <button>Contact Me</button>
                <button>See Work</button>
            </div>
        </div>
        </>
    )
}

export default Body;