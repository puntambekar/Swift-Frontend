import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';

interface TimeButtonProps {
    time: string;
    courtAvailable: number;
    onClick: () => void;
    isClicked?: boolean;
}

export const TimeButton: React.FC<TimeButtonProps> = (props) => {
    const date = new Date(props.time);
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const buttonKey = uuidv4();

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
                />
                <label className="btn btn-outline-primary rounded-pill" htmlFor={`btncheck${buttonKey}`}>
                    {time}
                </label>
            </div>
        </div>
    );
};
