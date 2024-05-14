import { Table } from "react-bootstrap"
import Availabilty from "../../../../Models/Availabilty";
import { useState } from "react";

export const AvailabilityGrid:React.FC<{availability:Availabilty|undefined,handleAvailabilityChange:(dayIndex:number, hourIndex:number, newValue:string)=>void}> = (props)=>{
    const hours = Array.from({ length: 14 }, (_, index) => index + 8);
    const getAvailabilityForHour = (day: { date?: string | Date; hourlyAvailability: any; }, hour: number) => {
        const hourAvailability = day.hourlyAvailability.find((item: { time: string | number | Date; }) => new Date(item.time).getHours() === hour);
        return hourAvailability ? hourAvailability.courtAvailable : '-';
    };
    const [updatedSlot, setUpdatedSlot] = useState();

    
    return(
        <div className="table-responsive">
        <Table striped bordered hover>
        <thead style={{ position: "sticky", top: 0, zIndex: 1, backgroundColor: "white"  }} >
            <tr >
                <th>Date</th>
                {hours.map(hour => (
                    <th  key={hour}>{hour}:00</th>
                ))}
            </tr>
        </thead>
        <tbody>
        {props.availability?.dailyAvailability.map((day, dayIndex) => (
                <tr key={day.date.toString()}>
                    <td style={{ position: "sticky", left: 0, zIndex: 1, backgroundColor: "white" }}>{day.date.toString()}</td>
                    {hours.map((hour, hourIndex) => (
                        <td key={`${day.date}-${hour}`}>
                            <input
                                type="number"
                                min={0}
                                value={day.hourlyAvailability[hourIndex]?.courtAvailable.toString()}
                               
                                onChange={e => props.handleAvailabilityChange(dayIndex, hourIndex, e.target.value)}
                                required
                            />
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </Table>
 
</div>
    )
}