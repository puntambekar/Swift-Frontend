import { useState } from "react";
import Booking from "../../../Models/Booking";
import Venue from "../../../Models/Venue";
import { FailedModal } from "../../../Commons/FailedModal";
import { SuccessModal } from "../../../Commons/SuccessModal";
import { Spinner } from "../../../Commons/Spinner";
import "./Review.css";
import { formatTime } from "../../../Utils/helperMethods";
import { BOOKING_STATUS } from "../../../Utils/constants";

interface UserData {
    firstName: string;
    lastName: string;
    email: string;
}


export const ReviewModal: React.FC<{
    handleBackToDetailModal: () => void, closeModal: () => void, selectedDate: string,
    filteredSlots: { time: string, courtAvailable: number, courtBooked: number }[] | undefined, userData: UserData, venue: Venue
}> = (props) => {

    const [displaySuccess, setDisplaySuccess] = useState(false);
    const [displayError, setDisplayError] = useState(false);
    const [httpError, setHttpError] = useState(null);
    const [IsLoading, setIsLoading] = useState(false);


    async function handleBooking() {
        setIsLoading(true);
        const url = "http://localhost:8080/api/booking/add";

        const bookingData: Booking = new Booking({
            "id":props.venue.venueId,
            "businessName": props.venue.businessName,
            "address": props.venue.address, "city": props.venue.city
        }, props.selectedDate, props.filteredSlots?.map(e => ({ "time": e.time, "courtBooked": e.courtBooked })),
            { "firstName": props.userData.firstName,"lastName": props.userData.lastName, "email": props.userData.email },BOOKING_STATUS.ACTIVE)

        console.log(bookingData);

        try {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bookingData)
            };

            const submitNewBookingResponse = await fetch(url, requestOptions);
            if (!submitNewBookingResponse.ok) {
                setDisplayError(true);
            }
            setDisplaySuccess(true);
        } catch (error: any) {
            setHttpError(error.message);
            setDisplayError(true);
        } finally {
            setIsLoading(false);
        }

    }

    if (httpError) {
        setDisplayError(true);
    }


    return (<>{
        !displaySuccess && !displayError ? <>
            <div className="modal-header">
                <h5 className="modal-title">Review</h5>
                <button type="button" className="btn-close" onClick={props.closeModal}></button>
            </div>
            <div className="modal-body">
                <div className="booking-summary">
                    <div className="booking-section">
                        <h5>Venue Information</h5>
                        <p><strong>Venue Name:</strong> {props.venue.businessName}</p>
                        <p><strong>Address:</strong> {props.venue.address}, {props.venue.city}</p>
                    </div>
                    <div className="booking-section">
                        <h5>Selected Time Slots</h5>
                        <ul>
                            <li>Date: {props.selectedDate}</li>
                            {props.filteredSlots?.map((slot, index) => (
                                <li key={index}>{formatTime(slot.time)} X {slot.courtBooked} courts</li>
                            ))}
                        </ul>
                    </div>
                    <div className="booking-section">
                        <h5>User Information</h5>
                        <p><strong>First Name:</strong> {props.userData.firstName}</p>
                        <p><strong>Last Name:</strong> {props.userData.lastName}</p>
                        <p><strong>Email:</strong> {props.userData.email}</p>
                        
                    </div>

                </div>

            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={props.handleBackToDetailModal}>Back</button>
                <button type="button" className="btn btn-primary" onClick={handleBooking}>{
                    !IsLoading ? "Book" :
                        <><span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span><span role="status"> Loading...</span></>
                }</button>
            </div>
        </> : displaySuccess && !displayError ?
            <SuccessModal line1="Booking Confirmed" line2="The email has been sent to you with details!"/>
            : displayError ?
                <FailedModal closeModal={props.closeModal} />
                : <></>}
    </>)
}