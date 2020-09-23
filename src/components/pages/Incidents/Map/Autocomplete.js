import { Input } from 'antd';
import React, { useState, useEffect } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

/**
 * Custom autocomplete component used for Searchbox found at:
 * https://gist.github.com/PTKC/7ba3fbdc1d7faa2bfcb846d6dac2491e
 *
 */

const AutoComplete = props => {
  const [address, setAddress] = useState(props.address);
  const options = {
    // restrict your search to a specific type of result
    // types: ['geocode', 'address', 'establishment', '(regions)', '(cities)'],
    // restrict your search to a specific country, or an array of countries
    componentRestrictions: { country: ['us'] },
  };

  const handleAddressChange = address => {
    setAddress(address);
  };

  const handleAddressSelect = address => {
    setAddress(address);
    props.onAddressSelect(address);
  };

  useEffect(() => {
    setAddress(props.address);
  }, [props.address]);

  return (
    <PlacesAutocomplete
      onChange={handleAddressChange}
      onSelect={handleAddressSelect}
      value={address}
      searchOptions={options}
    >
      {({ getInputProps, getSuggestionItemProps, suggestions, loading }) => (
        <React.Fragment>
          <Input.Search
            {...getInputProps({
              id: 'address-input',
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading ? <div>Loading...</div> : null}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              const style = suggestion.active
                ? {
                    backgroundColor: '#fafafa',
                    color: 'black',
                    cursor: 'pointer',
                    padding: 25,
                  }
                : {
                    backgroundColor: '#ffffff',
                    cursor: 'pointer',
                    color: 'black',
                  };

              const spread = {
                ...getSuggestionItemProps(suggestion, {
                  className,
                  style,
                }),
              };

              return (
                <div {...spread} key={suggestion.id}>
                  <div>{suggestion.description}</div>
                </div>
              );
            })}
          </div>
        </React.Fragment>
      )}
    </PlacesAutocomplete>
  );
};

export default AutoComplete;
