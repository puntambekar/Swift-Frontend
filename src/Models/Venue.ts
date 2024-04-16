import WeeklyAvailabiltyModel from "./WeeklyAvailabiltyModel";

class Venue {
    venueId:string;
    businessName:string;
    address:string;
    city:string;
    availabilityData:WeeklyAvailabiltyModel;
    constructor( venueId:string, businessName:string,address:string,city:string,availabilityData:WeeklyAvailabiltyModel){
        this.venueId=venueId;
        this.businessName = businessName;
        this.address = address;
        this.city = city;
        this.availabilityData = availabilityData;
    }   
}

export default Venue;

