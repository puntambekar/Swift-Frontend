import Venue from "../../Models/Venue";
import WeeklyAvailabiltyModel from "../../Models/WeeklyAvailabiltyModel";
import { TimeButton } from "./TimeButton";

export const DayAvailability:React.FC<{date:string,venue:Venue|undefined}> = (props)=>{
    const selectedDate = new Date(props.date);
    const hourlyAvailability = props.venue?.availabilityData.dailyAvailability.find(e=>e.date===props.date)?.hourlyAvailability;
    console.log(hourlyAvailability);

    return(<div>
        {hourlyAvailability?.map((e,key)=><TimeButton time={e.time} courtAvailable={e.courtAvailable} key={key}/>)}
     
    </div>);
}