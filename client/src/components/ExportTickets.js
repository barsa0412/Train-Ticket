// src/components/ExportTickets.js
import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Button, Box, CircularProgress } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TableViewIcon from '@mui/icons-material/TableView';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';
import axios from 'axios';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

const ExportTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/tickets')
      .then((res) => {
        setTickets(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching tickets:', err);
        setLoading(false);
      });
  }, []);

  const exportToPDF = () => {
    const doc = new jsPDF();

    // Add title and date
    doc.setFontSize(16);
    doc.text('Train Tickets List', 14, 15);
    doc.setFontSize(10);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 25);

    // Create table data
    const tableColumn = ["Passenger Name", "Train Number", "Seat Number", "Class", "Journey Date"];
    const tableRows = tickets.map(ticket => [
      ticket.passengerName,
      ticket.trainNumber,
      ticket.seatNumber,
      ticket.classType,
      new Date(ticket.journeyDate).toLocaleDateString(),
    ]);

    doc.autoTable({
      startY: 30,
      head: [tableColumn],
      body: tableRows,
      theme: 'grid',
      styles: { fontSize: 8 },
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
    });

    doc.save('train-tickets.pdf');
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      tickets.map(ticket => ({
        'Passenger Name': ticket.passengerName,
        'Train Number': ticket.trainNumber,
        'Seat Number': ticket.seatNumber,
        'Class': ticket.classType,
        'Journey Date': new Date(ticket.journeyDate).toLocaleDateString(),
      }))
    );

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Tickets');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(data, 'train-tickets.xlsx');
  };

  const exportToCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      tickets.map(ticket => ({
        'Passenger Name': ticket.passengerName,
        'Train Number': ticket.trainNumber,
        'Seat Number': ticket.seatNumber,
        'Class': ticket.classType,
        'Journey Date': new Date(ticket.journeyDate).toLocaleDateString(),
      }))
    );

    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const data = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    saveAs(data, 'train-tickets.csv');
  };

  const exportToText = () => {
    let content = 'TRAIN TICKETS LIST\n\n';
    content += `Generated on: ${new Date().toLocaleDateString()}\n\n`;

    tickets.forEach((ticket, index) => {
      content += `${index + 1}. TICKET DETAILS\n`;
      content += `Passenger Name: ${ticket.passengerName}\n`;
      content += `Train Number: ${ticket.trainNumber}\n`;
      content += `Seat Number: ${ticket.seatNumber}\n`;
      content += `Class: ${ticket.classType}\n`;
      content += `Journey Date: ${new Date(ticket.journeyDate).toLocaleDateString()}\n`;
      content += '\n----------------------------\n\n';
    });

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'train-tickets.txt');
  };

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Export Train Tickets
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }} align="center" color="text.secondary">
          Export ticket data in different formats
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 3,
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<PictureAsPdfIcon />}
            onClick={exportToPDF}
            sx={{ p: 2 }}
          >
            Export as PDF
          </Button>

          <Button
            variant="contained"
            size="large"
            startIcon={<TableViewIcon />}
            onClick={exportToCSV}
            sx={{ p: 2 }}
          >
            Export as CSV
          </Button>

          <Button
            variant="contained"
            size="large"
            startIcon={<DownloadIcon />}
            onClick={exportToExcel}
            sx={{ p: 2 }}
          >
            Export as Excel
          </Button>

          <Button
            variant="contained"
            size="large"
            startIcon={<DescriptionIcon />}
            onClick={exportToText}
            sx={{ p: 2 }}
          >
            Export as Text
          </Button>
        </Box>

        <Typography variant="body2" sx={{ mt: 4 }} align="center" color="text.secondary">
          Total Tickets: {tickets.length}
        </Typography>
      </Paper>
    </Container>
  );
};

export default ExportTickets;
