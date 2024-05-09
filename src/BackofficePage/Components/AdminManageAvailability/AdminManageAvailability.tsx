import { useState, useEffect } from "react";
import Venue from "../../../Models/Venue";
import { Spinner } from "../../../Utils/Spinner";
import { Errorpage } from "../../../Utils/Errorpage";
import { fetchVenueData } from "../../../Services/venueService";
import Availabilty from "../../../Models/Availabilty";
import { fetchMonthlyAvailabilityData, saveUpdatedMonthlyAvailabilityData } from "../../../Services/availabilityService";
import { Table } from "react-bootstrap";
import { formatTime } from "../../../Utils/helperMethods";
import { Link } from "react-router-dom";
import { AvailabilityGrid } from "./Components/AvailabilityGrid";

export const AdminManageAvailability = () => {
    const [availability, setAvailability] = useState<Availabilty>();
    const [httpError, setHttpError] = useState(null);
    const [displaySuccess,setDisplaySuccess] = useState(false);
    const [displayError,setDisplayError] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);
    const [selectedMonthYear, setSelectedMonthYear] = useState<string>();
    const [showAvailabilityGrid, setShowAvailabilityGrid] = useState(false);

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // Adding 1 because getMonth() returns values from 0 to 11

    const months = Array.from({ length: 12 }, (_, index) => {
        const nextMonth = (currentMonth + index - 1) % 12 + 1; // Calculate the next month, wrapping around to 1 if necessary
        const yearOffset = Math.floor((currentMonth + index - 1) / 12); // Calculate the number of years to add
        const year = currentYear + yearOffset; // Calculate the year value
        return `${String(nextMonth).padStart(2, '0')}/${year}`; // Format the month and year as MM/YYYY
    });



    const fetchAvailability = async (year: string, month: string) => {

        try {
            const loadedAvailability = await fetchMonthlyAvailabilityData(year, month);
            setAvailability(loadedAvailability);
            setShowAvailabilityGrid(true);
            //  setIsLoading(false);
        } catch (error: any) {
            //  setIsLoading(false);
            setHttpError(error.message);
        }
    };

    if (httpError) {
        return (
            <Errorpage />
        )
    }
    const handleAvailabilityChange = (dayIndex: number, hourIndex: number, newValue: string) => {
        let updatedAvailability;

        if (availability) {

            updatedAvailability = { ...availability };
            updatedAvailability.dailyAvailability[dayIndex].hourlyAvailability[hourIndex].courtAvailable = parseInt(newValue);
            setAvailability(updatedAvailability);

        }

    };
    const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setSelectedMonthYear(selectedValue);
        console.log("here", selectedValue.split("/")[1], selectedValue.split("/")[0]);
        fetchAvailability(selectedValue.split("/")[1], selectedValue.split("/")[0]);


    };

    const updateAvailabilityOnServer = async()=>{
        console.log("updateAvailabilityOnServer",availability);
        if(availability){
            try {
                const response = await saveUpdatedMonthlyAvailabilityData(availability);
                if(response.ok){
                    setDisplaySuccess(true);
                }
                else{setDisplayError(true)};
            } catch (error: any) {
               
                setHttpError(error.message);
            }
        }
  
    }
    const closeSuccessMessage = () => {
        setDisplaySuccess(false);
    }

    return (

        <div className="container">
            <div className="row my-3"> {/* Add margin and row class */}
                <div className="col-auto"> {/* Use col-auto class for automatic column width */}
                    <label className="form-label">Edit Availability data for:</label>
                </div>
                <div className="col-sm-3"> {/* Use col class for the dropdown */}
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={handleMonthChange}
                        value={selectedMonthYear}


                    >
                        <option value="">Select</option>
                        {months.map((month) => (
                            <option key={month} value={month}>{month}</option>
                        ))}
                    </select>
                </div>
            </div>


            <div style={{ overflowY: "auto" }}>
                {showAvailabilityGrid && <AvailabilityGrid availability={availability} handleAvailabilityChange={handleAvailabilityChange} />}

            </div>
            <div className="fixed-bottom d-flex justify-content-center" style={{ marginBottom: "70px" }}>
                <button onClick={updateAvailabilityOnServer} className="btn btn-danger btn-lg">Update Availability</button>
            </div>
            {displaySuccess  && (
                <div className="fixed-top alert alert-success alert-dismissible fade show mb-0" role="alert">
                    Availability updated successfully!
                    <button type="button" className="btn-close" aria-label="Close" onClick={closeSuccessMessage}></button>
                </div>
            )}
        </div>

    );
}

