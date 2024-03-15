class Venue {
    venueId:number;
    businessName:string;
    address:string;
    city:string;
    constructor( venueId:number, businessName:string,address:string,city:string){
        this.venueId=venueId;
        this.businessName = businessName;
        this.address = address;
        this.city = city;
    }
}

export default Venue;

