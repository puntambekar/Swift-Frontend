import { useEffect, useState } from "react";
import Booking from "../../../Models/Booking";
import { Spinner } from "../../../Utils/Spinner";
import { Errorpage } from "../../../Utils/Errorpage";
import { BookingCard } from "./Components/BookingCard";
import { fetchBookingsData } from "../../../Services/bookingService";

export const AdminManageBookings = () => {

    const [httpError, setHttpError] = useState(null);
    const [IsLoading, setIsLoading] = useState(true);
    const [bookings, setBookings] = useState<Booking[]>();
    const [searchTerm, setSearchTerm] = useState('');
    const [bookingStatusChanged, setBookingStatusChanged] = useState(false);

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const loadedBookings = await fetchBookingsData();
                setBookings(loadedBookings);
                setIsLoading(false);
            } catch (error:any) {
                setIsLoading(false);
            setHttpError(error.message);
            }
        };
        fetchBooking();
        console.log("in useeffect");
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

    const handleSearchEmail = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchTerm(event.target.value);
    }
    const filteredBookings = bookings?.filter(booking =>
       ( booking.id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.user.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    const sortedFilteredBookings = bookings?.filter(booking =>
        ( booking.id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
         booking.user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
         booking.status ==="active"
     ).sort((a,b)=> new Date(a.date).getTime()-new Date(b.date).getTime());

    return (
        <div className="container">
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <div className="input-group rounded">
                        <input
                            type="search"
                            className="form-control rounded"
                            placeholder="Search by email or booking ID"
                            aria-label="Search"
                            aria-describedby="search"
                            value={searchTerm}
                            onChange={handleSearchEmail}
                            style={{ fontStyle: 'italic' }}
                        />
                        <button className="btn btn-primary">
                        <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {filteredBookings?.map(booking => <BookingCard key={booking.id} booking={booking} />)}
            </div>
        </div>
    )
}