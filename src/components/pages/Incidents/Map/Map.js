import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

import SearchBox from './SearchBox';
import greystyle from './snazzymapGreyscale';

import { v4 as uuidv4 } from 'uuid';

import { axiosBase } from '../../../../utils/axiosBase';

const Map = props => {
  const [incidents, setIncidents] = useState([]);
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

  useEffect(() => {
    axiosBase()
      .get('/incidents')
      .then(res => {
        setIncidents(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  let createMarkers;
  if (incidents.length > 0) {
    createMarkers = incidents.map(incident => {
      return (
        <Marker
          key={uuidv4()}
          lat={incident.geocoding.lat}
          lng={incident.geocoding.long}
          text="Incident"
          incident={incident}
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
