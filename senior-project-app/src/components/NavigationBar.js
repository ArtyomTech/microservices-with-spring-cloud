// React
import { Link } from 'react-router-dom';

// Bootstrap
import { Navbar, Nav } from "react-bootstrap";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserPlus, faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
    const guestLinks = (
        <>
            {/* TODO HERE, REMAKE LATER */}
            <Nav className="mr-auto">
                <Link to={"/users"} className="nav-link">
                    Users List
                </Link>
            </Nav>

            <Nav className="navbar-right">
                <Link to={"/register"} className="nav-link">
                    <FontAwesomeIcon icon={faUserPlus} /> Register
                </Link>
                <Link to={"/login"} className="nav-link">
                    <FontAwesomeIcon icon={faSignInAlt} /> Login
                </Link>
            </Nav>
        </>
    );

    return (
        <Navbar bg="light">
            <Navbar.Brand href="/">Department Store</Navbar.Brand>
            {guestLinks}
        </Navbar>
    )
}

export default NavigationBar;
