import { useState } from "react";
import moment from "moment";
import { TimeSlot } from "./TimeSlot";

export const WeeklyAvailabilityChart = () => {
  const today = moment().startOf('day');
  const maxDate = moment().add(3, 'months').startOf('week');
  const [startDate, setStartDate] = useState(today.isAfter(maxDate) ? maxDate : today);
  const [selectedDay, setSelectedDay] = useState<number>(-1); // Initialize to -1

  const goToPreviousWeek = () => {
    const previousWeekStartDate = startDate.clone().subtract(1, 'week');
    if (previousWeekStartDate.isSameOrAfter(today)) {
      setStartDate(previousWeekStartDate);
      setSelectedDay(-1); // Reset selected day when changing week
    }
  };

  const goToNextWeek = () => {
    const nextWeekStartDate = startDate.clone().add(1, 'week');
    if (nextWeekStartDate.isBefore(maxDate, 'week')) {
      setStartDate(nextWeekStartDate);
      setSelectedDay(-1); // Reset selected day when changing week
    }
  };

  const handleDayClick = (dayOffset: number) => {
    setSelectedDay(dayOffset);
  };

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-sm-4 d-flex justify-content-start align-items-center">
          <button className="btn btn-primary mb-2" onClick={goToPreviousWeek}>
            Previous Week
          </button>
        </div>
        <div className="col-sm-4 d-flex justify-content-center align-items-center">
          <h6 className="mb-2">Week of {startDate.format('MMMM DD, YYYY')}</h6>
        </div>
        <div className="col-sm-4 d-flex justify-content-end align-items-center">
          <button className="btn btn-primary mb-2" onClick={goToNextWeek}>
            Next Week
          </button>
        </div>
      </div>

      <div>
       
        <ul className="nav nav-pills mb-3 flex-column flex-sm-row nav-fill" id="myTab0" role="tablist">
            {[0, 1, 2, 3, 4, 5, 6].map((dayOffset: number) => {
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
                    {day.format('DD/MM/YYYY')}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
       
        <div className="tab-content justify-content-center" id="myTabContent0">
            {[0, 1, 2, 3, 4, 5, 6].map((dayOffset: number) => {
              const day = startDate.clone().add(dayOffset, 'days');
              return (
                <div
                  key={dayOffset}
                  className={`tab-pane fade ${selectedDay === dayOffset ? 'show active' : ''}`}
                  id={`tab${dayOffset}`}
                  role="tabpanel"
                >
                  <TimeSlot day={day} />
                </div>
              );
            })}
          </div>
        </div>
     



  );
};

