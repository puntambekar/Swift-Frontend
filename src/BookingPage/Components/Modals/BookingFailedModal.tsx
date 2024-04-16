import "./SuccessPage.css"
interface BookingFailedModalProps { closeModal: () => void }

export const BookingFailedModal: React.FC<BookingFailedModalProps> = (props) => {
    return (<><div className="modal-header">
        <h5 className="modal-title"></h5>
        <button type="button" className="btn-close" onClick={props.closeModal}></button>
    </div>
        <div className="modal-body">
            <div className="modal-body error-page">
                <i className="bi bi-x-circle text-danger"></i>
                <h4>Error</h4>
                <p>Something went wrong. Please try again later.</p>
            </div>

        </div>
        <div className="modal-footer">

            <button type="submit" className="btn btn-primary">Home</button>
        </div>
    </>)
}