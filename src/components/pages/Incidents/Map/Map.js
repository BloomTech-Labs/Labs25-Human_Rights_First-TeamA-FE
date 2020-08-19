import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import SearchBar from './SearchBar';

import { v4 as uuidv4, v4 } from 'uuid';

import { axiosBase } from '../../../../utils/axiosBase';

const Map = props => {
  const [incidents, setIncidents] = useState([]);
  const center = {
    lat: 38,
    lng: 267,
  };
  let zoom = 3;
  if (window.screen.width >= 768) {
    zoom = 4;
  }
  if (window.screen.width >= 1200) {
    zoom = 5;
  }

  useEffect(() => {
    axiosBase()
      .get('/incidents')
      .then(res => {
        setIncidents(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  let createMarkers;
  console.log(incidents);
  if (incidents.length > 0) {
    createMarkers = incidents.map(incident => {
      return (
        <Marker
          key={uuidv4()}
          lat={incident.latitude}
          lng={incident.longitude}
          text="Incident"
          incident={incident}
        />
      );
    });
  }
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {createMarkers}
      </GoogleMapReact>
      <div style={{ position: 'fixed', top: '6px', left: '3px' }}>
        <SearchBar />
      </div>
    </div>
  );
};

export default Map;