import { useOktaAuth } from "@okta/okta-react";
import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
    const { oktaAuth, authState } = useOktaAuth();

    const handleLogout = async () => oktaAuth.signOut();

    console.log("authstate", authState);

    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home"><img src={require("./../Images/S.png")} width="50px" height="50px" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link link-body-emphasis px-2 active" aria-current="page"><b>Home</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/courtBooking" className="nav-link link-body-emphasis px-2"><b>Court Booking</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="about" className="nav-link link-body-emphasis px-2"><b>About</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link link-body-emphasis px-2"><b>Contact us</b></NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">

                            {
                                authState?.isAuthenticated && authState?.accessToken?.claims?.userType === 'admin' &&
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link link-body-emphasis px-2 dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <b>Backoffice</b></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/backoffice/profile">Profile</a></li>
                                        <li><a className="dropdown-item" href="/backoffice/bookings">Retrieve Bookings</a></li>
                                        <li><a className="dropdown-item" href="/backoffice/manage">Manage Bookings</a></li>
                                    </ul>
                                </li>
                            }

                            {!authState?.isAuthenticated ?
                                <li className="nav-item">
                                    <NavLink to="/login" className="nav-link link-body-emphasis px-2"><b>Login</b></NavLink></li>
                                :
                                <button onClick={handleLogout} className="nav-link link-body-emphasis px-2"><b>Logout</b></button>
                            }





                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    );
}