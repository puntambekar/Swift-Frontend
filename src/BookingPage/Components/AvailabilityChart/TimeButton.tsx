import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useState } from 'react';

interface TimeButtonProps {
    time: string;
    courtAvailable: number;
    onClick: () => void;
    isClicked?: boolean;
}

export const TimeButton: React.FC<TimeButtonProps> = (props) => {
    const date = new Date(`1970-01-01T${props.time}`);
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const [isDisabled,setIsDisabled] = useState(false);
    const [slotColor,setSlotColor] = useState("");
   

    const buttonKey = uuidv4();


    useEffect(() => {

        // Update state based on court availability
        if (props.courtAvailable === 0) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }

        if (props.courtAvailable > 6) {
            setSlotColor("btn-outline-success");
        } else if (props.courtAvailable > 3) {
            setSlotColor("btn-outline-warning");
        } else if(props.courtAvailable>1) {
            setSlotColor("btn-outline-danger");
        } else{
            setSlotColor("btn-outline-secondary");
        }
    }, [props.courtAvailable]);

    return (
        <div>
            <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                <input 
                    type="checkbox" 
                    className="btn-check" 
                    id={`btncheck${buttonKey}`} 
                    autoComplete="off"
                    checked={props.isClicked || false} // Provide a default value
                    onChange={props.onClick} // Call onClick handler provided by parent
                    disabled={isDisabled}
                />
                <label className={`btn ${slotColor} rounded-pill`} htmlFor={`btncheck${buttonKey}`}>
                    {time}
                </label>
            </div>
        </div>
    );
};
