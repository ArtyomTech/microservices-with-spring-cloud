import React from "react"
import { useDispatch } from "react-redux"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faUserPlus,
    faSignInAlt,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons"
import { logoutUser } from "../redux/auth/authActions"

const NavigationBar = () => {
    const authToken = localStorage.getItem("jwtToken")
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutUser())
    }

    const guestLinks = (
        <>
            <div className="mr-auto"></div>
            <Nav className="navbar-right">
                <Link to={"register"} className="nav-link">
                    <FontAwesomeIcon icon={faUserPlus} /> Register
                </Link>
                <Link to={"login"} className="nav-link">
                    <FontAwesomeIcon icon={faSignInAlt} /> Login
                </Link>
            </Nav>
        </>
    )
    const userLinks = (
        <>
            <Nav className="mr-auto">
                <Link to={"/users"} className="nav-link">
                    Users
                </Link>
            </Nav>
            <Nav className="navbar-right">
                <Link to={"/logout"} className="nav-link" onClick={logout}>
                    <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </Link>
            </Nav>
        </>
    )

    return (
        <Navbar bg="light" expand="lg">
            <Link to={authToken ? "/home" : ""} className="navbar-brand">
                <img
                    src={"/images/icons/department-icon.png"}
                    width="25"
                    height="25"
                    alt="brand"
                />{" "}
                iDepartment
            </Link>
            {authToken ? userLinks : guestLinks}
        </Navbar>
    )
}

export default NavigationBar
