import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"
import MonthlyAvailabiltyModel from "../../Models/MonthlyAvailabiltyModel"
import moment from "moment"

export const TimeSlot = () => {

  return (<div className="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" className="btn btn-primary">8AM : 10 available</button>


   <div className="btn-group dropend" role="group">
    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Select courts
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
