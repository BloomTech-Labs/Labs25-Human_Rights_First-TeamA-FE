import React, { useState, useEffect } from 'react';

import { axiosBase } from '../../../../utils/axiosBase';

const Map = props => {
  const [incidents, setIncidents] = useState([]);

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
  return <div></div>;
};

export default Map;
