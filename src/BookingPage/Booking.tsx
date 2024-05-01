import { useEffect, useState } from "react";
import Venue from "../Models/Venue";
import { WeeklyAvailabilityChart } from "./Components/AvailabilityChart/WeeklyAvailabilityChart";
import { Spinner } from "react-bootstrap";
import { Errorpage } from "../Utils/Errorpage";

export const Booking: React.FC<{}> = () => {

    const [selectedVenue, setSelectedVenue] = useState<Venue>();
    const [httpError, setHttpError] = useState(null);
    const [IsLoading, setIsLoading] = useState(true);

    
    const fetchVenue = async () => {
        const url: string = `http://localhost:8080/api/venues/details`;
        const requestOptions = {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        }
        const response = await fetch(url, requestOptions);
        const responseJson = await response.json();

        const loadedVenue: Venue = {
            venueId: responseJson.id,
            businessName: responseJson.businessName,
            city: responseJson.city,
            address: responseJson.address,
            availabilityData: responseJson.availability
        }

        setSelectedVenue(loadedVenue);
        setIsLoading(false);
       

    };
    console.log(selectedVenue);

    useEffect(() => {

        fetchVenue().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, [])

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
                    selectedVenue && <WeeklyAvailabilityChart selectedVenue={selectedVenue} />
                }

            </div>
        </div>

    </div>
    );
}


