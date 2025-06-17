import { div } from "framer-motion/client";
import { Link } from "react-router-dom";


export const NavBar = () => {
    return (
        <div>
            <Link to='/Home'>Home</Link>
            <Link to='/Profile'>Profile</Link>
        </div>
    )
}