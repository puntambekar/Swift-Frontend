import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home"><img src={require("./../Images/S.png")} width="50px" height="50px"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <NavLink to="/home" className="nav-link link-body-emphasis px-2 active" aria-current="page">Home</NavLink>
                        <NavLink to="/another" className="nav-link link-body-emphasis px-2">Another</NavLink>
                        <NavLink to="/page" className="nav-link link-body-emphasis px-2">Page</NavLink>
                        <NavLink to="about" className="nav-link link-body-emphasis px-2">About</NavLink>
                        <NavLink to="/contact" className="nav-link link-body-emphasis px-2">Contact us</NavLink>
                        <div className="navbar-nav ms-auto mb-2 mb-lg-0">


                            <NavLink to="#" className="nav-link link-body-emphasis px-2">Login</NavLink>
                           



                        </div>
                    </div>
                </div>
            </nav>


        </div>
    );
}