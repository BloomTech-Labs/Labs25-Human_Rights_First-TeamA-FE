import { Input } from 'antd';
import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

export class AutoComplete extends React.Component {
  state = {
    address: this.props.address,
  };

  handleAddressChange = address => {
    this.setState({ address });
  };

  handleAddressSelect = address => {
    this.setState({ address: address });
    this.props.onAddressSelect(address);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.address !== this.props.address) {
      this.setState({ address: nextProps.address });
    }
  }

  render() {
    const { address } = this.state;
    const options = {
      // restrict your search to a specific type of result
      // types: ['geocode', 'address', 'establishment', '(regions)', '(cities)'],
      // restrict your search to a specific country, or an array of countries
      componentRestrictions: { country: ['us'] },
    };
    return (
      <PlacesAutocomplete
        onChange={this.handleAddressChange}
        onSelect={this.handleAddressSelect}
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
  }
}
