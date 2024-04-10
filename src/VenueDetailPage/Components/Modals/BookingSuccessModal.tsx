export const BookingSuccessModal:React.FC<{ closeModal: () => void}>=(props)=>{
    return( <><div className="modal-header">
    <h5 className="modal-title"></h5>
    <button type="button" className="btn-close" onClick={props.closeModal}></button>
</div>
    <div className="modal-body">
        Success
        <p>
        The email has been sent to you with details
        </p>

    </div>
    <div className="modal-footer">

        <button type="submit" className="btn btn-primary">Home</button>
    </div>
</>)}