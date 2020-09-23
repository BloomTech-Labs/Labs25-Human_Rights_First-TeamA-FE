import React, { useState, useContext } from 'react';
import { IncidentContext } from '../../../../state/contexts/index';
import GoogleMapReact from 'google-map-react';
import LocalPopOver from '../LocalPopOver';
import SearchBox from './SearchBox';
import greystyle from './snazzymapGreyscale';

/**
 * This map uses the google-map-react library which is built on the Google Maps API.
 * https://github.com/google-map-react/google-map-react#use-google-maps-api
 * Requires Google Maps API key including: "Places", "Geocoding", "Maps" and "JavaScript" apis.
 * Subscription to apis is available through the Google Maps Api api key dashboard.
 * https://developers.google.com/maps/documentation/javascript/get-api-key
 */

const Map = () => {
  const incidents = useContext(IncidentContext);
  const [apiReady, setApiReady] = useState(false);
  const [map, setMap] = useState(null);
  const [googlemaps, setGooglemaps] = useState(null);

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
  // Required by Google Maps API to initiate map
  const handleApiLoaded = (map, maps) => {
    if (map && maps) {
      setApiReady(true);
      setMap(map);
      setGooglemaps(maps);
    }
  };
  // Create markers for map
  let createMarkers;
  if (incidents.length > 0) {
    createMarkers = incidents.map(incident => {
      return (
        <LocalPopOver
          key={`popover-${incident.id}`}
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
        gestureHandling={'greedy'}
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
