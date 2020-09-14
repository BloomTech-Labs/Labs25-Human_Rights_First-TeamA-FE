import React, { Component } from 'react';
import { Form, Row, Col } from 'antd';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { AutoComplete } from './Autocomplete';
class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
    };
  }

  componentWillUnmount({ mapApi } = this.props) {
    mapApi.event.clearInstanceListeners(this.searchInput);
  }
  onPlaceChanged = address => {
    console.log(address);
    geocodeByAddress(address)
      .then(async results => {
        if (!results[0].geometry) return;
        if (results[0].geometry.viewport) {
          this.props.map.fitBounds(results[0].geometry.viewport);
        } else {
          this.props.map.setCenter(results[0].geometry.location);
          this.props.map.setZoom(17);
        }
        return getLatLng(results[0]);
      })
      .catch(error => {
        console.error('Error', error);
      });
  };

  clearAddress() {
    this.setState({ address: '' });
  }

  render() {
    return (
      <Form className="autocomplete-search">
        <Row>
          <Col>
            <AutoComplete
              address={this.state.address}
              clearAddress={this.clearAddress}
              onChange={this.handleAddressChange}
              onAddressSelect={this.onPlaceChanged}
            />
          </Col>
        </Row>
      </Form>
    );
  }
}

export default SearchBox;
