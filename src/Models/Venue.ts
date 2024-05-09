import Availabilty from "./Availabilty";

class Venue {
    venueId:string;
    businessName:string;
    address:string;
    city:string;
    availabilityData:Availabilty[];
    constructor( venueId:string, businessName:string,address:string,city:string,availabilityData:Availabilty[]){
        this.venueId=venueId;
        this.businessName = businessName;
        this.address = address;
        this.city = city;
        this.availabilityData = availabilityData;
    }   
}

export default Venue;

