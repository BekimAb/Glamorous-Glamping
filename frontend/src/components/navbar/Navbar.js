import "./navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
            <Link to = "/." style={{color: 'white', textDecoration: 'none'}}><span className="logo">Glamorous Glamping</span> </Link>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar 