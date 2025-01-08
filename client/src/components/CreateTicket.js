// 

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const CreateTicket = () => {
  const navigate = useNavigate();

  const [ticket, setTicket] = useState({
    passenger_name: '',
    passenger_email: '',
    train_number: '',
    train_name: '',
    departure_station: '',
    arrival_station: '',
    departure_time: '',
    arrival_time: '',
    seat_number: '',
    class: '',
    fare: '',
  });

  const onChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/api/tickets', ticket)
      .then((res) => {
        setTicket({
          passenger_name: '',
          passenger_email: '',
          train_number: '',
          train_name: '',
          departure_station: '',
          arrival_station: '',
          departure_time: '',
          arrival_time: '',
          seat_number: '',
          class: '',
          fare: '',
        });

        toast.success('Ticket created successfully!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          transition: Slide,
        });

        setTimeout(() => {
          navigate('/'); // Navigate to the homepage after the success message
        }, 5000);
      })
      .catch((err) => {
        console.error('Error creating ticket:', err);

        toast.error('Error creating ticket. Please try again.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          transition: Slide,
        });
      });
  };

  return (
    <div className='CreateTicket'>
      <ToastContainer />

      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Train Ticket</h1>
            <p className='lead text-center'>Create a new ticket</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Passenger Name'
                  name='passenger_name'
                  className='form-control'
                  value={ticket.passenger_name}
                  onChange={onChange}
                  required
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='email'
                  placeholder='Passenger Email'
                  name='passenger_email'
                  className='form-control'
                  value={ticket.passenger_email}
                  onChange={onChange}
                  required
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Train Number'
                  name='train_number'
                  className='form-control'
                  value={ticket.train_number}
                  onChange={onChange}
                  required
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Train Name'
                  name='train_name'
                  className='form-control'
                  value={ticket.train_name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Departure Station'
                  name='departure_station'
                  className='form-control'
                  value={ticket.departure_station}
                  onChange={onChange}
                  required
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Arrival Station'
                  name='arrival_station'
                  className='form-control'
                  value={ticket.arrival_station}
                  onChange={onChange}
                  required
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='datetime-local'
                  placeholder='Departure Time'
                  name='departure_time'
                  className='form-control'
                  value={ticket.departure_time}
                  onChange={onChange}
                  required
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='datetime-local'
                  placeholder='Arrival Time'
                  name='arrival_time'
                  className='form-control'
                  value={ticket.arrival_time}
                  onChange={onChange}
                  required
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Seat Number (Optional)'
                  name='seat_number'
                  className='form-control'
                  value={ticket.seat_number}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <select
                  name='class'
                  className='form-control'
                  value={ticket.class}
                  onChange={onChange}
                  required
                >
                  <option value=''>Select Class</option>
                  <option value='First Class'>First Class</option>
                  <option value='Second Class'>Second Class</option>
                  <option value='Sleeper'>Sleeper</option>
                  <option value='General'>General</option>
                </select>
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Fare'
                  name='fare'
                  className='form-control'
                  value={ticket.fare}
                  onChange={onChange}
                  required
                />
              </div>
              <br />

              <button
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              >
                Create Ticket
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
