import { Link } from "react-router-dom"
import "./SuccessPage.css"
export const BookingSuccessModal:React.FC<{ closeModal: () => void,venueId:string}>=(props)=>{
    return( <><div className="modal-header">
    <h5 className="modal-title"></h5>
    {/* <button type="button" className="btn-close" onClick={props.closeModal}></button> */}
</div>
<div className="modal-body success-page">
  <i className="bi bi-check-circle text-success"></i>
  <h4>Booking Confirmed</h4>
  <p>The email has been sent to you with details!</p>
</div>

    <div className="modal-footer">

        {/* <button type="submit" className="btn btn-primary">Home</button> */}
        <Link to={`/home`} type="button" className="btn btn-primary">Home</Link>
    </div>
</>)}