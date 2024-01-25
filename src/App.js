import React from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import MapContainer from './Components/MapContainer';
import LocationListContainer from './Components/LocationListContainer';
import location_data_raw from './Components/location_data_raw';

const App = () => {
  const [ locationData, setLocationData ] = useState(location_data_raw);

  const locationCards = [];
  locationData.forEach((locationObj) => {
    locationCards.push(<div>{locationObj.location}</div>)
  });

  return (
    <div>
      <AppBar
        position="absolute"
        color="default" // change color?
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            MealFinder
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
          <div className="centered-div">
            <MapContainer />
            <LocationListContainer locationData={locationData} />
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default App;