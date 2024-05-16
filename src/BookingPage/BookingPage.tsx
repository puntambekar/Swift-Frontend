import { useEffect, useState } from "react";
import Venue from "../Models/Venue";
import { AvailabilityChart } from "./Components/AvailabilityChart/AvailabilityChart";
import { Spinner } from "react-bootstrap";
import { Errorpage } from "../Commons/Errorpage";
import { fetchVenueData } from "../Services/venueService";

export const BookingPage: React.FC<{}> = () => {

    const [venue, setVenue] = useState<Venue>();
    const [httpError, setHttpError] = useState(null);
    const [IsLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchVenue = async () => {
            try {
                const loadedVenue = await fetchVenueData();
                setVenue(loadedVenue);
                setIsLoading(false);
            } catch (error: any) {
                setIsLoading(false);
                setHttpError(error.message);
            }
        };
        fetchVenue();
    }, []);

    console.log(venue);

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

    return (<div className="container mt-3">
        <div className="row">
            <div className="col">
                {
                    venue && <AvailabilityChart selectedVenue={venue} />
                }

            </div>
        </div>

    </div>
    );
}


