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




// src/components/HomePage.js
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Container,
//   Typography,
//   Button,
//   Box,
//   Grid,
// //   Card,
// //   CardContent,
//   CircularProgress
// } from '@mui/material';
// // import TrainIcon from '@mui/icons-material/Train';
// // import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// // import PeopleIcon from '@mui/icons-material/People';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import SearchIcon from '@mui/icons-material/Search';
// import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
// import { useSpring, animated } from '@react-spring/web';
// import axios from 'axios';

// const HomePage = () => {
//   const [ setStats] = useState({
//     totalBookings: 0,
//     uniqueUsers: 0,
//     recentBooking: null
//   });
//   const [loading, setLoading] = useState(true);

// //   // Stats card animations
// //   const cardSpring = useSpring({
// //     from: { transform: 'translateY(30px)', opacity: 0 },
// //     to: { transform: 'translateY(0)', opacity: 1 },
// //     delay: 200,
// //     config: { tension: 120, friction: 14 },
// //   });

//   // Hero section animation
//   const fadeIn = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: 1 },
//     config: { duration: 800 },
//   });

//   useEffect(() => {
//     axios.get('/api/bookings')
//       .then(res => {
//         const bookings = res.data;
//         const uniqueUsers = new Set(bookings.map(booking => booking.user)).size;
//         const recentBooking = bookings.sort((a, b) =>
//           new Date(b.date) - new Date(a.date)
//         )[0];

//         setStats({
//           totalBookings: bookings.length,
//           uniqueUsers,
//           recentBooking
//         });
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error('Error fetching stats:', err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <animated.div style={fadeIn}>
//       <Container maxWidth="lg" sx={{ py: 4 }}>
//         {/* Hero Section */}
//         <Box textAlign="center" mb={6}>
//           <Typography
//             variant="h3"
//             component="h1"
//             color="primary"
//             sx={{
//               fontWeight: 'bold',
//               textShadow: '2px 2px 5px rgba(0,0,0,0.2)',
//             }}
//             gutterBottom
//           >
//             Your Train Journey Starts Here 🚂
//           </Typography>
//           <Typography
//             variant="h6"
//             color="text.secondary"
//             sx={{ fontStyle: 'italic', mb: 2 }}
//           >
//             Discover the easiest way to book and manage your train tickets.
//           </Typography>
//         </Box>

//         {/* Stats Cards */}
//         {/* <Grid container spacing={4} mb={6}>
//           {[
//             { title: 'Total Bookings', value: stats.totalBookings, icon: <TrainIcon fontSize="large" /> },
//             { title: 'Unique Users', value: stats.uniqueUsers, icon: <PeopleIcon fontSize="large" /> },
//             { title: 'Latest Booking', value: stats.recentBooking?.train || 'None', icon: <CalendarMonthIcon fontSize="large" /> },
//           ].map((stat, index) => (
//             <Grid item xs={7} md={2} key={index}>
//               <animated.div style={cardSpring}>
//                 <Card
//                   sx={{
//                     height: '10%',
//                     textAlign: 'center',
//                     boxShadow: '0px 8px 20px rgba(24, 12, 134, 0.1)',
//                     transition: 'transform 0.2s',
//                     '&:hover': { transform: 'translateY(-5px)' },
//                   }}
//                 >
//                   <CardContent>
//                     <Box mb={2} color="primary.main">
//                       {stat.icon}
//                     </Box>
//                     <Typography variant="h4" gutterBottom>
//                       {stat.value}
//                     </Typography>
//                     <Typography variant="subtitle1" color="text.secondary">
//                       {stat.title}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </animated.div>
//             </Grid>
//           ))}
//         </Grid> */}

//         {/* Features Section */}
//         <Box textAlign="center" mb={4}>
//           <Typography
//             variant="h5"
//             gutterBottom
//             sx={{
//               fontWeight: 'bold',
//               textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
//             }}
//             color="primary"
//           >
//             Explore Features
//           </Typography>
//         </Box>

//         <Grid container spacing={3} justifyContent="center">
//           {[
//             { label: 'Search Trains', link: '/search-train', icon: <SearchIcon /> },
//             { label: 'Book Ticket', link: '/book-ticket', icon: <AddCircleIcon /> },
//             { label: 'My Tickets', link: '/my-tickets', icon: <ConfirmationNumberIcon /> },
//           ].map((feature, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Button
//                 component={Link}
//                 to={feature.link}
//                 variant="contained"
//                 size="large"
//                 startIcon={feature.icon}
//                 fullWidth
//                 sx={{
//                   py: 2,
//                   fontSize: '1.1rem',
//                   transition: 'transform 0.3s',
//                   '&:hover': { transform: 'scale(1.05)' },
//                 }}
//               >
//                 {feature.label}
//               </Button>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </animated.div>
//   );
// };

// export default HomePage;
