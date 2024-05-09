import React, { useEffect, useState } from 'react';
// import BookingDetails from './BookingDetails'; // Import your details component here
import Booking from '../../../../Models/Booking';
import { formatTime } from '../../../../Utils/helperMethods';


export const BookingCard: React.FC<{ booking: Booking}> = (props) => {

    const [IsLoading, setIsLoading] = useState(false);
    const [displayCancelSuccess, setDisplayCancelSuccess] = useState(false);
    const [displayCancelError, setDisplayCancelError] = useState(false);
    const [httpError, setHttpError] = useState(null);
    const [showAlert,setShowAlert]= useState(false);



    function getStatusDisplayString(status: string) {
        let statusColor = "primary"
        switch (status) {
            case "canceledByAdmin":
                return { displayStatus: "Cancelled By Admin", statusColor: "danger" };
            case "canceledByUser":
                return { displayStatus: "Cancelled By User", statusColor: "danger" };
            case "active":
                return { displayStatus: "Active", statusColor: "primary" };
            case "completed":
                return { displayStatus: "Completed", statusColor: "secondary" };

            default:
                return {displayStatus:status,statusColor:statusColor};
        }
    }

    const {displayStatus,statusColor} = getStatusDisplayString(props.booking.status);

    async function handleCancelBooking() {

        setIsLoading(true);
        const url = "http://localhost:8080/api/booking/cancel";
        const bookingId: string | undefined = props.booking.id;


        try {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: bookingId
            };

            const cancelBookingResponse = await fetch(url, requestOptions);
            if (!cancelBookingResponse.ok) {
                setDisplayCancelError(true);
            }
            setDisplayCancelSuccess(true);
            setShowAlert(true);
            
          
        } catch (error: any) {
            setHttpError(error.message);
            setDisplayCancelError(true);
        } finally {
            setIsLoading(false);
        }

    }

    useEffect(() => {
        if (displayCancelSuccess) {

           
        }
    }, [displayCancelSuccess]);

    const closeSuccessMessage = () => {
        setShowAlert(false);
    }

    return (
        <div className="card mb-3 mt-3">
            <div className="card-header bg-light">
                <h5 className="mb-0">
                    Booking ID: {props.booking.id}
                    <span className={`badge text-bg-${!displayCancelSuccess?statusColor:"danger"} float-end`}>{!displayCancelSuccess?displayStatus:`Cancelled By Admin`}</span>
                </h5>
            </div>

            <div className="card-body">
                <h5 className="card-title">User Information</h5>
                <p className="card-text">
                    <b>Name:</b> {props.booking.user.name}<br />
                    <b>Email:</b> {props.booking.user.email}<br />
                    <b>Phone:</b> {props.booking.user.phone}
                </p>
                <h5 className="card-title">Date: {props.booking.date} </h5>

                <h5 className="card-title">Time Slots</h5>
                {props.booking.timeSlots?.map(slot => (
                    <p key={slot.time}>
                        <span className="fw-bold">Time:</span> {formatTime(slot.time)} | <span className="fw-bold">Court Booked:</span> {slot.courtBooked}
                    </p>
                ))}
                {
                    props.booking.status === "active" && !displayCancelSuccess &&
                    <button className="btn btn-danger ml-2" onClick={handleCancelBooking} disabled={displayCancelSuccess}>
                        {
                            !IsLoading ? "Cancel Booking" :
                                <><span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span><span role="status"> Loading...</span></>
                        }
                       
                    </button>
                
                }
           {displayCancelSuccess && showAlert  && (
                <div className="fixed-top alert alert-success alert-dismissible fade show mb-0" role="alert">
                    Booking Canceled successfully!
                    <button type="button" className="btn-close" aria-label="Close" onClick={closeSuccessMessage}></button>
                </div>
            )}
            </div>
        </div>

    );
};
