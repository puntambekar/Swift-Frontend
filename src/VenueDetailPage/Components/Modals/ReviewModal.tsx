import { useState } from "react";
import Booking from "../../../Models/Booking";
import Venue from "../../../Models/Venue";
import { BookingFailedModal } from "./BookingFailedModal";
import { BookingSuccessModal } from "./BookingSuccessModal";

interface UserData {
    name: string;
    phoneNumber: string;
    email: string;
}


export const ReviewModal: React.FC<{
    handleBackToDetailModal: () => void, closeModal: () => void, selectedDate: string,
    filteredSlots: { time: string, courtAvailable: number, courtBooked: number }[] | undefined, userData: UserData, venue: Venue
}> = (props) => {

    const [displaySuccess, setDisplaySuccess] = useState(false);
    const [displayError, setDisplayError] = useState(false);

    const formatTime = (time: string) => {
        return new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }



    async function handleBooking() {
        const url = "http://localhost:8080/api/booking/add/booking";

        const bookingData: Booking = new Booking({
            "businessName": props.venue.businessName,
            "address": props.venue.address, "city": props.venue.city
        }, props.selectedDate, props.filteredSlots?.map(e => ({ "time": e.time, "courtBooked": e.courtBooked })),
            { "name": props.userData.name, "email": props.userData.email, "phone": props.userData.phoneNumber })

        console.log(bookingData);

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookingData)
        };

        const submitNewBookingResponse = await fetch(url, requestOptions);

        if (!submitNewBookingResponse.ok) {
            throw new Error("Something went wrong!");
            setDisplayError(true);
        }
        setDisplaySuccess(true)

    // Send email to user

    }

    return (<>{
        !displaySuccess && !displayError ? <>
            <div className="modal-header">
                <h5 className="modal-title">Review</h5>
                <button type="button" className="btn-close" onClick={props.closeModal}></button>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col-md-6">
                        <h5><u>Venue Information</u></h5>
                        <p><strong>Venue Name:</strong> {props.venue.businessName}</p>
                        <p><strong>Address:</strong> {props.venue.address}, {props.venue.city}</p>
                    </div>
                    <div className="col-md-6">
                        <h5><u>Selected Time Slots</u></h5>
                        <ul>
                            <p>Date: {props.selectedDate}</p>
                            {props.filteredSlots?.map((slot, index) => (
                                <li key={index}>{formatTime(slot.time)} X {slot.courtBooked} courts</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5><u>User Information</u></h5>
                        <p><strong>Name:</strong> {props.userData.name}</p>
                        <p><strong>Email:</strong> {props.userData.email}</p>
                        <p><strong>Phone Number:</strong> {props.userData.phoneNumber}</p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={props.handleBackToDetailModal}>Back</button>
                <button type="button" className="btn btn-primary" onClick={handleBooking}>Book</button>
            </div>
        </> : displaySuccess && !displayError ?
           <BookingSuccessModal closeModal={props.closeModal}/>
            : displayError ?
                <BookingFailedModal closeModal={props.closeModal}/>
                : <></>}
    </>)
}