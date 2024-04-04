import React, { useEffect, useState } from "react";
import Venue from "../../Models/Venue";
import { Counter } from "./Counter";
import styled from "styled-components";
import "./Modal.css"


const StyledTd = styled.td`
font-size: 16px;
white-space: nowrap;

@media (max-width: 576px) {
    font-size: 12px;
}
`;

export const ModalSummary: React.FC<{ selectedSlots: string[], closeModal: () => void, venueId: number, selectedDate: string; }> = (props) => {

    const [filteredSlots, setFilteredSlots] = useState<{ time: string, courtAvailable: number }[]|undefined>();

    const [count, setCount] = useState(0);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        phoneNumber: '',
        email: ''
    });


    const fetchVenue = async () => {
        const url: string = `http://localhost:8080/api/venues/dailyAvail?venueId=${props.venueId}&date=${props.selectedDate}`;
        const requestOptions = {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        }
        const response = await fetch(url, requestOptions);
        const responseJson = await response.json();

        const filtered = responseJson.filter((a: { time: string }) => {
            return props.selectedSlots.includes(new Date(a.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        });

        // console.log(filtered);
        setFilteredSlots(filtered);


    };

    const formatTime = (time: string) => {
        return new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    const handleNextToDetailModal = () => {
        setShowDetailsModal(true);

    }
    const handleBackToSummaryModal = () => {
        setShowDetailsModal(false);

    }
    const handleNextToReviewModal = () => {
        setShowReviewModal(true);

    }
    const handleBackToDetailModal = () => {
        setShowReviewModal(false);

    }
    useEffect(() => {

        fetchVenue().catch(() => { })
    }, [props.venueId])

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        // console.log(e.target);
        setUserData({
            ...userData,
            [name]: value
        });
    };
    const handleSubmitAndNextToReview = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        console.log("submit", userData);
        handleNextToReviewModal();
        console.log(showReviewModal);
    };


    const handleRowDeletion = (index: number) => {
        setFilteredSlots((prevSlots) => {
            if (prevSlots === undefined) {
                return undefined;
              }
            const updatedSlots = [...prevSlots];
            updatedSlots.splice(index, 1);
            return updatedSlots;
        });
    };
  

    return (<div className={`modal show`} style={{ display: "block" }} tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
                {!showDetailsModal && !showReviewModal ?
                    <><div className="modal-header">
                        <h5 className="modal-title">Summary</h5>
                        <button type="button" className="btn-close" onClick={props.closeModal}></button>
                    </div><div className="modal-body">
                            <div style={{ overflowX: "auto" }}>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Time</th>
                                            <th></th>
                                            <th>Availability</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredSlots?.map((slot, index) => (
                                            <tr key={index}>
                                                <StyledTd>{formatTime(slot.time)}</StyledTd>

                                                <StyledTd><Counter max={slot.courtAvailable} /></StyledTd>
                                                <StyledTd>{slot.courtAvailable} courts</StyledTd>
                                                <StyledTd><i style={{fontSize:"24px"}} onClick={() => handleRowDeletion(index)} className="bi bi-x"></i></StyledTd>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={props.closeModal}>Back</button><button type="button" className="btn btn-primary" onClick={handleNextToDetailModal}>Next</button>
                        </div></>
                    : !showReviewModal ? <><div className="modal-header">
                        <h5 className="modal-title">Details</h5>
                        <button type="button" className="btn-close" onClick={() => setShowDetailsModal(false)}></button>
                    </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmitAndNextToReview}>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="name">Name:</label>
                                    <input className="form-control" type="text" id="name" name="name" value={userData.name} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="phoneNumber">Phone Number:</label>
                                    <input className="form-control" type="tel" id="phoneNumber" name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="email">Email:</label>
                                    <input className="form-control" type="email" id="email" name="email" value={userData.email} onChange={handleChange} required />
                                </div>

                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleBackToSummaryModal}>Back</button><button type="submit" onClick={handleSubmitAndNextToReview} className="btn btn-primary">Next</button>
                        </div></> : <><div className="modal-header">
                            <h5 className="modal-title">Review</h5>
                            <button type="button" className="btn-close" onClick={() => setShowDetailsModal(false)}></button>
                        </div>
                        <div className="modal-body">

                            <p>content here</p>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleBackToDetailModal}>Back</button><button type="button" className="btn btn-primary">Book</button>
                        </div></>}
            </div>
        </div>
    </div>

    );
}

