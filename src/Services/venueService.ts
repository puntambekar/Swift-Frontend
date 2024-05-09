import Venue from "../Models/Venue";

export async function fetchVenueData(): Promise<Venue> {

    const url: string = `http://localhost:8080/api/venues/details`;
    const requestOptions = {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    }

    try {
        const response = await fetch(url, requestOptions);
        const responseJson = await response.json();
        const loadedVenue: Venue = {
            venueId: responseJson.id,
            businessName: responseJson.businessName,
            city: responseJson.city,
            address: responseJson.address,
            availabilityData: responseJson.availability
        }
         return loadedVenue;  
    } catch (error) {
        console.error('Error fetching venue data:', error);
        throw error;
    }
}

export async function fetchDailyAvailabilityForADayData(date:string):Promise<any> {
    const url: string = `http://localhost:8080/api/venues/dailyAvail?date=${date}`;
    const requestOptions = {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    }
    try{
        const response = await fetch(url, requestOptions);
        const responseJson = await response.json();
        return responseJson;
    
    }catch (error) {
        console.error('Error fetchDailyAvailabilityForADayData:', error);
        throw error;
    }
    
    

};

