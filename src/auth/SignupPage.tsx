import { useState } from "react";
import User from "../Models/User";
import { Spinner } from "../Commons/Spinner";
import "./sign-up-page.css";

import { SignupError } from "./SignupError";
import { SuccessModal } from "../Commons/SuccessModal";


const useFormValidation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    // password: ''
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    // password: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ""
    })
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      firstName: formData.firstName.trim() ? "" : "Please enter your name.",
      lastName: formData.lastName.trim() ? "" : "Please enter your last name.",

      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
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
  return { formData, errors, handleChange, validateForm };
};

export const SignupPage: React.FC<{ closeSignupModal: () => void }> = (props) => {
  const { formData, errors, handleChange, validateForm } = useFormValidation();

  const [signupSuccess, setSignupSuccess] = useState(false);
  const [signupError, setSignupError] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    console.log("handleSubmit")
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("yes valid")
      const url = "http://localhost:8080/api/user/register";
      const userData = new User(formData.firstName, formData.lastName, formData.email);
      console.log(userData);

      try {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userData)
        };

        const newUserResponse = await fetch(url, requestOptions);
        console.log(newUserResponse);
        if (newUserResponse.ok) {
          setSignupSuccess(true);
        }
        if (!newUserResponse.ok) {
          setSignupError(true);
        }

      } catch (error: any) {
        // setHttpError(error.message);

      } finally {
        // setIsLoading(false);
      }
    }


  }

  return (
    <>
      <div className="modal-overlay"></div>
      <div
        className={`modal show`}
        style={{ display: "block" }}
        tabIndex={-1}
        role="dialog"

      >
        <div className="modal-dialog modal-dialog-centered" >
          <div className="modal-content">
            <>
              <div className="modal-header">
                <h5 className="modal-title">Create Account</h5>
                <button type="button" className="bi bi-backspace" onClick={props.closeSignupModal}></button>
              </div>
              <div className="modal-body">

                <form onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <label className="form-label" htmlFor="firstName">First Name:</label>
                    <input className={`form-control ${errors.firstName && "is-invalid shake"}`} type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                  </div>
                  <div className="mb-2">
                    <label className="form-label" htmlFor="lastName">Last Name:</label>
                    <input className={`form-control ${errors.lastName && "is-invalid shake"}`} type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                  </div>
                  <div className="mb-2">
                    <label className="form-label" htmlFor="email">Email:</label>
                    <input className={`form-control ${errors.email && "is-invalid shake"}`} type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  {/* <div >
                    <label className="form-label" htmlFor="password">Password</label>
                    <input className="form-control" type="password" name="password" placeholder="Password" onChange={handleChange} />
                  </div> */}

                </form>

              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button type="submit" onClick={handleSubmit} className="btn btn-success btn-lg">
                  Sign Up
                </button>
              </div>
            </>
          </div>
        </div>
      </div>
      {
        signupSuccess &&
        <SuccessModal line1={"Your account has been created"} line2={"Please check your email for account activation"} />
      }

      {
        signupError &&
        <SignupError />
      }
    </>
  )
}


