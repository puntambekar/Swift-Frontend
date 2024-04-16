import React, { useState } from "react";
import { ReviewModal } from "./ReviewModal";
import Venue from "../../../Models/Venue";

// Custom hook for form validation
const useFormValidation = () => {
  const [values, setValues] = useState({
    name: "",
    phoneNumber: "",
    email: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    phoneNumber: "",
    email: ""
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    setErrors({
        ...errors,
        [name]:""
    })
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: values.name.trim() ? "" : "Please enter your name.",
      phoneNumber: /^\d{10}$/.test(values.phoneNumber)
        ? ""
        : "Please enter a valid phone number.",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
        ? ""
        : "Please enter a valid email address."
    };

    setErrors(newErrors);

    // Check if any field has an error
    Object.values(newErrors).forEach(error => {
      if (error) {
        valid = false;
      }
    });

    return valid;
  };

  return { values, errors, handleChange, validateForm };
};

const DetailModal: React.FC<{
  showReviewModal: boolean,
  handleBackToSummaryModal: () => void,
  handleNextToReviewModal: () => void,
  closeModal: () => void,
  handleBackToDetailModal: () => void,
  filteredSlots: { time: string, courtAvailable: number, courtBooked: number }[] | undefined,
  venue: Venue,
  selectedDate: string
}> = (props) => {
  const { values, errors, handleChange, validateForm } = useFormValidation();

  const handleSubmitAndNextToReview = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("submit", values);
      props.handleNextToReviewModal();
    }
  };

  return (
    <>
      {!props.showReviewModal ? (
        <>
          <div className="modal-header">
            <h5 className="modal-title">Details</h5>
            <button type="button" className="btn-close" onClick={props.closeModal}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmitAndNextToReview}>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">Name:</label>
                <input className={`form-control ${errors.name && "is-invalid shake"}`} type="text" id="name" name="name" value={values.name} onChange={handleChange} required />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="phoneNumber">Phone Number:</label>
                <input className={`form-control ${errors.phoneNumber && "is-invalid shake"}`} type="tel" id="phoneNumber" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} required />
                {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">Email:</label>
                <input className={`form-control ${errors.email && "is-invalid shake"}`} type="email" id="email" name="email" value={values.email} onChange={handleChange} required />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={props.handleBackToSummaryModal}>Back</button>
            <button type="submit" onClick={handleSubmitAndNextToReview} className="btn btn-primary">Next</button>
          </div>
        </>
      ) : (
        <ReviewModal filteredSlots={props.filteredSlots} userData={values} handleBackToDetailModal={props.handleBackToDetailModal}
          closeModal={props.closeModal} venue={props.venue} selectedDate={props.selectedDate} />
      )}
    </>
  );
}

export default DetailModal;
