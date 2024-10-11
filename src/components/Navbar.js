import {Link, Outlet} from "react-router-dom";
import '../CSS/Navbar.css';

const Navbar = (props) => {
    const { loggedIn, handleLogout } = props;

    return (
        <>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/"><h4>&lt;gmyr&gt;</h4></Link>
                    </li>
                </ul>
                <ul>
                    {!loggedIn && (
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    )}
                    {!loggedIn && (
                        <li>
                            <Link to="/registration">Register</Link>
                        </li>
                    )}
                    {loggedIn && (
                        <li>
                            <Link to="/" onClick={() => {handleLogout(false)}}>Logout</Link>
                        </li>
                    )}
                    {loggedIn && (
                        <li>
                            <Link to="/account">Account</Link>
                        </li>
                    )}
                </ul>
            </nav>
            <Outlet/>
        </>
    );
};

export default Navbar;