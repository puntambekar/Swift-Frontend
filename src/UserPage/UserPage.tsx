import { useOktaAuth } from "@okta/okta-react";
import { Redirect } from "react-router-dom";
import { ManageBookings } from "../Commons/ManageBookings";


export const UserPage = () => {

    const { authState } = useOktaAuth();
    const action: string = window.location.pathname.split("/")[2];

    if (!authState?.isAuthenticated) {
        return <Redirect to="/home" />
    }

    let content;
    switch (action) {
        case "manage":
            content = <ManageBookings/>;
            break;
        default:
            content = null; // Render nothing if no action matches
    }

    return <div>{content}</div>;
}