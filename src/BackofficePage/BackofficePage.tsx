import { useOktaAuth } from "@okta/okta-react";
import { Redirect } from "react-router-dom";
import { AdminRetrieveBooking } from "./Components/AdminRetrieveBooking";
import { AdminManageBooking } from "./Components/AdminManageBooking";
import { VenueProfile } from "./Components/VenueProfile";

export const Backoffice = () => {

    const { authState } = useOktaAuth();
    const action: string = window.location.pathname.split("/")[2];

    if (authState?.accessToken?.claims.userType === undefined) {
        return <Redirect to="/home" />
    }

    let content;
    switch (action) {
        case "bookings":
            content = <AdminRetrieveBooking />;
            break;
        case "profile":
            content = <VenueProfile/>;
            break;
        case "manage":
            content = <AdminManageBooking />;
            break;
        default:
            content = null; // Render nothing if no action matches
    }

    return <div>{content}</div>;
}