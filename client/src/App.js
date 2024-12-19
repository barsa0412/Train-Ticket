// import React from 'react';
// import { Route, Routes } from 'react-router-dom'; // No need to import Router anymore
// import { ThemeProvider } from '@mui/material/styles';
// import { CssBaseline, Box } from '@mui/material';
// import vibrantTheme from './theme/vibrantTheme';

// // import CreateSlot from './components/CreateSlot';

// // import ConfirmedSlot from './components/ConfirmedSlot';
// //import DetailPage from './components/DetailPage';


// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import HomePage from './components/Homepage';

// const App = () => {
//   return (
//     <ThemeProvider theme={vibrantTheme}>
//        <CssBaseline />
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           minHeight: '100vh',
//         }}
//       >
//         <Navbar />

//         <Box
//           sx={{
//             flex: 1,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             {/* <Route path="/createSlotList" element={<CreateSlot />} />
//             <Route path="/confirmedSlot" element={<ConfirmedSlot />} /> */}
//             {/* Uncomment and add these routes as needed */}
//             {/* <Route path="/about-us" element={<AboutUs />} /> */}
//             {/* <Route path="/show-rooms" element={<ShowRooms />} /> */}
//             {/* <Route path="/create-room" element={<CreateRoom />} /> */}
//             {/* <Route path="/details/*" element={<DetailPage />} /> */}
//           </Routes>
//         </Box>

//         <Footer />
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import CreateBook from './components/CreateBook';
// import ShowBookList from './components/ShowBookList';
// import ShowBookDetails from './components/ShowBookDetails';
// import UpdateBookInfo from './components/UpdateBookInfo';
import Homepage from './components/Homepage';
// import NotesPage from './components/NotesPage'; // Import NotesPage component
// import ExportPage from './components/ExportPage';
// import QRCodePage from './components/QRCodePage';
// import SearchBooks from './components/SearchBooks';

import calmOceanTheme from './theme/calmOcean';

const App = () => {
  return (
    <ThemeProvider theme={calmOceanTheme}>
      <CssBaseline />
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Navbar />
          <Box component="main" flexGrow={1} py={3}>
            <Routes>
              <Route exact path='/' element={<Homepage />} />
              {/* <Route path='/book-list' element={<ShowBookList />} />
              <Route path='/create-book' element={<CreateBook />} />
              <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
              <Route path='/show-book/:id' element={<ShowBookDetails />} />
              <Route path='/notes/*' element={<NotesPage />} />
              <Route path="/export" element={<ExportPage />} />
              <Route path="/qr-codes" element={<QRCodePage />} />
              <Route path="/search" element={<SearchBooks />} /> */}
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
