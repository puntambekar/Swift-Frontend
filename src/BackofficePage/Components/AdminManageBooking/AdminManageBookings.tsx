import { useEffect, useState } from "react";
import Booking from "../../../Models/Booking";
import { Spinner } from "../../../Utils/Spinner";
import { Errorpage } from "../../../Utils/Errorpage";
import { BookingCard } from "./Components/BookingCard";

export const AdminManageBookings = () => {

    const [httpError, setHttpError] = useState(null);
    const [IsLoading, setIsLoading] = useState(true);
    const [bookings, setBookings] = useState<Booking[]>();
    const [searchTerm, setSearchTerm] = useState('');

    const fetchBookings = async () => {
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

        const loadedBookings: Booking[] = [];

        for (const key in responseJson) {
            loadedBookings.push({
                id: responseJson[key].id,
                venue: responseJson[key].venue,
                date: responseJson[key].date,
                timeSlots: responseJson[key].timeSlots,
                user: responseJson[key].user,
                status:responseJson[key].status
            });
        }
        setBookings(loadedBookings);
        setIsLoading(false);

    };
    console.log("bookings", bookings);

    useEffect(() => {

        fetchBookings().catch((error: any) => {
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