import { useState } from "react";
import styled from "styled-components";
import { Counter } from "./Counter";
import { DetailModal } from "./DetailModal";
import { ReviewModal } from "./ReviewModal";


const StyledTd = styled.td`
font-size: 16px;
white-space: nowrap;

@media (max-width: 576px) {
    font-size: 12px;
}
`;
export const SummaryModal: React.FC<{
    filteredSlots: { time: string, courtAvailable: number }[] | undefined,
    handleRowDeletion: (index: number) => void, closeModal: () => void
}> = (props) => {
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [showReviewModal, setShowReviewModal] = useState(false);

    const handleNextToDetailModal = () => {
        setShowDetailsModal(true);

    }
    const handleBackToSummaryModal = () => {
        setShowDetailsModal(false);

    }

    const handleBackToDetailModal = () => {
        setShowReviewModal(false);

    }
    const handleNextToReviewModal = () => {

        setShowReviewModal(true);


    }

    const formatTime = (time: string) => {
        return new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }


    return (<div className="modal-content">
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
                                {props.filteredSlots?.map((slot, index) => (
                                    <tr key={index}>
                                        <StyledTd>{formatTime(slot.time)}</StyledTd>

                                        <StyledTd><Counter max={slot.courtAvailable} /></StyledTd>
                                        <StyledTd>{slot.courtAvailable} courts</StyledTd>
                                        <StyledTd><i style={{ fontSize: "24px" }} onClick={() => props.handleRowDeletion(index)} className="bi bi-x"></i></StyledTd>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={props.closeModal}>Back</button>
                    <button type="button" className="btn btn-primary" onClick={handleNextToDetailModal}>Next</button>
                </div></>
            : <DetailModal showReviewModal={showReviewModal} handleBackToSummaryModal={handleBackToSummaryModal} 
            handleBackToDetailModal={handleBackToDetailModal} handleNextToReviewModal={handleNextToReviewModal} 
            closeModal={props.closeModal} filteredSlots={props.filteredSlots} />}
    </div>)
}