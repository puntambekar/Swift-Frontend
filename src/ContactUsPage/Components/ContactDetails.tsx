export const ContactDetails = () => {
    return (<div>
        <h2>Business Name</h2>
        <p><span><i className="bi bi-geo-alt-fill"></i></span><span className="ms-2">Address</span></p>
        <p><span> <i className="bi bi-telephone-fill"></i></span><span className="ms-2">Phone</span></p>
        <p><span> <i className="bi bi-envelope-fill"></i></span><span className="ms-2">Email</span></p>



        <div >
            <h5>Hours of Operation</h5>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Day</th>
                        <th>Open</th>
                        <th>Close</th>
                    </tr>
                    <tr>
                        <td>Monday-Fri</td>
                        <td>9:00 AM</td>
                        <td>5:00 PM</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>10:00 AM</td>
                        <td>3:00 PM</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>Closed</td>
                        <td>Closed</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>);

}