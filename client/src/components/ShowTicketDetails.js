import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button,
  Card,
  Divider,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const ShowTicketDetails = () => {
  const [ticket, setTicket] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/tickets/${id}`)
      .then((res) => {
        setTicket(res.data);
      })
      .catch((err) => {
        console.log('Error fetching ticket details');
      });
  }, [id]);

  const onDeleteClick = () => {
    setOpenDialog(true);
  };

  const handleDeleteConfirm = () => {
    axios
      .delete(`/api/tickets/${id}`)
      .then((res) => {
        navigate('/ticket-list');
      })
      .catch((err) => {
        console.log('Error deleting the ticket');
      });
    setOpenDialog(false);
  };

  const handleDeleteCancel = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <img
                src="https://images.unsplash.com/photo-1518546305921-cbe719a702cd"
                alt="Train"
                style={{ width: '100%', height: 'auto' }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              Ticket Details
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box display="flex" flexDirection="column">
              <Typography variant="body1"><strong>Passenger Name:</strong> {ticket.passengerName}</Typography>
              <Typography variant="body1"><strong>Train Name:</strong> {ticket.trainName}</Typography>
              <Typography variant="body1"><strong>Train Number:</strong> {ticket.trainNumber}</Typography>
              <Typography variant="body1"><strong>Departure:</strong> {ticket.departureStation} - {ticket.departureTime}</Typography>
              <Typography variant="body1"><strong>Arrival:</strong> {ticket.arrivalStation} - {ticket.arrivalTime}</Typography>
              <Typography variant="body1"><strong>Seat Number:</strong> {ticket.seatNumber}</Typography>
              <Typography variant="body1"><strong>Class:</strong> {ticket.ticketClass}</Typography>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} display="flex" justifyContent="space-between">
          <Button
            startIcon={<ArrowBackIcon />}
            component={RouterLink}
            to="/ticket-list"
            variant="outlined"
          >
            Back to Ticket List
          </Button>
          <Box>
            <Button
              startIcon={<EditIcon />}
              component={RouterLink}
              to={`/edit-ticket/${ticket._id}`}
              variant="contained"
              color="primary"
              sx={{ mr: 1 }}
            >
              Edit Ticket
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              onClick={onDeleteClick}
              variant="contained"
              color="error"
            >
              Delete Ticket
            </Button>
          </Box>
        </Box>
      </StyledPaper>

      <Dialog
        open={openDialog}
        onClose={handleDeleteCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this ticket? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ShowTicketDetails;
