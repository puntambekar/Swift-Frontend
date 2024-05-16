import {Redirect} from "react-router-dom";
import {useOktaAuth} from "@okta/okta-react";

import OktaSignInWidget from "./OktaSignInWidget";
import { Spinner } from "../Commons/Spinner";

const LoginWidget = ({config}) =>{

    const {oktaAuth,authState} = useOktaAuth();

    const onSuccess =(tokens)=>{
            oktaAuth.handleLoginRedirect(tokens);
    };

    const onError = (err) =>{
        console.log('Sign in error: ',err)
    }

    if(!authState){
        return(
        <Spinner/>
        );
    }

    return authState.isAuthenticated ? 
    <Redirect to = {{pathname: "/"}}></Redirect>
    :
    <OktaSignInWidget config={config} onError={onError} onSuccess={onSuccess}/>
}

export default LoginWidget;