export const TimeButton:React.FC<{time:string,courtAvailable:number}>=(props)=>{
    const date = new Date(props.time);
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (<div className="btn-group" role="group" aria-label="Button group with nested dropdown">
    <button type="button" className="btn btn-outline-primary">{time}</button>
    {/* Add a spacer */}
    <div className="spacer"></div>
    <div className="btn-group dropend" role="group">
      <button type="button" className="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        {props.courtAvailable} courts available
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">1</a></li>
        <li><a className="dropdown-item" href="#">2</a></li>
        <li><a className="dropdown-item" href="#">3</a></li>
        <li><a className="dropdown-item" href="#">4</a></li>
        <li><a className="dropdown-item" href="#">5</a></li>
        <li><a className="dropdown-item" href="#">6</a></li>
        <li><a className="dropdown-item" href="#">7</a></li>
        <li><a className="dropdown-item" href="#">8</a></li>
        <li><a className="dropdown-item" href="#">9</a></li>
        <li><a className="dropdown-item" href="#">10</a></li>
      </ul>
    </div>
</div>)
}