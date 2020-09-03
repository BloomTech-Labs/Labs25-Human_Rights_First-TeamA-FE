import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import LocalPopOver from '../LocalPopOver';
import greystyle from './snazzymapGreyscale';

import { v4 as uuidv4, v4 } from 'uuid';

const Map = props => {
  const incidents = props.incidents;
  const center = {
    lat: 38,
    lng: 267,
  };

  const mapOptions = {
    fullscreenControl: false,
    styles: greystyle,
  };
  let zoom = 3;
  if (window.screen.width >= 768) {
    zoom = 4;
  }
  if (window.screen.width >= 1200) {
    zoom = 5;
  }

  let createMarkers;
  console.log(incidents);
  if (incidents.length > 0) {
    createMarkers = incidents.map(incident => {
      return (
        <LocalPopOver
          key={uuidv4()}
          lat={incident.geocoding.lat}
          lng={incident.geocoding.long}
          incident={incident}
          marker={true}
          text={false}
        />
      );
    });
  }

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={mapOptions}
      >
        {createMarkers}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
