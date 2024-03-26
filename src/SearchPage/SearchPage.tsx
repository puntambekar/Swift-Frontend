import { useState } from "react";
import { SearchBar } from "./Components/SearchBar"
import { SportsTiles } from "./Components/SportTiles"
import { SportsTile } from "./Components/SportsTile";

export const SearchPage = () => {
    const [selectedVenue,setSelectedVenue] = useState("");
    const [selectedDate,setSelectedDate] = useState("");
  
    const handleVenueChange = (value:string) => {
        setSelectedVenue(value);
      
    };
 
    const handleDateChange = (value:string) => {
        setSelectedDate(value);
      
    };
    return (
        <div>
            <div className="container">
                <SearchBar handleVenueChange={handleVenueChange} handleDateChange={handleDateChange} />
            </div>

            <div className="container">
              <SportsTiles selectedVenue={selectedVenue} selectedDate={selectedDate} />
            </div>
        </div>);




}