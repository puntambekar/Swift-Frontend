import { useEffect, useState } from "react";
import Venue from "../../Models/Venue";
import { SportsTile } from "./SportsTile";

export const SportsTiles: React.FC<{ selectedVenue: string, selectedDate: string }> = (props) => {

    const [httpError, setHttpError] = useState(null);
    const [venues, setVenues] = useState<Venue[]>([]);

    useEffect(() => {
        const fetchAllVenues = async () => {
            const url: string = "http://localhost:8080/api/venues";

            const response = await fetch(url);
            const responseJson = await response.json();

            const loadedVenues: Venue[] = [];

            for (const key in responseJson) {
                loadedVenues.push({
                    venueId: responseJson[key].id,
                    businessName: responseJson[key].businessName,
                    address: responseJson[key].address,
                    city: responseJson[key].city,
                    availabilityData: responseJson[key].availability

                })
            }

            setVenues(loadedVenues);


        }
        fetchAllVenues().catch((error) => {
            setHttpError(error.message)
        })
    }, []);

    return (
        <div className="row g-3">
            {(props.selectedVenue !== "") ?
                venues.filter(venue => venue.businessName === props.selectedVenue).map((venue, key) => <SportsTile venue={venue} key={key}  />) :
                venues.map((venue, key) => <SportsTile venue={venue} key={key}  />)


            }
        </div>)
}
