import { useState, useEffect } from "react";
import Venue from "../../../Models/Venue";
import { Spinner } from "../../../Utils/Spinner";
import { Errorpage } from "../../../Utils/Errorpage";

export const AdminManageAvailability=()=>{
    const [venue, setVenue] = useState<Venue>();
    const [httpError, setHttpError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState('');

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

        setVenue(loadedVenue);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchVenue().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, [])

    if (isLoading) {
        return (
            <Spinner />
        )
    }

    if (httpError) {
        return (
            <Errorpage />
        )
    }
    return(<div>Manage Availability</div>)
}