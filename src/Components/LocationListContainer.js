import React from "react";
import { Accordion, AccordionSummary, Typography, AccordionDetails, Card, CardContent, CardActions, Button, Stack, TextField, Divider } from "@mui/material";
import { ArrowDropDown } from '@mui/icons-material';

const LocationListContainer = ({locationData}) => {

    const locationCards = [];

    locationData.forEach((location) => {
        locationCards.push(
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Location: {location.Location}
                    </Typography>
                    <Typography variant="h5" component="div">
                        Time: {location.Time}
                    </Typography>
                    <Typography variant="body2">
                        Route: {location.Route}
                    </Typography>
                </CardContent>
                <Divider/>
                <CardActions>
                    <Button variant="contained" size="small">View on Map</Button>
                    <Divider/>
                    <Stack sx={{width: '100%'}} direction="row" alignItems="center" justifyContent="center" spacing={2}>
                        <Typography variant="body2">Find route from Location: </Typography>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small'/>
                        <Button variant="contained" size="small">Calculate Route</Button>
                    </Stack>
                </CardActions>
            </Card>
        )
    })

    return (
        <div className='location-container'>
            <Accordion>
                <AccordionSummary
                expandIcon={<ArrowDropDown />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <Typography>View Locations</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack spacing={3}>
                        {locationCards}
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default LocationListContainer