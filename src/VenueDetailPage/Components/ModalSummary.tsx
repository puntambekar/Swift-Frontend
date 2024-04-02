import React, { useEffect, useState } from "react";
import Venue from "../../Models/Venue";
import { Counter } from "./Counter";
import styled from "styled-components";

export const ModalSummary: React.FC<{ selectedSlots: string[], closeModal: () => void, venueId: number, selectedDate: string; }> = (props) => {

    const StyledTd = styled.td`
    font-size: 16px;
    white-space: nowrap;

    @media (max-width: 576px) {
        font-size: 12px;
    }
`;


    const [filteredSlots, setFilteredSlots] = useState<[{ time: string, courtAvailable: number }]>();
   
    const [count, setCount] = useState(0);
    const [showNextModal, setShowNextModal] = useState(false);


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

        console.log(filtered);
        setFilteredSlots(filtered);


    };

    const formatTime = (time: string) => {
        return new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    const handleNext = () => {
        setShowNextModal(true);
    }

    useEffect(() => {

        fetchVenue().catch(() => { })
    }, [props.venueId])



    return (<div className="modal show" style={{ display: "block" }} tabIndex={-1} role="dialog">
    <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Summary</h5>
                <button type="button" className="btn-close" onClick={props.closeModal}></button>
            </div>
            <div className="modal-body">
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

                                    <StyledTd><Counter max={slot.courtAvailable}  /></StyledTd>
                                    <StyledTd>{slot.courtAvailable} courts</StyledTd>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={props.closeModal}>Back</button>
                <button type="button"  className="btn btn-primary" onClick={handleNext}>Next</button>
            </div>
        </div>
    </div>
    {showNextModal &&
                <div className="modal show" style={{ display: "block" }} tabIndex={-1} role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Next Modal</h5>
                                <button type="button" className="btn-close" onClick={() => setShowNextModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <p>This is the next modal content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
</div>

);
}

