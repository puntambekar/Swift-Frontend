import { ContactUsPage } from "../ContactUsPage/ContactUsPage";
import { Corousel } from "./Components/Corousel";
import { Features } from "./Components/Features";

export const HomePage =()=>{
  return (

    <div className=" mt-5" >
        <Corousel />

    <hr className="featurette-divider" />
        <Features />
        <hr className="featurette-divider" />
        <ContactUsPage/>
    </div>
);

    
}