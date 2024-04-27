import { useState } from "react";
import User from "../Models/User";
import { Spinner } from "../Utils/Spinner";

export const SignupPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    // const [IsLoading, setIsLoading] = useState(true);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const url = "http://localhost:8080/register";
        const userData = new User(formData.firstName, formData.lastName, formData.email, formData.password);
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
            if (!newUserResponse.ok) {
               
            }

        } catch (error: any) {
            // setHttpError(error.message);
            
        } finally {
            // setIsLoading(false);
        }

    }

    // if(IsLoading){
    //     return(
    //         <Spinner/>
    //     )
    //   }
return (
    <div className="container mt-3">
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label" htmlFor="firstName">First Name</label>
                <input className="form-control" type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="lastName">Last Name</label>
                <input className="form-control" type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-control" type="email" name="email" placeholder="Email" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="password">Password</label>
                <input className="form-control" type="password" name="password" placeholder="Password" onChange={handleChange} />
            </div>
            <button className="btn btn-primary" type="submit">Sign Up</button>
        </form>
    </div>)
}