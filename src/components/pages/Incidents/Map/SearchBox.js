import React, { useState } from 'react';
import { Form, Row, Col } from 'antd';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import AutoComplete from './Autocomplete';
const SearchBox = props => {
  const [address, setAddress] = useState('');

  const onPlaceChanged = address => {
    geocodeByAddress(address)
      .then(async results => {
        if (!results[0].geometry) return;
        if (results[0].geometry.viewport) {
          props.map.fitBounds(results[0].geometry.viewport);
        } else {
          props.map.setCenter(results[0].geometry.location);
          props.map.setZoom(17);
        }
        return getLatLng(results[0]);
      })
      .catch(error => {
        console.error('Error', error);
      });
  };

  const clearAddress = () => {
    setAddress('');
  };

  return (
    <Form className="autocomplete-search">
      <Row>
        <Col>
          <AutoComplete
            address={address}
            clearAddress={clearAddress}
            onAddressSelect={onPlaceChanged}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
