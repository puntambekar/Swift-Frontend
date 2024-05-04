class Availabilty {
    year: string;
    month: string;

    dailyAvailability: {
        date: string|Date;
        hourlyAvailability: {
            time: string;
            courtAvailable: number;
        }[];
    }[];

    constructor( year: string, month: string, days: {
        date: string|Date;
        hourlyAvailability: {
            time: string;
            courtAvailable: number;
        }[];
    }[]) {
       // this.venueId = venueId;
        this.year = year;
        this.month = month;
        this.dailyAvailability = days;
    }
}




export default Availabilty;