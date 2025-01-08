import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateTicket from './components/CreateTicket';
import ShowTicketList from './components/ShowTicketList';
import ShowTicketDetails from './components/ShowTicketDetails';
import UpdateTicketInfo from './components/UpdateTicketInfo';
import Homepage from './components/Homepage';

import SearchTickets from './components/SearchTickets';
import animatedCalmOceanTheme from './theme/animatedCalmOcean';


const App = () => {
  return (
    <ThemeProvider theme={animatedCalmOceanTheme}>
      <CssBaseline />
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Navbar />
          <Box component="main" flexGrow={1} py={3}>
            <Routes>
              <Route exact path='/' element={<Homepage />} />
              <Route path='/ticket-list' element={<ShowTicketList />} />
              <Route path='/create-ticket' element={<CreateTicket />} />
              <Route path='/edit-ticket/:id' element={<UpdateTicketInfo />} />
              <Route path='/show-ticket/:id' element={<ShowTicketDetails />} />
              <Route path="/search" element={<SearchTickets />} /> 
             
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
