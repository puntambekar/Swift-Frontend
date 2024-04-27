import { useOktaAuth } from "@okta/okta-react";
import { useState } from "react";

export const ContactForm = ()=>{
    const { authState } = useOktaAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [displayWarning, setDisplayWarning] = useState(false);
    const [displaySuccess, setDisplaySuccess] = useState(false);

    async function submitMessage() {
        // const url = `${process.env.REACT_APP_API}/messages/secure/add/message`;
        // if (authState?.isAuthenticated && title !== "" && question !== "") {
        //     const messageRequest: MessageModel = new MessageModel(title, question);
        //     const requestOption = {
        //         method: "POST",
        //         headers: {
        //             Authorization: `Bearer ${authState?.accessToken?.accessToken}`,
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(messageRequest)
        //     };

        //     const submitQuestionResponse = await fetch(url, requestOption);
        //     if (!submitQuestionResponse.ok) {
        //         throw new Error("Something went wrong!")
        //     }
        //     setTitle("");
        //     setQuestion("");
        //     setDisplayWarning(false);
        //     setDisplaySuccess(true);
        // }
        // else {
        //     setDisplayWarning(true);
        //     setDisplaySuccess(false);
        // }

    }

    return (
        <div className="mt-5">

            <div>
              <h3>Contact Us</h3>  
            </div>
            <div>
                <form method="POST">
                    {
                        displayWarning &&
                        <div className="alert alert-danger" role="alert">
                            All fields must be filled out
                        </div>
                    }
                    {displaySuccess &&
                        <div className="alert alert-success" role="alert">
                            Question added successfully
                        </div>
                    }
                    <div className="mb-3">
                        <label className="form-label">Name
                        </label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name"
                            onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email
                        </label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1"
                            rows={3} onChange={(e) => { setMessage(e.target.value) }} value={message}></textarea>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary mt-3"
                            onClick={submitMessage}>Send</button>
                    </div>

                </form>

            </div>
        </div>
    );
}