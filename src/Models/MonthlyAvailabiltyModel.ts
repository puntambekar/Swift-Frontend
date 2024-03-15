class MonthlyAvailabiltyChart {
    venueId: number;
    year: string;
    month: string;

    days: {
        date: string|Date;
        hourlyAvailability: {
            time: string;
            availability: number;
        }[];
    }[];

    constructor(venueId: number, year: string, month: string, days: {
        date: string|Date;
        hourlyAvailability: {
            time: string;
            availability: number;
        }[];
    }[]) {
        this.venueId = venueId;
        this.year = year;
        this.month = month;
        this.days = days;
    }
}




export default MonthlyAvailabiltyChart;