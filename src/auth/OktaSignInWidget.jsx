
import { oktaConfig } from "../lib/oktaConfig";
import { useEffect,useRef } from "react";
import OktaSignIn, { OktaSignInAPI } from "@okta/okta-signin-widget";
import './../../node_modules/@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';


const OktaSignInWidget = ({onSuccess, onError}) =>{
    const widgetRef = useRef();

    useEffect(()=>{

        if(!widgetRef.current){
            return false;
        }
      
        const widget = new OktaSignIn(oktaConfig);
        widget.showSignInToGetTokens({
            el:widgetRef.current,
        }).then(onSuccess).catch(onError);

        return()=>widget.remove();

    },[onSuccess,onError]);

    return(
        <div className="container mt-5 mb-5">
            <div ref={widgetRef}>

            </div>
        </div>
    )
}

export default OktaSignInWidget