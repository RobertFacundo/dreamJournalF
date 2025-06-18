import { Link } from "react-router-dom";
import './NavBar.scss'

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
            </div>
            <div className="navbar-links">
                <Link to='/Home'>Home</Link>
                <Link to='/Profile'>Profile</Link>
            </div>
        </nav>
    )
}