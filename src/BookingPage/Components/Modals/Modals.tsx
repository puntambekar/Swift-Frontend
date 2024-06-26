import React, { useEffect, useState } from "react";
import Venue from "../../../Models/Venue";
import { Counter } from "../../../Commons/Counter";
import styled from "styled-components";
import "./Modal.css"
import { SummaryModal } from "./SummaryModal";
import { time } from "console";
import { Spinner } from "../../../Commons/Spinner";
import { Errorpage } from "../../../Commons/Errorpage";
import { fetchDailyAvailabilityForADayData } from "../../../Services/venueService";





export const Modals: React.FC<{ selectedSlots: string[], closeModal: () => void, venue: Venue, selectedDate: string; }> = (props) => {

    const [filteredSlots, setFilteredSlots] =
        useState<{ time: string, courtAvailable: number, courtBooked: number }[]>([{ time: "", courtAvailable: 0, courtBooked: 1 }]);

    const [count, setCount] = useState(0);
    const [httpError, setHttpError] = useState(null);
    const [IsLoading, setIsLoading] = useState(true);




    const fetchDailyAvailabilityForADay = async () => {

        const responseJson = await fetchDailyAvailabilityForADayData(props.selectedDate);
        console.log("response",responseJson);
        console.log(props.selectedSlots);

        const filtered = responseJson.filter((a: { time: string }) => {
            return props.selectedSlots.includes(new Date(`1970-01-01T${a.time}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        });

        const filteredWithDefault = filtered.map((item: { time: string, courtAvailable: number }) => ({
            time: item.time,
            courtAvailable: item.courtAvailable,
            courtBooked: 1
        }))
        console.log("filteredwd", filteredWithDefault)

        setFilteredSlots(filteredWithDefault);
        setIsLoading(false);


    };


    useEffect(() => {

        fetchDailyAvailabilityForADay().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, [props.venue.venueId])



    const handleRowDeletion = (index: number) => {
        setFilteredSlots((prevSlots) => {
            const updatedSlots = [...prevSlots];
            updatedSlots.splice(index, 1);
            if (updatedSlots.length === 0) {
                props.closeModal();
            }
            return updatedSlots;
        });
    };

    const updateFilteredSlots = (slots: { time: string, courtAvailable: number, courtBooked: number }[]) => {
        setFilteredSlots(slots)
    }
    if (IsLoading) {
        return (
            <Spinner />
        )
    }

    if (httpError) {
        return (


            <Errorpage />

        )
    }
    return (<div className={`modal show`} style={{ display: "block" }} tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered ">

            {<SummaryModal filteredSlots={filteredSlots} handleRowDeletion={handleRowDeletion} venue={props.venue}
                closeModal={props.closeModal} selectedDate={props.selectedDate} updateFilteredSlots={updateFilteredSlots} />}

        </div>
    </div>

    );
}

