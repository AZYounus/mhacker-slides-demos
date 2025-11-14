import './Body.css'

function Body() {
    return (
        <>
        <div className="grid-container">
            <div className="headshot">
                <div className="photo">
                    <img src="/zohra.jpg" alt="the frog" />
                    <div className="my-name">
                        <span style={{all: 'unset', textDecoration: 'line-through'}}>Aneekah</span> Zohra Younus
                    </div>
                </div>
            </div>
            <div className="content">
                <h1 className="title">WEB DESIGNER</h1>
                <p>Hi, I'm Zohra. I design and develop clean, easy-to-use websites for all.</p>
                <button className="contact-btn">Contact Me</button>
                <button className="work-btn">See Work</button>
            </div>
        </div>
        </>
    )
}

export default Body;