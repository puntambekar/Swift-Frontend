import React, { useEffect, useState } from "react";
import Venue from "../../Models/Venue";
import { Counter } from "./Counter";
import styled from "styled-components";
import "./Modal.css"
import { SummaryModal } from "./SummaryModal";





export const Modals: React.FC<{ selectedSlots: string[], closeModal: () => void, venueId: number, selectedDate: string; }> = (props) => {

    const [filteredSlots, setFilteredSlots] = useState<{ time: string, courtAvailable: number }[]|undefined>();

    const [count, setCount] = useState(0);
   


    const fetchVenue = async () => {
        const url: string = `http://localhost:8080/api/venues/dailyAvail?venueId=${props.venueId}&date=${props.selectedDate}`;
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

        setFilteredSlots(filtered);


    };


    useEffect(() => {

        fetchVenue().catch(() => { })
    }, [props.venueId])

    

    const handleRowDeletion = (index: number) => {
        setFilteredSlots((prevSlots) => {
            if (prevSlots === undefined) {
                return undefined;
              }
            const updatedSlots = [...prevSlots];
            updatedSlots.splice(index, 1);
            return updatedSlots;
        });
    };
  

    return (<div className={`modal show`} style={{ display: "block" }} tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered ">
            
                {<SummaryModal filteredSlots={filteredSlots} handleRowDeletion={handleRowDeletion} closeModal={props.closeModal}/>}
            
        </div>
    </div>

    );
}

