import { useState } from "react";
import { DayAvailability } from "./DayAvailability";
import Venue from "../../Models/Venue";

export const Booking:React.FC<{selectedVenue:Venue|undefined}> = (props)=>{
    const [displayError,setDisplayError] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const [viewDailyData, setViewDailyData] = useState(false);
    

    function dateSearchHandler(){
        if(selectedDate){
            setViewDailyData(true);
            setDisplayError(false);
        
        } else{setDisplayError(true);}
       

    }

    return(<div>
          <div className="container">
            <form className="row align-items-center">
                <div className="col-auto">
                    Select date:
                </div>
                <div className="col">
                    <div className="input-group">
                        <label className="visually-hidden" htmlFor="date">Date</label>
                        <input
                             type="date"
                            className={`form-control ${displayError ? 'is-invalid  shake' : ''}`}
                            id="date"
                            style={{ maxWidth: "200px" }} // Set maximum width here
                            placeholder="Date..."
                            aria-label="date"
                            onBlur={(e) => (e.target.type = 'text')}
                            onFocus={(e) => (e.target.type = 'date')}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            max={(new Date(new Date().getTime() + 90 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0]}
                            required
                        />
                        <button type="button" className="btn btn-primary rounded-circle ms-2"
                            style={{ width: '50px', height: '50px' }} onClick={dateSearchHandler}>
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
        {viewDailyData&&<div>
           <DayAvailability date={selectedDate} venue={props.selectedVenue}/>
        </div>}
        {/* <div className="col-auto">
                    <button type="button" className="btn btn-outline-primary" onClick={toggleWeeklyData}>Check weekly availability</button>
                </div>
        {viewWeeklyData &&
            <WeeklyAvailabilityChart />} */}
    </div>);
}