import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

import { axiosBase } from '../../../../utils/axiosBase';

const Map = props => {
  const [incidents, setIncidents] = useState([]);
  const center = {
    lat: 59.95,
    lng: 30.33,
  };
  const zoom = 11;

  useEffect(() => {
    axiosBase()
      .get('/incidents')
      .then(res => {
        console.log(res);
        setIncidents(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log(incidents, 'STATE');
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
