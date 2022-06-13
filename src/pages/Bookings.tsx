import { NavLink, useParams } from 'react-router-dom';
import Calendar from 'react-calendar'
import React, { SetStateAction, useState } from "react"

import '../styles/bookings.css'
import { useNavigate } from "react-router-dom";

type Props = {
  time: string
}[];

const Bookings = () => {
  let navigate = useNavigate()
  const params = useParams();
  const [date, setDate] = useState(new Date())
  const [timeSelected, setTimeSelected] = useState('12pm')
  const [timeSlot, setTimeSlot] = useState<Props>([{
    time: "12pm"
  },
  {
    time: "2pm"
  },
  {
    time: "4pm"
  },
  {
    time: "6pm"
  },
  {
    time: "8pm"
  },
  {
    time: "10pm"
  },
  ])
 
  const changedDate = (d: SetStateAction<Date>) => {
    setDate(d)
  }

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeSelected(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("../thankyou", { replace: true });
  }
  return (
    <div className='container-info'>
      <h1>Reserve a seat today!</h1>
      <div className='row-info'>
        

        <div className='col-info'>

          <h2>Select date</h2>
          <Calendar
            onChange={changedDate}
            value={date}
          />
          <p>Current selected date is <b>{date.toDateString()}</b></p>

          <div className='select-input'>
            <h2>Select time slot</h2>
            <label>Available Time slot</label> &nbsp; &nbsp;
            <select value={timeSelected} onChange={handleTimeChange}>
              {timeSlot.map(t =>
                <option className="dropdown-item" value={t.time}>{t.time}</option>
              )}
            </select>
            <p>You have selected {timeSelected}</p>
          </div>
        </div>
        <div className='col-info'>
          <form id="form-info" onSubmit={handleSubmit}>
            <fieldset style={{ padding: "20px" }}>
              <legend>Your Info</legend>
              <div className="form-group">
                <label>Name</label><br/>
                <input type="text" className="form-control" id="name-info" placeholder="Enter name" />
              </div>
              <div className="form-group">
                <label>Email address</label><br/>
                <input type="email" className="form-control" id="email-info" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label>Phone number</label><br/>
                <input type="tel" className="form-control" id="phoneno-info" placeholder="Phone number" />
              </div>
              <br />
              <button type="submit" className="btn-info">Book now!</button>
            </fieldset>
          </form>
        </div>
      </div>
      <br /> <br /> <br /> <br />
    </div>
  );
};

export default Bookings;
