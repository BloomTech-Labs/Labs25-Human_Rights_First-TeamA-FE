import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import ViewChange from '../../ViewChange/viewchange';

import { v4 as uuidv4, v4 } from 'uuid';

import { axiosBase } from '../../../../utils/axiosBase';

const Map = props => {
  const incidents = props.incidents;
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
      >
        {createMarkers}
      </GoogleMapReact>

      <ViewChange />
    </div>
  );
};

export default Map;
