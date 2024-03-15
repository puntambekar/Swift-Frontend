import { useState } from "react"
import { MapView } from "./Components/MapView";
import { GalleryView } from "./Components/GalleryView";
import Venue from "../Models/Venue";
import MonthlyAvailabiltyModel from "../Models/MonthlyAvailabiltyModel";
import { WeeklyAvailabilityChart } from "./Components/WeeklyAvailabilityChart";







export const VenueDetailPage = () => {
    const [isGalleryView, setIsGalleryView] = useState(false);
    function toggleMapGallery() {
        setIsGalleryView(!isGalleryView);
    
    }

    const date = "3/12/2024";
    const day = "Tue";
    const venue = new Venue(
            0,
            "Golden Grove",
            "123 Main Street",
            "Fictionville"
    )


    const monthlyavailability = new MonthlyAvailabiltyModel(0, "2024", "03", [{
        date: "3/13/2024",
        hourlyAvailability: [{ time: "8am", availability: 10 },{ time: "8am", availability: 10 },{ time: "9am", availability: 10 },{ time: "10am", availability: 10 }]
    },{
        date: "3/14/2024",
        hourlyAvailability: [{ time: "8am", availability: 10 },{ time: "8am", availability: 10 },{ time: "9am", availability: 10 },{ time: "10am", availability: 10 }]
    },
    {
        date: "3/15/2024",
        hourlyAvailability: [{ time: "8am", availability: 10 },{ time: "8am", availability: 10 },{ time: "9am", availability: 10 },{ time: "10am", availability: 10 }]
    },
    {
        date: "3/16/2024",
        hourlyAvailability: [{ time: "8am", availability: 10 },{ time: "8am", availability: 10 },{ time: "9am", availability: 10 },{ time: "10am", availability: 10 }]
    },
    {
        date: "3/17/2024",
        hourlyAvailability: [{ time: "8am", availability: 10 },{ time: "8am", availability: 10 },{ time: "9am", availability: 10 },{ time: "10am", availability: 10 }]
    },
    {
        date: "3/18/2024",
        hourlyAvailability: [{ time: "8am", availability: 10 },{ time: "8am", availability: 10 },{ time: "9am", availability: 10 },{ time: "10am", availability: 10 }]
    },
    {
        date: "3/19/2024",
        hourlyAvailability: [{ time: "8am", availability: 10 },{ time: "8am", availability: 10 },{ time: "9am", availability: 10 },{ time: "10am", availability: 10 }]
    },
    {
        date: "3/20/2024",
        hourlyAvailability: [{ time: "8am", availability: 10 },{ time: "8am", availability: 10 },{ time: "9am", availability: 10 },{ time: "10am", availability: 10 }]
    },
    {
        date: "3/21/2024",
        hourlyAvailability: [{ time: "8am", availability: 10 },{ time: "8am", availability: 10 },{ time: "9am", availability: 10 },{ time: "10am", availability: 10 }]
    },
    {
        date: "3/22/2024",
        hourlyAvailability: [{ time: "8am", availability: 10 },{ time: "8am", availability: 10 },{ time: "9am", availability: 10 },{ time: "10am", availability: 10 }]
    },
    {
        date: "3/23/2024",
        hourlyAvailability: [{ time: "8am", availability: 10 },{ time: "8am", availability: 10 },{ time: "9am", availability: 10 },{ time: "10am", availability: 10 }]
    },
    {
        date: "3/24/2024",
        hourlyAvailability: [{ time: "8am", availability: 10 },{ time: "8am", availability: 10 },{ time: "9am", availability: 10 },{ time: "10am", availability: 10 }]
    },
    {
        date: "3/25/2024",
        hourlyAvailability: [{ time: "8am", availability: 10 },{ time: "8am", availability: 10 },{ time: "9am", availability: 10 },{ time: "10am", availability: 10 }]
    },
    {
        date: "3/26/2024",
        hourlyAvailability: [{ time: "8am", availability: 10 },{ time: "8am", availability: 10 },{ time: "9am", availability: 10 },{ time: "10am", availability: 10 }]
    },
    {
        date: "3/27/2024",
        hourlyAvailability: [{ time: "8am", availability: 10 },{ time: "8am", availability: 10 },{ time: "9am", availability: 10 },{ time: "10am", availability: 10 }]
    },
    {
        date: "3/28/2024",
        hourlyAvailability: [{ time: "8am", availability: 10 },{ time: "8am", availability: 10 },{ time: "9am", availability: 10 },{ time: "10am", availability: 10 }]
    }
    
    ]);
    

   

    return (<div>

        
        <div className="container-fluid mt-3 mb-3" style={{position: "relative", maxHeight: "500px", overflow: "auto" }}>
        <div className="row">
            <div className="col-md-12 d-flex justify-content-center mt-3 mb-3" style={{position: "absolute"}}>
                <button className="btn btn-dark" type="button" style={{ zIndex: 1 }} onClick={toggleMapGallery}>{isGalleryView ? "Show Map" : "Show Gallery"}</button>
            </div>
        </div>
        {
            !isGalleryView?
            <MapView/>
            :
            <GalleryView/>
        
        }
        </div>
        <WeeklyAvailabilityChart/>
    </div>

    );
}