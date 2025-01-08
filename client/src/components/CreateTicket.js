// 

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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
        seat_number: '',
        class: ''
    });

    const onChange = (e) => {
        setTicket({ ...ticket, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(ticket);
        axios
            .post('https://your-api-endpoint.com/api/tickets', ticket)
            .then((res) => {
                console.log(res);
                setTicket({
                    passenger_name: '',
                    passenger_email: '',
                    train_number: '',
                    train_name: '',
                    departure_station: '',
                    arrival_station: '',
                    seat_number: '',
                    class: ''
                });
                setTimeout(() => {
                    navigate('/');
                }, 5000); // Adjust timeout if needed
            })
            .catch((err) => {
                console.log('Error in CreateTrainTicket!');
                console.log(err);
            });
    };

    return (
        <div className='CreateTrainTicket'>
            <div className='container d-flex align-items-center justify-content-center'>
                <div className='row w-100'>
                    <div className='col-md-8 m-auto'>
                        <br />
                        <Link to='/' className='btn btn-outline-warning float-left'>
                            Show Ticket List
                        </Link>
                    </div>
                    <div className='col-md-8 m-auto' style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                        <h1 className='display-4 text-center'>Book Train Ticket</h1>
                        <p className='lead text-center'>Create a new train ticket reservation</p>

                        <form noValidate onSubmit={onSubmit}>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Passenger Name'
                                    name='passenger_name'
                                    className='form-control'
                                    value={ticket.passenger_name}
                                    onChange={onChange}
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
                                />
                            </div>
                            <br />
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Train Name (optional)'
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
                                />
                            </div>
                            <br />
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Seat Number (optional)'
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
                                >
                                    <option value=''>Select Class</option>
                                    <option value='First Class'>First Class</option>
                                    <option value='Second Class'>Second Class</option>
                                    <option value='Sleeper'>Sleeper</option>
                                    <option value='General'>General</option>
                                </select>
                            </div>
                            <br />
                            <div className="button-group">
                                <button type="submit" className="btn btn-add">Submit</button>
                                <button type="button" className="btn btn-cancel" onClick={() => navigate('/')}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTicket;
