class Booking {
    venue: {
        businessName: string;
        address: string;
        city: string;
    };
    selectedDate: string;
    selectedTimeSlots: string[]|undefined; 
    userData: {
        name: string;
        email: string;
        phoneNumber: string;
    };

    constructor(
        venue: { businessName: string; address: string; city: string },
        selectedDate: string,
        selectedTimeSlots: string[]|undefined,
        userData: { name: string; email: string; phoneNumber: string }
    ) {
        this.venue = venue;
        this.selectedDate = selectedDate;
        this.selectedTimeSlots = selectedTimeSlots;
        this.userData = userData;
    }
}

export default Booking;