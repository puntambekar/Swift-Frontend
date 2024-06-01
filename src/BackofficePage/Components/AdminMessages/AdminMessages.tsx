import { useOktaAuth } from "@okta/okta-react";
import Message from "../../../Models/Message";
import { useEffect, useState } from "react";
import { Spinner } from "../../../Commons/Spinner";
import { Errorpage } from "../../../Commons/Errorpage";
import { MessageCard } from "./Components/MessageCard";
import { fetchMessagesData } from "../../../Services/messageService";

export const AdminMessages =()=>{
    const { authState } = useOktaAuth();

    const [httpError, setHttpError] = useState(null);
    const [IsLoading, setIsLoading] = useState(true);

    const [messages, setMessages] = useState<Message[]>();
    
    const [messageStatusChanged, setMessageStatusChanged] = useState(false);
   
    const isAdmin = authState?.accessToken?.claims.userType === "admin";
    
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const loadedMessages = await fetchMessagesData(isAdmin,authState?.accessToken?.accessToken);
                setMessages(loadedMessages);
                setIsLoading(false);
            } catch (error:any) {
                setIsLoading(false);
            setHttpError(error.message);
            }
        };
        fetchMessages();
        console.log("in useeffect");
    }, []);

    if (IsLoading) {
        return (
            <Spinner />
        )
    }

    if (httpError) {
        return (
            <Errorpage />
        )
    }


    return (
        <div className="container">
            {/* <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <div className="input-group rounded">
                        <input
                            type="search"
                            className="form-control rounded"
                            placeholder="Search by email or booking ID"
                            aria-label="Search"
                            aria-describedby="search"
                            value={searchTerm}
                            onChange={handleSearchEmail}
                            style={{ fontStyle: 'italic' }}
                        />
                        <button className="btn btn-primary">
                        <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div> */}
            <div>
                {messages?.map(message => <MessageCard key={message.id} message={message}  accessToken={authState?.accessToken?.accessToken} />)}
            </div>
        </div>
    )
}