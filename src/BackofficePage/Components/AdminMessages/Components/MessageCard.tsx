import Message from "../../../../Models/Message";

export const MessageCard: React.FC<{ message: Message, accessToken: string | undefined }> = (props) => {

    return (<div>
        <div className="card mb-3 mt-3">
            <div className="card-header bg-light">
                <h5 className="mb-0">
                    Message From: {props.message.email}
                    {/* <span className={`badge text-bg-${!displayCancelSuccess?statusColor:"danger"} float-end`}>{!displayCancelSuccess?displayStatus:`Cancelled`}</span> */}
                </h5>
            </div>

            <div className="card-body">
                <h5 className="card-title">Message</h5>
                <p className="card-text">
                    <b>Name:</b> {props.message.name}<br />
                    <b>Email:</b> {props.message.email}<br />
                    <b>Message:</b> {props.message.message}<br />

                </p>


                <button className="btn btn-primary ml-2">Respond
                </button>


                {/* {displayCancelSuccess && showAlert  && (
                <div className="fixed-top alert alert-success alert-dismissible fade show mb-0" role="alert">
                    Booking Canceled successfully!
                    <button type="button" className="btn-close" aria-label="Close" onClick={closeSuccessMessage}></button>
                </div>
            )} */}
            </div>
        </div>
    </div>);

}