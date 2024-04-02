import { useEffect, useState } from "react";
import Venue from "../../Models/Venue";
import { WeeklyAvailabilityChart } from "./WeeklyAvailabilityChart";

export const Booking: React.FC<{}> = () => {

    const [selectedVenue, setSelectedVenue] = useState<Venue>();

    const venueId = window.location.pathname.split("/")[2];
    const fetchVenue = async () => {
        const url: string = `http://localhost:8080/api/venues/details?venueId=${venueId}`;
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

    };

    useEffect(() => {
        
        fetchVenue().catch(() => { })
    }, [venueId])



    return (<div className="container mt-3">
        <div className="row">
            <div className="col">
                {
                   selectedVenue &&  <WeeklyAvailabilityChart selectedVenue={selectedVenue} />
                }
               
            </div>
        </div>
        
    </div>
    );
}


