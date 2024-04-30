import { useOktaAuth } from "@okta/okta-react";
import { Redirect } from "react-router-dom";
import { AdminRetrieveBooking } from "./Components/AdminRetrieveBooking";

export const Backoffice = ()=>{

    const { authState } = useOktaAuth();
    const action:string = window.location.pathname.split("/")[2];
    
    if(authState?.accessToken?.claims.userType === undefined){
        return  <Redirect to="/home"/>
      }
  
    return(<div>
        {
            action==="bookings"?<AdminRetrieveBooking/>:<></>
        }
    </div>)
}