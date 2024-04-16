import { useState } from "react";
import { SearchBar } from "./Components/SearchBar"
import { SportsTiles } from "./Components/SportTiles"
import { SportsTile } from "./Components/SportsTile";
import { Errorpage } from "../Utils/Errorpage";

export const SearchPage = () => {
    const [selectedVenue,setSelectedVenue] = useState("");
    const [selectedDate,setSelectedDate] = useState("");
    const [httpError, setHttpError] = useState(null);

    const handleHttpError=(error:any)=>{
        setHttpError(error.message);
    }
  
    const handleVenueChange = (value:string) => {
        setSelectedVenue(value);
      
    };
 
    const handleDateChange = (value:string) => {
        setSelectedDate(value);
      
    };

    if(httpError){
        return(
            
              
                <Errorpage/>
            
        )
      }
    return (
        <div>
            <div className="container">
                <SearchBar handleVenueChange={handleVenueChange} handleDateChange={handleDateChange} />
            </div>

            <div className="container">
              <SportsTiles selectedVenue={selectedVenue} selectedDate={selectedDate} handleHttpError={handleHttpError} />
            </div>
        </div>);




}