import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import LocalPopOver from '../LocalPopOver';
import SearchBox from './SearchBox';
import greystyle from './snazzymapGreyscale';

import { v4 as uuidv4 } from 'uuid';

const Map = props => {
  const incidents = props.incidents;
  const [apiReady, setApiReady] = useState(false);
  const [map, setMap] = useState(null);
  const [googlemaps, setGooglemaps] = useState(null);
  const center = {
    lat: 38,
    lng: 267,
  };
  const mapOptions = {
    fullscreenControl: false,
    styles: greystyle,
    minZoom: 5,
  };

  let zoom = 3;
  if (window.screen.width >= 768) {
    zoom = 4;
  }
  if (window.screen.width >= 1200) {
    zoom = 5;
  }

  const handleApiLoaded = (map, maps) => {
    if (map && maps) {
      setApiReady(true);
      setMap(map);
      setGooglemaps(maps);
    }
  };

  let createMarkers;
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
    <div className="googlemap">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
          libraries: ['places', 'geometry'],
        }}
        defaultCenter={{ lat: 38, lng: 267 }}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        options={mapOptions}
      >
        {createMarkers}
      </GoogleMapReact>
      {apiReady && googlemaps && <SearchBox map={map} mapApi={googlemaps} />}
    </div>
  );
};

export default Map;
