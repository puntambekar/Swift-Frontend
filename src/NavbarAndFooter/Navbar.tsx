import { useOktaAuth } from "@okta/okta-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { fetchUserData } from "../Services/userService";
import User from "../Models/User";
export const Navbar = () => {
    const { oktaAuth, authState } = useOktaAuth();
    const [user, setUser] = useState<User>();

    const handleLogout = async () => oktaAuth.signOut();

    console.log("authstate", authState);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const loadedUser = await fetchUserData(authState?.accessToken?.accessToken);
                setUser(loadedUser);
                console.log("loadedUser", loadedUser);
                //  setIsLoading(false);
            } catch (error: any) {
                //  setIsLoading(false);
                // setHttpError(error.message);
            }
        };
        if (authState?.isAuthenticated) {
            fetchUser();
        }

    }, [authState]);
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container-fluid">
                    <div>
                        <Link className="navbar-brand" to="/home"><img src={require("./../Images/S.png")} width="60px" height="60px" style={{ borderRadius: "50%" }} /></Link>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link link-body-emphasis px-2 active" aria-current="page"><b>Home</b></NavLink>
                            </li>

                            {/* {
                                authState?.isAuthenticated && authState?.accessToken?.claims?.userType === 'admin' &&
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link link-body-emphasis px-2 dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <b>Backoffice</b></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/backoffice/profile">Profile</a></li>
                                        <li><a className="dropdown-item" href="/backoffice/bookings">Retrieve Bookings</a></li>
                                        <li><a className="dropdown-item" href="/backoffice/manage">Manage Bookings</a></li>
                                        <li><a className="dropdown-item" href="/backoffice/availability">Manage Availability</a></li>
                                    </ul>
                                </li>
                            } */}
                            {/* <li className="nav-item">
                                <NavLink to="/courtBooking" className="nav-link link-body-emphasis px-2"><b>Court Booking</b></NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link link-body-emphasis px-2"><b>About</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link link-body-emphasis px-2"><b>Contact us</b></NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">

                            {!authState?.isAuthenticated ?
                                <li className="nav-item">
                                    <NavLink to="/login" className="nav-link link-body-emphasis px-2" type="button"><b>Sign in</b></NavLink></li>
                                : authState?.isAuthenticated && authState?.accessToken?.claims?.userType === 'admin' ?
                                    <>
                                        <li className="nav-item dropdown dropstart">
                                            <button className="nav-link link-body-emphasis px-2" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ border: "1px solid black", borderRadius: "20px", padding: "2px" }}>
                                                <b >{user?.firstName}</b><i className="bi bi-caret-down-fill" style={{ marginLeft: "8px", fontWeight: "bolder" }}></i></button>
                                            <ul className="dropdown-menu"style={{ borderRadius: "10px" }}>
                                                <NavLink className="dropdown-item" to="/backoffice/profile">Profile</NavLink>
                                                <NavLink className="dropdown-item" to="/backoffice/bookings">Retrieve Bookings</NavLink>
                                                <NavLink className="dropdown-item" to="/backoffice/manage">Manage Bookings</NavLink>
                                                <NavLink className="dropdown-item" to="/backoffice/availability">Manage Availability</NavLink>
                                                <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                                            </ul>
                                        </li></>
                                    : <>
                                        <li className="nav-item dropdown dropstart">
                                            <button className="nav-link link-body-emphasis px-2" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ border: "1px solid black", borderRadius: "20px", padding: "2px" }}>
                                                <b >{user?.firstName}</b><i className="bi bi-caret-down-fill" style={{ marginLeft: "8px", fontWeight: "bolder" }}></i></button>
                                            <ul className="dropdown-menu" style={{ borderRadius: "10px" }}>

                                                <NavLink className="dropdown-item" to="/user/manage">Manage Bookings</NavLink>
                                                <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>

                                            </ul>
                                        </li>
                                    </>
                                // <button onClick={handleLogout} className="nav-link link-body-emphasis px-2"><b>{user?.firstName}</b></button>
                            }





                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    );
}