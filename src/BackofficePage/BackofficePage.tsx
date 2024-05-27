import { useOktaAuth } from "@okta/okta-react";
import { Redirect } from "react-router-dom";
import { AdminRetrieveBookings } from "./Components/AdminRetrieveBooking/AdminRetrieveBookings";

import { VenueProfile } from "./Components/VenueProfile/VenueProfile";

import Booking from "../Models/Booking";
import { ManageBookings } from "../Commons/ManageBookings";
import { AdminManageAvailability } from "./Components/AdminManageAvailability/AdminManageAvailability";

export const Backoffice = () => {

    const { authState } = useOktaAuth();
    const action: string = window.location.pathname.split("/")[1];

    if (authState?.accessToken?.claims.userType === undefined) {
        return <Redirect to="/home" />
    }

 

    let content;
    switch (action) {
        case "bookings":
            content = <AdminRetrieveBookings />;
            break;
        case "profile":
            content = <VenueProfile/>;
            break;
        case "manage":
            content = <ManageBookings/>;
            break;
            case "availability":
                content = <AdminManageAvailability/>;
                break;
        default:
            content = null; // Render nothing if no action matches
    }

    return <div>{content}</div>;
}