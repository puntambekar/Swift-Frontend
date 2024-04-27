import { useOktaAuth } from "@okta/okta-react";
import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
    const { oktaAuth, authState } = useOktaAuth();

    const handleLogout = async () => oktaAuth.signOut();

    console.log("authstate",authState);

    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home"><img src={require("./../Images/S.png")} width="50px" height="50px" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <NavLink to="/home" className="nav-link link-body-emphasis px-2 active" aria-current="page"><b>Home</b></NavLink>
                        <NavLink to="/courtBooking" className="nav-link link-body-emphasis px-2"><b>Court Booking</b></NavLink>
                        {/* <NavLink to="/page" className="nav-link link-body-emphasis px-2"><b>Page1</b></NavLink> */}
                        <NavLink to="about" className="nav-link link-body-emphasis px-2"><b>About</b></NavLink>
                        <NavLink to="/contact" className="nav-link link-body-emphasis px-2"><b>Contact us</b></NavLink>
                        <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {!authState?.isAuthenticated?
                                <NavLink to="/login" className="nav-link link-body-emphasis px-2"><b>Login</b></NavLink>
                                :
                                <button onClick={handleLogout} className="nav-link link-body-emphasis px-2"><b>Logout</b></button>
                            }

                            




                        </div>
                    </div>
                </div>
            </nav>


        </div>
    );
}