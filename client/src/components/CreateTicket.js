import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const CreateTicket = () => {
  const navigate = useNavigate();
  const [ticket, setTicket] = useState({
    passenger_name: '',
    age: '',
    train_number: '',
    departure_station: '',
    arrival_station: '',
    journey_date: '',
    seat_class: '',
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
          age: '',
          train_number: '',
          departure_station: '',
          arrival_station: '',
          journey_date: '',
          seat_class: '',
        });

        toast.success('Ticket reserved successfully!', {
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
          navigate('/');
        }, 5000);
      })
      .catch((err) => {
        console.error('Error in CreateTicket!', err);
        toast.error('Something went wrong, try again!', {
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
    <div className="CreateTicket">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />

      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Ticket List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Reserve Train Ticket</h1>
            <p className="lead text-center">Create new train ticket reservation</p>

            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Passenger Name"
                  name="passenger_name"
                  className="form-control"
                  value={ticket.passenger_name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  type="number"
                  placeholder="Age"
                  name="age"
                  className="form-control"
                  value={ticket.age}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Train Number"
                  name="train_number"
                  className="form-control"
                  value={ticket.train_number}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Departure Station"
                  name="departure_station"
                  className="form-control"
                  value={ticket.departure_station}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Arrival Station"
                  name="arrival_station"
                  className="form-control"
                  value={ticket.arrival_station}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  type="date"
                  placeholder="Journey Date"
                  name="journey_date"
                  className="form-control"
                  value={ticket.journey_date}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <select
                  name="seat_class"
                  className="form-control"
                  value={ticket.seat_class}
                  onChange={onChange}
                >
                  <option value="">Select Seat Class</option>
                  <option value="Economy">Economy</option>
                  <option value="Business">Business</option>
                  <option value="First Class">First Class</option>
                </select>
              </div>
              <br />

              <input
                type="submit"
                className="btn btn-outline-warning btn-block mt-4"
                value="Reserve Ticket"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
