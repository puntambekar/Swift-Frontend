import moment from "moment";
import { useState, useEffect } from "react";
import Venue from "../../Models/Venue";
import { TimeButton } from "./TimeButton";
import { Modals } from "./Modals";


interface TimeSlotProps {
    day: moment.Moment;
    selectedVenue: Venue;
 
}

export const TimeSlot: React.FC<TimeSlotProps> = (props) => {
    
   
    const avail = props.selectedVenue.availabilityData.dailyAvailability.find(avail => moment(avail.date).isSame(props.day));
    const [clickedButtons, setClickedButtons] = useState<{ [key: string]: boolean }>({});
    const [showModal, setShowModal] = useState(false);
    const [disableProceed,setDisableProceed] = useState(true);

    // Ensure proper initialization of clickedButtons
    useEffect(() => {
        if (avail) {
            const initialClickedButtons: any = {};
            avail.hourlyAvailability.forEach(a => {
                initialClickedButtons[a.time] = false;
            });
            setClickedButtons(initialClickedButtons);
        }
    }, [avail]);

    // Function to handle button click
    const handleButtonClick = (time: string) => {
        setClickedButtons(prevState => ({
            ...prevState,
            [time]: !prevState[time]
        }));
    };
    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const selectedSlots: string[] = Object.entries(clickedButtons).filter(([time, clicked]) => clicked).map(([time]) => new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    
    useEffect(() => {
        setDisableProceed(selectedSlots.length === 0);
    }, [selectedSlots]);


    return (
        <div className="container">
            <div className="row">
                {avail && avail.hourlyAvailability && avail.hourlyAvailability.map((a, key) => (
                    <div className="col-6 col-md-3 mb-3" key={key}>
                        <TimeButton
                            time={a.time}
                            courtAvailable={a.courtAvailable}
                            onClick={() => handleButtonClick(a.time)}
                            isClicked={clickedButtons[a.time]} />
                    </div>
                ))}
            </div>
            <div className="row">
            <div className="col-12 text-center">
                    <button type="button" className="btn btn-primary" disabled={disableProceed} onClick={openModal}>
                        Proceed
                    </button>
                </div>
                {showModal && (
                    <Modals selectedSlots={selectedSlots} closeModal={closeModal}  venueId = {props.selectedVenue.venueId} selectedDate={props.day.format("YYYY-MM-DD")}/>
                )}
            </div>
            {showModal && <div className="modal-backdrop fade show"></div>}
        </div>
    );
};
