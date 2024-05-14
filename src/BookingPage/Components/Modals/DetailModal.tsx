import React, { useState } from "react";
import { ReviewModal } from "./ReviewModal";
import Venue from "../../../Models/Venue";

// Custom hook for form validation
const useFormValidation = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
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
      firstName: values.firstName.trim() ? "" : "Please enter your first name.",
      lastName: values.lastName.trim() ? "" : "Please enter your last name.",
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
                <label className="form-label" htmlFor="firstName">First Name:</label>
                <input className={`form-control ${errors.firstName && "is-invalid shake"}`} type="text" id="firstName" name="firstName" value={values.firstName} onChange={handleChange} required />
                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="lastName">Last Name:</label>
                <input className={`form-control ${errors.lastName && "is-invalid shake"}`} type="text" id="lastName" name="lastName" value={values.lastName} onChange={handleChange} required />
                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
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
