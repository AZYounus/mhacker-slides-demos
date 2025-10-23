import './Navbar.css';

function Navbar() {
    const url_names_left = ['home'];
    const url_links_left = ['/index.html'];
    const url_names_middle = ['front page', 'gallery', 'courses'];
    const url_links_middle = ['index.html', '/gallery.html', '/courses.html'];
    const url_names_right = ['contact me'];
    const url_links_right = ['/contact.html']

    return (
        <>
        <nav className="navbar">
            <div className="navbar-left">
                {url_links_left.map((link, index) => (
                    <a href={link}>{url_names_left[index]}</a>
                ))}
            </div>
            <div className="navbar-middle">
                {url_links_middle.map((link, index) => (
                    <a href={link}>{url_names_middle[index]}</a>
                ))}
            </div>
            <div className="navbar-right">
                {url_links_right.map((link, index) => (
                    <a href={link}>{url_names_right[index]}</a>
                ))}
            </div>
        </nav>
        </>
    )
}

export default Navbar;