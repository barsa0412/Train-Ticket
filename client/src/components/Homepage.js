import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const Homepage = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: 'url(https://source.unsplash.com/1600x900/?train,railway)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textAlign: 'center',
                py: 5,
            }}
        >
            <Container maxWidth="md">
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        textShadow: '2px 2px 5px rgba(0,0,0,0.7)',
                    }}
                >
                    Welcome to Train Ticket Reservation
                </Typography>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                        mb: 4,
                        textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                    }}
                >
                    Book your train tickets with ease and convenience.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2,
                    }}
                >
                    <Button
                        component={Link}
                        to="/ticket-list"
                        color="primary"
                        variant="contained"
                        sx={{
                            backgroundColor: 'rgba(0, 123, 255, 0.85)',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 123, 255, 1)',
                            },
                        }}
                    >
                        View Tickets
                    </Button>
                    
           
          
                    <Button
                        component={Link}
                        to="/create-ticket"
                        color="secondary"
                        variant="contained"
                        sx={{
                            backgroundColor: 'rgba(255, 82, 82, 0.85)',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 82, 82, 1)',
                            },
                        }}
                    >
                        Reserve a Ticket
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Homepage;
