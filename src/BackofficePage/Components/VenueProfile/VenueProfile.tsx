import { useEffect, useState } from "react";
import Venue from "../../../Models/Venue";
import { Spinner } from "../../../Commons/Spinner";
import { Errorpage } from "../../../Commons/Errorpage";
import { formatTime } from "../../../Utils/helperMethods";
import { fetchVenueData } from "../../../Services/venueService";

export const VenueProfile = () => {

    const [venue, setVenue] = useState<Venue>();
    const [httpError, setHttpError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        const fetchVenue = async () => {
            try {
                const loadedVenue = await fetchVenueData();
                setVenue(loadedVenue);
                setIsLoading(false);
            } catch (error:any) {
                setIsLoading(false);
            setHttpError(error.message);
            }
        };
        fetchVenue();
    }, []);

    // Function to handle date input change
    const handleDateChange = (e: any) => {
        setSelectedDate(e.target.value);
    };

   
    
    // // Filter availability based on selected date
    // const filteredAvailability = venue?.availabilityData.dailyAvailability.find(
    //     (dailyAvailability) => dailyAvailability.date === selectedDate
    // );

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

    return (
        <form>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Venue Profile</h2>
                        <div className="form-group">
                            <label htmlFor="businessName">Business Name</label>
                            <input type="text" className="form-control" id="businessName" value={venue?.businessName} readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" className="form-control" id="city" value={venue?.city} readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="address" value={venue?.address} readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="selectedDate">Select Date:</label>
                            <input
                                type="date"
                                className="form-control"
                                id="selectedDate"
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </div>
                    </div>
                  
                </div>
                <div className="row">
                <div className="col-md-6">
                        {/* {filteredAvailability && (
                            <div>
                                <h3>Availability for {selectedDate}</h3>
                                <ul className="list-group">
                                    {filteredAvailability.hourlyAvailability.map(
                                        (hourlyAvailability, index) => (
                                            <li className="list-group-item" key={index}>
                                                {formatTime(hourlyAvailability.time)}: {hourlyAvailability.courtAvailable} courts available
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )} */}
                    </div>
                </div>
            </div>
        </form>
    )
}
