import { Link } from "react-router-dom";

function NavBar() {
    const navStyle = {
        display: 'flex',
        gap: '20px',
        backgroundColor: '#2d2d35',
        padding: '12px 20px',
        borderRadius: '6px',
        marginBottom: '20px'
    };

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '15px'
    };

    return (
        <nav style={navStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/modulus" style={linkStyle}>Modulus Formula</Link>
        </nav>
    )
}

export default NavBar