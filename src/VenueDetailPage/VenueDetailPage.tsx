import { useEffect, useState } from "react"
import { MapView } from "./Components/MapView";
import { GalleryView } from "./Components/GalleryView";
import Venue from "../Models/Venue";
import MonthlyAvailabiltyModel from "../Models/WeeklyAvailabiltyModel";
import { WeeklyAvailabilityChart } from "./Components/WeeklyAvailabilityChart";
import { TimeSlot } from "./Components/TimeSlot";
import { Features } from "./Components/Features";
import "./../SearchPage/Components/Search.css";
import { DayAvailability } from "./Components/DayAvailability";
import { Booking } from "./Components/Booking";
import { Link } from "react-router-dom";

export const VenueDetailPage = () => {
    const [isGalleryView, setIsGalleryView] = useState(false);
    const [viewWeeklyData, setViewWeeklyData] = useState(false);


    const [selectedVenue, setSelectedVenue] = useState<Venue>();

    function toggleMapGallery() {
        setIsGalleryView(!isGalleryView);

    }
    function toggleWeeklyData() {
        setViewWeeklyData(!viewWeeklyData);

    }



    const venueId = window.location.pathname.split("/")[2];

    useEffect(() => {
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
                venueId: responseJson.venueId,
                businessName: responseJson.businessName,
                city: responseJson.city,
                address: responseJson.address,
                availabilityData: responseJson.availability
            }
            console.log(loadedVenue);
            setSelectedVenue(loadedVenue);

        };

        fetchVenue().catch(() => { })
    }, [])

    return (<div>
        <div className="container-fluid mt-3 mb-3" style={{ position: "relative", maxHeight: "500px", overflow: "auto" }}>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center mt-3 mb-3" style={{ position: "absolute" }}>
                    <button className="btn btn-primary" type="button" style={{ zIndex: 1 }} onClick={toggleMapGallery}>{isGalleryView ? "Show Map" : "Show Gallery"}</button>
                </div>
            </div>
            {
                !isGalleryView ?
                    <MapView />
                    :
                    <GalleryView />

            }

        </div>
        <div className="fixed-bottom d-flex justify-content-center" style={{ marginBottom: "70px" }}>
            <Link to="/booking" type="button" className="btn btn-danger btn-lg">Book Court</Link>
        </div>
        <Features />
    </div>
    );
}