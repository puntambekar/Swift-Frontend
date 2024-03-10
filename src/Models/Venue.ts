class Venue {
    venueId:number;
    businessName:string;
    address:string;
    city:string;
    availability:{
        Mon: number[];
        Tue: number[];
        Wed: number[];
        Thu: number[];
        Fri: number[];
        Sat: number[];
        Sun: number[];
    }

    constructor( venueId:number, businessName:string,address:string,city:string,availability:{
            Mon: number[];
            Tue: number[];
            Wed: number[];
            Thu: number[];
            Fri: number[];
            Sat: number[];
            Sun: number[];
        }
    ){
        this.venueId=venueId;
        this.businessName = businessName;
        this.address = address;
        this.city = city;
        this.availability = availability;
    }

}

export default Venue;

