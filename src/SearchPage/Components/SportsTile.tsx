import { Link } from "react-router-dom";
import Venue from "../../Models/Venue";

export const SportsTile: React.FC<{ venue:Venue }> = (props) => {
    return (
        <div className="col-lg-3 col-md-6">

        <div className="card" style={{ width: "17rem" }} >
        <img src={require("./../../Images/Shuttle.jpg")} className="card-img-top" width="100px" height="200px" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.venue.businessName}</h5>
            <p className="card-text">{props.venue.address}</p>
            <p className="card-text">{props.venue.city}</p>
            <Link to={`/view/${props.venue.venueId}`} className="btn btn-dark">Select</Link>
        </div>
    </div>
    </div>
       );
}