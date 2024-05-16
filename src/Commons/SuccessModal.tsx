import { Link } from "react-router-dom"
import "./SuccessPage.css"
export const SuccessModal:React.FC<{line1:string,line2:string}>=(props)=>{
    return( <>
      <div className="modal-overlay"></div>
        <div
          className={`modal show`}
          style={{ display: "block" }}
          tabIndex={-1}
          role="dialog"

        >
          <div className="modal-dialog modal-dialog-centered" >
            <div className="modal-content"><div className="modal-header">
    <h5 className="modal-title"></h5>
    {/* <button type="button" className="btn-close" onClick={props.closeModal}></button> */}
</div>
<div className="modal-body success-page">
  <i className="bi bi-check-circle text-success"></i>
  <h4>{props.line1}</h4>
  <p>{props.line2}</p>
</div>

    <div className="modal-footer">

        {/* <button type="submit" className="btn btn-primary">Home</button> */}
        <Link to={`/home`} type="button" className="btn btn-primary">Home</Link>
    </div></div></div></div>
</>)}