import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import SearchBox from './SearchBox';

import { v4 as uuidv4, v4 } from 'uuid';

import { axiosBase } from '../../../../utils/axiosBase';

const Map = props => {
  const [incidents, setIncidents] = useState([]);
  const [apiReady, setApiReady] = useState(false);
  const [map, setMap] = useState(null);
  const [googlemaps, setGooglemaps] = useState(null);
  const [center, setCenter] = useState({ lat: 38, lng: 267 });

  let zoom = 3;
  if (window.screen.width >= 768) {
    zoom = 4;
  }
  if (window.screen.width >= 1200) {
    zoom = 5;
  }

  const handleApiLoaded = (map, maps) => {
    console.log('Loading Api', map, 'maps', maps);
    if (map && maps) {
      setApiReady(true);
      setMap(map);
      setGooglemaps(maps);
    }
  };

  const onPlacesChanged = places => {
    console.log(center);
    setCenter(
      (center.lat = places[0].geometry.location.lat()),
      (center.lng = places[0].geometry.location.lng())
    );
    console.log('center2', center);
  };

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
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
          libraries: ['places', 'geometry'],
        }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {createMarkers}
        {apiReady && googlemaps && (
          <SearchBox
            map={map}
            mapsapi={googlemaps}
            onPlacesChanged={onPlacesChanged}
          />
        )}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
