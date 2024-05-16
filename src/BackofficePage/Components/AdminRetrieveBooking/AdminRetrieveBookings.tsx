import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Errorpage } from '../../../Commons/Errorpage';
import Booking from '../../../Models/Booking';
import BookingEvent from '../../../Models/BookingEvent';
import { fetchBookingSlotsData } from '../../../Services/bookingService';

export const AdminRetrieveBookings = () => {

  const localizer = momentLocalizer(moment);
  const [httpError, setHttpError] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);
  const [bookingEvents, setBookingEvents] = useState<BookingEvent[]>();


  console.log("bookingsEvents", bookingEvents);

  useEffect(() => {
    const fetchBookingSlots = async () => {
      try {
        const loadedBookingsEvents = await fetchBookingSlotsData();
        setBookingEvents(loadedBookingsEvents);
        setIsLoading(false);

      } catch (error: any) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    };

    fetchBookingSlots();
  }, []);

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

  return (<div>

    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={bookingEvents}
        startAccessor={(event) => { return new Date(event.start) }}
        endAccessor={(event) => { return new Date(event.end) }}

        style={{
          margin: '50px', display: 'block',
          marginTop: '10px'
        }}
      />
    </div>
  </div>)
}