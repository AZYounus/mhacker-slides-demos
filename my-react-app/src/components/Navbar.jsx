import './Navbar.css';

function Navbar() {
    const url_links_left = ['/'];
    const url_names_middle = ['Projects', 'Gallery', 'Courses'];
    const url_links_middle = ['/projects', '/gallery', '/courses'];
    const url_names_right = ['contact me'];
    const url_links_right = ['/contact.html']

    return (
        <>
        <nav className="navbar">
            <div className="navbar-left">
                <a href={url_links_left[0]}>Zohra Younus / <span style={{fontWeight: 100, }}>Portfolio</span></a>
            </div>
            <div className="navbar-middle">
                {url_links_middle.map((link, index) => (
                    <a href={link} key={index}>{url_names_middle[index]}</a>
                ))}
            </div>
            <div className="navbar-right">
                <button className="button">Contact Me</button>
            </div>
        </nav>
        </>
    )
}

export default Navbar;