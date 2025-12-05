import './Gallery.css'

function Gallery() {
    return (
        <>
            {/* banner is 3d space */}
            <div className="banner">
                {/* slide is a 3d element */}
                <div className="slider" style={{'--quantity': 6}}>
                    <p className="item" style={{'--position': 1}}>Yippie 1</p>
                    <p className="item" style={{'--position': 2}}>Yippie 2</p>
                    <p className="item" style={{'--position': 3}}>Yippie 3</p>
                    <p className="item" style={{'--position': 4}}>Yippie 4</p>
                    <p className="item" style={{'--position': 5}}>Yippie 5</p>
                    <p className="item" style={{'--position': 6}}>Yippie 6</p>
                </div>
            </div>
            <p>this is a normal text</p>
        </>
    )
}

export default Gallery;