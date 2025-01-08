// src/components/ShowTicketList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Container, Grid, CircularProgress, Box } from '@mui/material';

import TicketCard from './TicketCard';

function ShowTicketList() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios
      .get(`https://train-ticket-reservation.onrender.com/api/reservations`)
      .then((res) => {
        setTickets(res.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.log('Error from ShowTicketList ->', err);
        setLoading(false); // Set loading to false even on error
      });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" color="primary" gutterBottom>
        Train Tickets
      </Typography>

      <Button
        component={Link}
        to="/create-ticket"
        color="primary"
        variant="contained"
        sx={{ mb: 4 }}
      >
        Book New Ticket
      </Button>

      {loading ? (
        // Show a loading spinner while data is being fetched
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {tickets.length === 0 ? (
            <Grid item xs={12}>
              <Typography variant="h6" color="text.secondary">
                No tickets found!
              </Typography>
            </Grid>
          ) : (
            tickets.map((ticket, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <TicketCard ticket={ticket} />
              </Grid>
            ))
          )}
        </Grid>
      )}
    </Container>
  );
}

export default ShowTicketList;
