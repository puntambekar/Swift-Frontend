import { useState, useEffect, useRef } from "react";
import moment, { Moment } from "moment";
import { TimeSlot } from "./TimeSlot";
import { TimeButton } from "./TimeButton";
import Venue from "../../../Models/Venue";
import { Spinner } from "../../../Commons/Spinner";
import { v4 as uuidv4 } from 'uuid';
import { useWindowSize } from "@react-hook/window-size";

interface AvailabilityChartProps {
  selectedVenue: Venue
}

export const AvailabilityChart: React.FC<AvailabilityChartProps> = (props) => {
  const maxDate = moment().add(3, 'months').startOf('week');
  const [today, setToday] = useState(moment().startOf('day'));
  const [startDate, setStartDate] = useState<Moment>(today.isAfter(maxDate) ? maxDate : today);
  const [selectedDay, setSelectedDay] = useState<number>(-1);
  const [userDate, setUserDate] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State to manage loading
  const [showSlots, setShowSlots] = useState(false);

  const [windowWidth, windowHeight] = useWindowSize();

  const goToPreviousDay = () => {
    const previousDay = startDate.clone().subtract(1, 'day');
    if (previousDay.isSameOrAfter(today)) {
      setStartDate(previousDay);
      setSelectedDay(-1);
    }
  };

  const goToNextDay = () => {
    const nextDay = startDate.clone().add(1, 'day');
    if (nextDay.isBefore(maxDate)) {
      setStartDate(nextDay);
      setSelectedDay(-1);
    }
  };
console.log(props.selectedVenue);

  let itemsToDisplay: number;
  if (windowWidth >= 768) {
    itemsToDisplay = 7; // Display all items on larger screens
  } else if (windowWidth >= 576) {
    itemsToDisplay = 5; // Display up to 5 items on medium screens
  } else {
    itemsToDisplay = 2; // Display up to 3 items on small screens
  }


  const userDateChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const format = "YYYY-MM-DD";
    const date = moment(userDate, format);
    if (date.isValid()) {
      setToday(date.startOf('day'));
      setStartDate(date.startOf('day'))
      setSelectedDay(-1); // Reset selected tab
    }
  };




  const handleDayClick = (dayOffset: number) => {
    setIsLoading(true); // Set loading to true when tab is changed
    setSelectedDay(dayOffset);
    // Simulating data fetching delay
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after data fetching
    }, 1000); // Adjust time as needed based on your data fetching
    setShowSlots(true);
  };


  return (
    <div className="container-fluid mt-3">
      <form onSubmit={userDateChange} className="col-sm-6 d-flex justify-content-center align-items-center">

        <label htmlFor="date"><i>Show availability from: </i></label>
        <input
          type="date"
          className={`form-control border-0 `}
          id="date"
          style={{ maxWidth: "200px" }}
          placeholder="Date..."
          aria-label="date"
          onBlur={(e) => (e.target.type = 'text')}
          onFocus={(e) => (e.target.type = 'date')}
          onChange={(e) => setUserDate(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
          max={(new Date(new Date().getTime() + 90 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0]}
          required
        />
        <button type="submit" className="btn btn-primary rounded-circle ms-2"
          style={{ width: '50px', height: '50px' }}>
          <i className="bi bi-search"></i>
        </button>

      </form>
      <div>
        <ul className="nav nav-pills mb-3  flex-sm-row nav-fill" style={{ marginTop: '40px', flexWrap: 'nowrap', overflowX: 'auto' }} id="myTab0" role="tablist" onScroll={goToPreviousDay}>
          <span className="nav-item" style={{ display: 'flex', alignItems: 'center' }}>
            <i className="bi bi-chevron-left" style={{ fontSize: '1.5em', cursor: 'pointer' }} onClick={goToPreviousDay}></i>
          </span>
          {[0, 1, 2, 3, 4, 5, 6].slice(0, itemsToDisplay).map((dayOffset: number) => {
            const day = startDate.clone().add(dayOffset, 'days');
            return (
              <li key={dayOffset} className="nav-item" role="presentation">
                <button
                  data-mdb-tab-init
                  className={`nav-link ${selectedDay === dayOffset ? 'active' : ''} flex-sm-fill text-sm-center`}
                  id={`tab-${dayOffset}`}
                  data-mdb-target={`#tab${dayOffset}`}
                  onClick={() => handleDayClick(dayOffset)}
                  role="tab"
                >
                  {day.format('dddd')}
                  <br />
                  {day.format('MM/DD/YYYY')}
                </button>
              </li>
            );
          })}
          <span className="nav-item" style={{ display: 'flex', alignItems: 'center' }}>
            <i className="bi bi-chevron-right" style={{ fontSize: '1.5em', cursor: 'pointer' }} onClick={goToNextDay}></i>
          </span>
        </ul>
      </div>

      <hr />
      {showSlots ? <div className="tab-content justify-content-center " id="myTabContent0" style={{ marginTop: '40px' }}>
        {[0, 1, 2, 3, 4, 5, 6].map((dayOffset: number) => {
          const day = startDate.clone().add(dayOffset, 'days');
          const key = uuidv4();
          return (
            <div
              key={dayOffset}
              className={`tab-pane  ${selectedDay === dayOffset ? 'show active' : ''}`}
              id={`tab${dayOffset}`}
              role="tabpanel"
            >
              {isLoading ? <Spinner /> :
                (
                  <TimeSlot day={day} selectedVenue={props.selectedVenue} key={dayOffset} />
                )}
            </div>
          );
        })}
      </div>:
      <div className="d-flex justify-content-center align-items-center" style={{ marginTop: '60px',fontStyle: 'italic' }}>Please select a date.</div>}

    </div>
  );
};
