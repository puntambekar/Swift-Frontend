import Booking from "../Models/Booking";
import BookingEvent from "../Models/BookingEvent";

export async function fetchBookingsData(isAdmin: boolean,accessToken:string|undefined): Promise<Booking[]> {
    let url: string;
    let requestOptions;
    if (isAdmin) {
        console.log("admin here")
        url = `${process.env.REACT_APP_API}/booking/list`;
         requestOptions = {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        }
    } else {
        console.log("user here")
        url = `${process.env.REACT_APP_API}/booking/listByEmail`;
        requestOptions = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            }
            
        }
    }


    try {
        const response = await fetch(url, requestOptions);
        const responseJson = await response.json();

        const loadedBookings: Booking[] = [];

        for (const key in responseJson) {
            loadedBookings.push({
                id: responseJson[key].id,
                venue: responseJson[key].venue,
                date: responseJson[key].date,
                timeSlots: responseJson[key].timeSlots,
                user: responseJson[key].user,
                status: responseJson[key].status
            });
        }
        return loadedBookings;
    } catch (error) {
        console.error('Error fetching booking data:', error);
        throw error;
    }

};

export async function fetchBookingSlotsData(): Promise<BookingEvent[]> {
    const url: string = `${process.env.REACT_APP_API}/booking/slots`;
    const requestOptions = {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    }
    try {
        const response = await fetch(url, requestOptions);
        const responseJson = await response.json();
        console.log(response);
        console.log(responseJson);

        const loadedBookingsEvents: BookingEvent[] = [];

        for (const key in responseJson) {
            loadedBookingsEvents.push({
                id: responseJson[key].id,
                title: responseJson[key].title,
                start: responseJson[key].start,
                end: responseJson[key].end,


            });
        }
        return loadedBookingsEvents;
    } catch (error) {
        console.error('Error fetching booking data:', error);
        throw error;
    }

};