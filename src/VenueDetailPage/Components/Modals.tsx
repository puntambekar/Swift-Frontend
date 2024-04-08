import React, { useEffect, useState } from "react";
import Venue from "../../Models/Venue";
import { Counter } from "./Counter";
import styled from "styled-components";
import "./Modal.css"
import { SummaryModal } from "./SummaryModal";
import { time } from "console";





export const Modals: React.FC<{ selectedSlots: string[], closeModal: () => void, venue: Venue, selectedDate: string; }> = (props) => {

    const [filteredSlots, setFilteredSlots] = 
    useState<{ time: string, courtAvailable: number,courtBooked:number }[]>([{time:"",courtAvailable:0,courtBooked:1}]);

    const [count, setCount] = useState(0);
   


    const fetchVenue = async () => {
        const url: string = `http://localhost:8080/api/venues/dailyAvail?venueId=${props.venue.venueId}&date=${props.selectedDate}`;
        const requestOptions = {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        }
        const response = await fetch(url, requestOptions);
        const responseJson = await response.json();

        const filtered = responseJson.filter((a: { time: string }) => {
            return props.selectedSlots.includes(new Date(a.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        });
       
      const filteredWithDefault= filtered.map((item:{time:string,courtAvailable:number})=>({
        time:item.time,
        courtAvailable:item.courtAvailable,
        courtBooked:1
       }))
       console.log("filteredwd",filteredWithDefault)

        setFilteredSlots(filteredWithDefault);


    };


    useEffect(() => {

        fetchVenue().catch(() => { })
    }, [props.venue.venueId])

    

    const handleRowDeletion = (index: number) => {
        setFilteredSlots((prevSlots) => {
            const updatedSlots = [...prevSlots];
            updatedSlots.splice(index, 1);
            return updatedSlots;
        });
    };

    const updateFilteredSlots=(slots:{ time: string, courtAvailable: number,courtBooked:number }[])=>{
        setFilteredSlots(slots)
    }

    return (<div className={`modal show`} style={{ display: "block" }} tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered ">
            
                {<SummaryModal filteredSlots={filteredSlots} handleRowDeletion={handleRowDeletion} venue={props.venue} 
                closeModal={props.closeModal} selectedDate={props.selectedDate} updateFilteredSlots={updateFilteredSlots}/>}
            
        </div>
    </div>

    );
}

