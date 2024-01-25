import React from "react";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import './styles.css'

const libraries = ['places'];
const mapContainerStyle = {
//   width: '70vw',
  height: '80vh',
};

const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

const MapContainer = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY, // ADD THIS TO ENV VARS IN NETLIFY TOO!
        libraries,
    });
    if (loadError) {
        return <div>Error loading maps</div>;
    }
    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
        >
            <Marker position={center} />
        </GoogleMap>
    )
}

export default MapContainer