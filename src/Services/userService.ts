import { useOktaAuth } from "@okta/okta-react";
import User from "../Models/User";

export async function fetchUserData(accessToken:string|undefined): Promise<User> {

    const url: string = `http://localhost:8080/api/user/details`;
    const requestOptions = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
        
    };

    try {
        const response = await fetch(url, requestOptions);
        const responseJson = await response.json();
     //   console.log("fetchedUSer",responseJson);
        const loadedUser: User = {
            firstName: responseJson.firstName,
            lastName: responseJson.lastName,
            email: responseJson.email,
        }
         return loadedUser;  
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}
