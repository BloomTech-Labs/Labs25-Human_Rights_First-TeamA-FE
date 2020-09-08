import React, { Component } from 'react';
import { Input, AutoComplete } from 'antd';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.clearSearchBox = this.clearSearchBox.bind(this);
  }

  componentDidMount({ map, mapApi } = this.props) {
    const options = {
      // restrict your search to a specific type of result
      // types: ['geocode', 'address', 'establishment', '(regions)', '(cities)'],
      // restrict your search to a specific country, or an array of countries
      // componentRestrictions: { country: ['gb', 'us'] },
    };
    this.autoComplete = new mapApi.places.Autocomplete(
      this.searchInput,
      options
    );
    this.autoComplete.addListener('place_changed', this.onPlaceChanged);
    this.autoComplete.bindTo('bounds', map);
    console.log(this.autoComplete);
  }

  componentWillUnmount({ mapApi } = this.props) {
    mapApi.event.clearInstanceListeners(this.searchInput);
  }

  onPlaceChanged = ({ map } = this.props) => {
    const place = this.autoComplete.getPlace();
    console.log('Hello');

    if (!place.geometry) return;
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    this.searchInput.blur();
  };

  clearSearchBox() {
    this.searchInput.value = '';
  }

  render() {
    return (
      // <input
      //   className="autocomplete-search"
      //   ref={ref => {
      //     this.searchInput = ref;
      //   }}
      //   type="text"
      //   onFocus={this.clearSearchBox}
      //   placeholder="Enter a location"
      // />
      <div className="autocomplete-search">
        <AutoComplete>
          <Input.Search
            autoComplete="on"
            id={'map-search-box'}
            ref={ref => {
              this.searchInput = ref;
            }}
            type="text"
            onFocus={this.clearSearchBox}
            placeholder="Enter a location"
          />
        </AutoComplete>
      </div>

      // FIX AUTOCOMPLETE
    );
  }
}

export default SearchBox;
