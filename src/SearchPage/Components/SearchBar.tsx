export const SearchBar = () => {
    return (<div>
        <header className="py-3 mb-4 border-bottom">
            <div className="container d-flex flex-wrap justify-content-center">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="form-container border p-3 rounded-5">
                        <form >
                            <div className="row g-3 align-items-center">
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
                            </div>
                            <div>
                                <div className="row g-3 align-items-center">

                                    <label className="visually-hidden" htmlFor="venue">Venue name</label>
                                    <input type="search" className="form-control border-0" id="venue" style={{ textAlign: "center" }} placeholder="Venue name..." aria-label="venue" />

                                </div>
                            </div>
                        </form>
                    </div>
                    <button type="button" className="btn btn-dark rounded-circle col-auto" style={{ width: '50px', height: '50px' }} >
                        <i className="bi bi-search"></i>
                    </button>
                </div>
            </div>
        </header>
    </div>)
}