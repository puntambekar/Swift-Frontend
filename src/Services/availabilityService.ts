import Availabilty from "../Models/Availabilty";

export async function fetchMonthlyAvailabilityData(year:string,month:string):Promise<Availabilty> {

    const url: string = `${process.env.REACT_APP_API}/availability/data?year=${year}&&month=${month}`;

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
        console.error('Error fetchMonthlyAvailabilityData:', error);
        throw error;
    }
    
}

export async function saveUpdatedMonthlyAvailabilityData(avail:Availabilty){

    const url:string=`${process.env.REACT_APP_API}/availability/update`;
    const requestOptions = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body:JSON.stringify(avail)
    }

    try{
        const response = await fetch(url, requestOptions);
        return response;
    
    }catch (error) {
        console.error('Error saveUpdatedMonthlyAvailabilityData:', error);
        throw error;
    }
}