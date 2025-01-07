import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateTicketInfo() {
  const [ticket, setTicket] = useState({
    passengerName: '',
    trainNumber: '',
    seatNumber: '',
    departureTime: '',
    arrivalTime: '',
    destination: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/tickets/${id}`)
      .then((res) => {
        setTicket({
          passengerName: res.data.passengerName,
          trainNumber: res.data.trainNumber,
          seatNumber: res.data.seatNumber,
          departureTime: res.data.departureTime,
          arrivalTime: res.data.arrivalTime,
          destination: res.data.destination,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateTicketInfo GET request');
        console.log(err);
      });
  }, [id]);

  const onChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      passengerName: ticket.passengerName,
      trainNumber: ticket.trainNumber,
      seatNumber: ticket.seatNumber,
      departureTime: ticket.departureTime,
      arrivalTime: ticket.arrivalTime,
      destination: ticket.destination,
    };

    axios
      .put(`/api/tickets/${id}`, data)
      .then((res) => {
        navigate(`/show-ticket/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateTicketInfo PUT request');
        console.log(err);
      });
  };

  return (
    <div className='UpdateTicketInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Ticket List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Ticket</h1>
            <p className='lead text-center'>Update Ticket Information</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='passengerName'>Passenger Name</label>
              <input
                type='text'
                placeholder='Passenger Name'
                name='passengerName'
                className='form-control'
                value={ticket.passengerName}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='trainNumber'>Train Number</label>
              <input
                type='text'
                placeholder='Train Number'
                name='trainNumber'
                className='form-control'
                value={ticket.trainNumber}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='seatNumber'>Seat Number</label>
              <input
                type='text'
                placeholder='Seat Number'
                name='seatNumber'
                className='form-control'
                value={ticket.seatNumber}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='departureTime'>Departure Time</label>
              <input
                type='text'
                placeholder='Departure Time'
                name='departureTime'
                className='form-control'
                value={ticket.departureTime}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='arrivalTime'>Arrival Time</label>
              <input
                type='text'
                placeholder='Arrival Time'
                name='arrivalTime'
                className='form-control'
                value={ticket.arrivalTime}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='destination'>Destination</label>
              <input
                type='text'
                placeholder='Destination'
                name='destination'
                className='form-control'
                value={ticket.destination}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Ticket
            </button>
            <br /> <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateTicketInfo;
