import { useOktaAuth } from "@okta/okta-react";
import { useState } from "react";
import Message from "../../Models/Message";

export const ContactForm = ()=>{
    const { authState } = useOktaAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [displayWarning, setDisplayWarning] = useState(false);
    const [displaySuccess, setDisplaySuccess] = useState(false);

    async function submitMessage() {
        console.log(name,email,message);
        const url = `${process.env.REACT_APP_API}/message/add`;
        if (name !== "" && email !== "" && message !=="") {
            const messageRequest: Message = new Message(name, email,message);
            const requestOption = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(messageRequest)
            };

            const submitMessageResponse = await fetch(url, requestOption);
            if (!submitMessageResponse.ok) {
                throw new Error("Something went wrong!")
            }
            setName("");
            setEmail("");
            setMessage("");
            setDisplayWarning(false);
            setDisplaySuccess(true);
        }
        else {
            setDisplayWarning(true);
            setDisplaySuccess(false);
        }

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
                            Message sent successfully
                        </div>
                    }
                    <div className="mb-3">
                        <label className="form-label">Name
                        </label>
                        <input type="text" className="form-control" id="name" placeholder="Name"
                            onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email
                        </label>
                        <input type="text" className="form-control" id="email" placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" id="message"
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