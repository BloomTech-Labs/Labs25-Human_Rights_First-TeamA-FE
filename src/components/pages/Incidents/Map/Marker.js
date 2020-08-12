import React from 'react';

const Marker = props => {
  return (
    <div
      className="marker-container"
      style={{
        height: '5px',
        width: '5px',
        backgroundColor: 'red',
        borderRadius: '20px',
      }}
    ></div>
  );
};

export default Marker;
