class Booking {
    id?:string;
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
    status:string;//can be (active,cancelledByUser,cancelledByAdmin,completed)

    constructor(
        venue: { id:string;businessName: string; address: string; city: string },
        date: string,
        timeSlots:{time:string;courtBooked:number}[]|undefined,
        user: { name: string; email: string; phone: string },
        status:string
    ) {
        this.venue = venue;
        this.date = date;
        this.timeSlots = timeSlots;
        this.user = user;
        this.status=status;
    }
}

export default Booking;