class Booking {
    venue: {
        id:string
        businessName: string;
        address: string;
        city: string;
    };
    date: string;
    timeSlots: {
        time:string;
        courtBooked:number;
    }[]|undefined; 
    user: {
        name: string;
        email: string;
        phone: string;
    };

    constructor(
        venue: { id:string;businessName: string; address: string; city: string },
        date: string,
        timeSlots:{time:string;courtBooked:number}[]|undefined,
        user: { name: string; email: string; phone: string }
    ) {
        this.venue = venue;
        this.date = date;
        this.timeSlots = timeSlots;
        this.user = user;
    }
}

export default Booking;