import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const Homepage = () => {
    return (
        <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5}}>
            <Typography variant='h2' component="h1" color='primary' gutterBottom>
                Welcome to Train Ticket Reservation
            </Typography>
            <Box mt={4}>
                <Button
                   component={Link}
                   to="/student-list"
                   color='primary'
                   variant='contained'
                   >view students
                </Button>
                <Button
                component={Link}
                to="/create-student"
                color='primary'
                variant='contained'
                >Create student
                </Button>
            </Box>
        </Container>
    );
};

export default Homepage;