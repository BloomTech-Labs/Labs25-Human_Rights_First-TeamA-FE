import React from 'react';

const Marker = props => {
  return (
    <div
      className="marker-container"
      style={{
        height: '1vh',
        width: '2vw',
        backgroundColor: 'red',
        borderRadius: '20px',
      }}
    ></div>
  );
};

export default Marker;
