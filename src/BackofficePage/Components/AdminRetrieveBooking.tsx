import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Errorpage } from '../../Utils/Errorpage';
import Booking from '../../Models/Booking';
import BookingEvent from '../../Models/BookingEvent';

export const AdminRetrieveBooking=()=>{

    const localizer = momentLocalizer(moment);
    const [httpError, setHttpError] = useState(null);
    const [IsLoading, setIsLoading] = useState(true);
    const [bookingEvents, setBookingEvents] = useState<BookingEvent[]>();
    
    const fetchVenue = async () => {
      const url: string = `http://localhost:8080/api/booking/list`;
      const requestOptions = {
          method: "GET",
          headers: {
              "content-type": "application/json"
          }
      }
      const response = await fetch(url, requestOptions);
      const responseJson = await response.json();
      console.log(response);
      console.log(responseJson);

      const loadedBookings: BookingEvent[] = [];

      for(const key in responseJson){
        loadedBookings.push({
          id: responseJson[key].id,
          title:responseJson[key].title,
          start: responseJson[key].start,
          end: responseJson[key].end,
         
         
        });
      }
      setBookingEvents(loadedBookings);
      setIsLoading(false);

  };
  console.log("bookingsEvents",bookingEvents);

  useEffect(() => {

      fetchVenue().catch((error: any) => {
          setIsLoading(false);
          setHttpError(error.message);
      })
  }, [])

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

    return(<div>
      
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={bookingEvents}
          startAccessor={(event) => { return new Date(event.start) }}
          endAccessor={(event) => { return new Date(event.end) }}
     
          style={{ margin: '50px' , display: 'block',
          marginTop: '10px'}}
        />
      </div>
    </div>)
}