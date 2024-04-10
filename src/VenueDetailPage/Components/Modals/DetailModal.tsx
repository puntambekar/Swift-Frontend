import { useState } from "react";
import { ReviewModal } from "./ReviewModal";
import Venue from "../../../Models/Venue";

export const DetailModal:React.FC<{showReviewModal:boolean,handleBackToSummaryModal:()=>void, 
    handleNextToReviewModal:()=>void,closeModal: () => void,handleBackToDetailModal:()=>void
    filteredSlots: { time: string, courtAvailable: number,courtBooked:number }[] | undefined,venue:Venue,selectedDate: string}
    > = (props)=>{

      

    const [userData, setUserData] = useState({
        name: '',
        phoneNumber: '',
        email: ''
    });
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
       
        setUserData({
            ...userData,
            [name]: value
        });
    };


    const handleSubmitAndNextToReview = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        console.log("submit", userData);
        props.handleNextToReviewModal();
       };

    return(<>
    {
        !props.showReviewModal?     <>
        <div className="modal-header">
        <h5 className="modal-title">Details</h5>
        <button type="button" className="btn-close" onClick={props.closeModal}></button>
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
            <button type="button" className="btn btn-secondary" onClick={props.handleBackToSummaryModal}>Back</button>
            <button type="submit" onClick={handleSubmitAndNextToReview} className="btn btn-primary">Next</button>
        </div></>:<ReviewModal filteredSlots={props.filteredSlots} userData={userData} handleBackToDetailModal={props.handleBackToDetailModal} 
        closeModal={props.closeModal} venue={props.venue} selectedDate={props.selectedDate}/>
    }</>
)
}