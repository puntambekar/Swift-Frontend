import { AddressMap } from "./Components/AddressMap";
import { ContactDetails } from "./Components/ContactDetails";
import { ContactForm } from "./Components/ContactForm";

export const ContactUsPage = ()=>{
    return(<div className="container">
    
    <div className="row mb-4">
        <div className="col-lg-12">
            <ContactForm/>
        </div>
    </div>
   
    <div className="row">
       
        <div className="col-lg-6">
            <ContactDetails/>
        </div>
       
        <div className="col-lg-6">
            <AddressMap/>
        </div>
    </div>
</div>

);

}