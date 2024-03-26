import { useEffect, useState } from "react";
import { useAsyncError } from "react-router-dom";
import "./Search.css";


export const SearchBar:React.FC<{handleVenueChange:Function,handleDateChange:Function}>= (props) => {

    const [httpError, setHttpError] = useState(null);
    const [venueList, setVenueList] = useState<string[]>([]);
    const [filteredVenues, setFilteredVenues] = useState<string[]>([]);
    const [selectedVenue, setSelectedVenue] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [displayWarning, setDisplayWarning] = useState(false);

    useEffect(() => {
        const fetchVenueList = async () => {
            const url: string = "http://localhost:8080/api/venues/list";
            const response = await fetch(url);
            const responseJson = await response.json();
            setVenueList(responseJson);

        }

        fetchVenueList().catch((error: any) => {
            setHttpError(error.message);
        })
    }, []);

    const handleVenueChange = (event: { target: { value: any; }; }) => {
        const inputValue = event.target.value;
        const filtered = venueList.filter(venue =>
            venue.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredVenues(filtered);
        setSelectedVenue(event.target.value);
    };

    const searchHandleChange = () => {
        if (selectedVenue) {
            
            props.handleVenueChange(selectedVenue);
            props.handleDateChange(selectedDate)
            setDisplayWarning(false);
        }
        else {
            setDisplayWarning(true);
        }

    }
    return (<div>

        <header className="py-3 mb-4 border-bottom">
            <div className="container d-flex flex-wrap justify-content-center">
            
                <div className="d-flex align-items-center justify-content-between mb-3">
                
                    <div className="form-container border p-3 rounded-5">
                   
                        <form >
                           
                            {/* <div className="row g-3 align-items-center">
                                <div className="col-auto">
                                    <label className="visually-hidden" htmlFor="city">Where..</label>
                                    <input type="search" className="form-control border-0" id="city" placeholder="Where.." aria-label="city" />
                                </div>
                                <div className="col-auto">
                                    <label className="visually-hidden" htmlFor="sports">Which sports..</label>
                                    <input type="search" className="form-control border-0" id="sports" placeholder="Which sports.." aria-label="sports" />
                                </div>
                                <div className="col-auto">
                                    <label className="visually-hidden" htmlFor="date">Date</label>
                                    <input
                                        type="text"
                                        className="form-control border-0"
                                        id="date"
                                        placeholder="Date"
                                        aria-label="date"
                                        onBlur={(e) => (e.target.type = 'text')}
                                        onFocus={(e) => (e.target.type = 'date')}
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <span><i>or</i></span>
                            </div> */}
                            <div>
                                <div className="row g-3 align-items-center">

                                    <div className="col-auto">
                                        <label className="visually-hidden" htmlFor="venue">Venue name</label>
                                        <input type="search"
                                            className={`form-control border-0 ${displayWarning ? 'is-invalid  shake' : ''}`}
                                            id="venue" required
                                            style={{ textAlign: "center" }} placeholder="Venue name..." aria-label="venue"
                                            list="suggestion" onChange={handleVenueChange} />

                                        <datalist id="suggestion"> {filteredVenues.map((venue, index) => {

                                            return (<option key={index} value={venue}>{venue}</option>)
                                        })}</datalist>
                                    </div>

                                    <div className="col-auto">
                                        <label className="visually-hidden" htmlFor="date">Date</label>
                                        <input
                                            type="text"
                                            className="form-control border-0"
                                            id="date"
                                            placeholder="Date..."
                                            aria-label="date"
                                            onBlur={(e) => (e.target.type = 'text')}
                                            onFocus={(e) => (e.target.type = 'date')}
                                            onChange={(e) => setSelectedDate(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <button type="button" className="btn btn-primary rounded-circle col-auto"
                        style={{ width: '50px', height: '50px' }}
                        onClick={searchHandleChange} >
                        <i className="bi bi-search"></i>
                    </button>

                </div>

            </div>
        </header>
    </div>)
}