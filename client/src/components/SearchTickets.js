// src/components/SearchTickets.js
import React, { useState, useEffect } from 'react';
import {
    Container,
    TextField,
    Typography,
    Box,
    Card,
    CardContent,
    Grid,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Button,
    CircularProgress
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import axios from 'axios';

const SearchTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [filteredTickets, setFilteredTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stations, setStations] = useState([]);

    const [filters, setFilters] = useState({
        source: '',
        destination: '',
        travelDate: '',
        sortBy: 'price',
        sortOrder: 'asc'
    });

    useEffect(() => {
        // Fetch tickets and stations
        axios.get('/api/tickets')
            .then((res) => {
                setTickets(res.data);
                setFilteredTickets(res.data);

                // Extract unique stations for source and destination
                const uniqueStations = [
                    ...new Set(res.data.flatMap(ticket => [ticket.source, ticket.destination]))
                ];
                setStations(uniqueStations);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching tickets:', err);
                setLoading(false);
            });
    }, []);

    const applyFilters = () => {
        let result = [...tickets];

        // Filter by source
        if (filters.source) {
            result = result.filter(ticket => ticket.source.toLowerCase() === filters.source.toLowerCase());
        }

        // Filter by destination
        if (filters.destination) {
            result = result.filter(ticket => ticket.destination.toLowerCase() === filters.destination.toLowerCase());
        }

        // Filter by travel date
        if (filters.travelDate) {
            result = result.filter(ticket => ticket.travel_date === filters.travelDate);
        }

        // Apply sorting
        result.sort((a, b) => {
            let valueA = a[filters.sortBy];
            let valueB = b[filters.sortBy];

            if (filters.sortBy === 'travel_time') {
                valueA = new Date(`1970-01-01T${a.travel_time}`);
                valueB = new Date(`1970-01-01T${b.travel_time}`);
            }

            if (valueA < valueB) return filters.sortOrder === 'asc' ? -1 : 1;
            if (valueA > valueB) return filters.sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

        setFilteredTickets(result);
    };

    useEffect(() => {
        applyFilters();
    }, [filters]);

    const resetFilters = () => {
        setFilters({
            source: '',
            destination: '',
            travelDate: '',
            sortBy: 'price',
            sortOrder: 'asc'
        });
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
                Search Train Tickets
            </Typography>

            {/* Search and Filter Section */}
            <Card sx={{ mb: 4, p: 2 }}>
                <CardContent>
                    <Grid container spacing={2} alignItems="center">
                        {/* Source Station */}
                        <Grid item xs={12} md={3}>
                            <FormControl fullWidth>
                                <InputLabel>Source</InputLabel>
                                <Select
                                    value={filters.source}
                                    label="Source"
                                    onChange={(e) => setFilters({ ...filters, source: e.target.value })}
                                >
                                    <MenuItem value="">All</MenuItem>
                                    {stations.map((station, index) => (
                                        <MenuItem key={index} value={station}>
                                            {station}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Destination Station */}
                        <Grid item xs={12} md={3}>
                            <FormControl fullWidth>
                                <InputLabel>Destination</InputLabel>
                                <Select
                                    value={filters.destination}
                                    label="Destination"
                                    onChange={(e) => setFilters({ ...filters, destination: e.target.value })}
                                >
                                    <MenuItem value="">All</MenuItem>
                                    {stations.map((station, index) => (
                                        <MenuItem key={index} value={station}>
                                            {station}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Travel Date */}
                        <Grid item xs={12} md={3}>
                            <TextField
                                fullWidth
                                type="date"
                                label="Travel Date"
                                InputLabelProps={{ shrink: true }}
                                value={filters.travelDate}
                                onChange={(e) => setFilters({ ...filters, travelDate: e.target.value })}
                            />
                        </Grid>

                        {/* Sort By Dropdown */}
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>Sort By</InputLabel>
                                <Select
                                    value={filters.sortBy}
                                    label="Sort By"
                                    onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                                >
                                    <MenuItem value="price">Price</MenuItem>
                                    <MenuItem value="travel_time">Travel Time</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Sort Order */}
                        <Grid item xs={12} md={1}>
                            <FormControl fullWidth>
                                <InputLabel>Order</InputLabel>
                                <Select
                                    value={filters.sortOrder}
                                    label="Order"
                                    onChange={(e) => setFilters({ ...filters, sortOrder: e.target.value })}
                                >
                                    <MenuItem value="asc">Ascending</MenuItem>
                                    <MenuItem value="desc">Descending</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Reset Button */}
                        <Grid item xs={12}>
                            <Box display="flex" justifyContent="center">
                                <Button
                                    variant="outlined"
                                    startIcon={<RestartAltIcon />}
                                    onClick={resetFilters}
                                >
                                    Reset Filters
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* Results Section */}
            <Box sx={{ mb: 2 }}>
                <Typography variant="body1" color="text.secondary">
                    Found {filteredTickets.length} tickets
                </Typography>
            </Box>

            {/* Tickets Grid */}
            <Grid container spacing={3}>
                {filteredTickets.map((ticket) => (
                    <Grid item xs={12} sm={6} md={4} key={ticket.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{ticket.source} → {ticket.destination}</Typography>
                                <Typography>Travel Date: {ticket.travel_date}</Typography>
                                <Typography>Price: ${ticket.price}</Typography>
                                <Typography>Travel Time: {ticket.travel_time}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default SearchTickets;
