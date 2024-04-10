export const BookingFailedModal:React.FC<{ closeModal: () => void}>=(props)=>{
    return(  <><div className="modal-header">
    <h5 className="modal-title"></h5>
    <button type="button" className="btn-close" onClick={props.closeModal}></button>
</div>
    <div className="modal-body">
       Error

    </div>
    <div className="modal-footer">
      
        <button type="submit"  className="btn btn-primary">Home</button>
    </div>
    </>)}