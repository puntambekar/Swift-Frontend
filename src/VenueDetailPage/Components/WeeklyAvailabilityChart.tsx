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



  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-dark mb-2" onClick={goToPreviousWeek}>
              Previous Week
            </button>
            <h6 className="mb-2">Week of {startDate.format('MMMM DD, YYYY')}</h6>
            <button className="btn btn-dark mb-2" onClick={goToNextWeek}>
              Next Week
            </button>
          </div>
          <div className="row">
            <div className="col">
              {[0, 1, 2, 3, 4, 5, 6].map((dayOffset: number) => {
                const day = startDate.clone().add(dayOffset, 'days');
                return (
                  <div key={dayOffset} className="mb-3">
                    <div className="accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id={`headingDay${dayOffset}`}>
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseDay${dayOffset}`} aria-expanded={selectedDay === dayOffset} aria-controls={`collapseDay${dayOffset}`}>
                            <div className="text-center">
                              {day.format('dddd')}
                              <br />
                              {day.format('DD/MM/YYYY')}
                            </div>
                          </button>
                        </h2>
                        <div id={`collapseDay${dayOffset}`} className="accordion-collapse collapse"aria-labelledby={`headingDay${dayOffset}`} data-bs-parent={`#headingDay${dayOffset}`}>
                          <div className="accordion-body">
                          <TimeSlot/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
