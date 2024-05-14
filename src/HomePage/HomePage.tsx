import { Link } from "react-router-dom";
import { ContactUsPage } from "../ContactUsPage/ContactUsPage";
import { Corousel } from "./Components/Corousel";
import { Features } from "./Components/Features";

export const HomePage =()=>{
  return (

    <div  >
        {/* <Corousel /> */}
        <img src={require("./../Images/sport-elements-arrangement-minimal-style.jpg")} className="d-block w-100"/>
    {/* <hr className="featurette-divider" />
        <Features /> */}
        <hr className="featurette-divider" />
        <ContactUsPage/>
        <div className="fixed-bottom d-flex justify-content-center" style={{ marginBottom: "70px" }}>
            <Link to="/courtBooking" type="button" className="btn btn-danger btn-lg">Book Court</Link>
        </div>
    </div>
);

    
}