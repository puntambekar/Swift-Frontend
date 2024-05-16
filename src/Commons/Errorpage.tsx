export const Errorpage: React.FC<{}> = (props) => {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center mt-5" >
            <div className="text-center">
                <h3>Well, this is embarrassing...</h3>
                <p>Sorry, this is not working properly. We now know about this mistake and are working to fix it.</p>
                <p>In the meantime, here is what you can do:
                   
                        <li>Refresh the page (sometimes this helps).</li>
                        <li>Try again in 30 minutes.</li>
                        <li>Email us at <a href="mailto:support@email.com">support@email.com</a> and tell us what happened.</li>
                    
                </p>
            </div>
        </div>
    );
}
