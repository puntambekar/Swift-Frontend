import { useEffect, useState } from "react";
import Venue from "../../Models/Venue";
import { SportsTile } from "./SportsTile";
import { Spinner } from "../../Utils/Spinner";
import { Errorpage } from "../../Utils/Errorpage";

export const SportsTiles: React.FC<{ selectedVenue: string, selectedDate: string,handleHttpError:(error:any)=>void }> = (props) => {

    const [IsLoading, setIsLoading] = useState(true);
    

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
            setIsLoading(false);


        }
        fetchAllVenues().catch((error:any) => {
            setIsLoading(false);
           props.handleHttpError(error);
        })
    }, []);

    
  if(IsLoading){
    return(
        <Spinner/>
    )
  }

  const filteredVenues = venues.filter(venue => 
    venue.businessName.toLowerCase().includes(props.selectedVenue.toLowerCase())
);


  return (
    <div className="row g-3">
        {filteredVenues.length > 0 ? (
            filteredVenues.map((venue, key) => <SportsTile venue={venue} key={key} />)
        ) : (
            <p>No records found</p>
        )}
    </div>
);
}
