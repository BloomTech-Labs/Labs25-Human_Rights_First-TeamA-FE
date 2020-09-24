import React, { useState } from 'react';
import { Popover } from 'antd';
import IncidentModal from './Modal';

const orangemarker = require('../../../resources/images/orange_blue_marker.png');

const LocalPopOver = props => {
  const [click, setClick] = useState(false);

  const handleHide = () => {
    setClick(false);
  };

  const handleClick = visible => {
    setClick(visible);
  };

  const linkStore = () => {
    if (props.incident.links.length > 0) {
      return props.incident.links.map(link => (
        <div className="evidence" key={`link-${link}`}>
          {' '}
          <a href={link}>{link} </a>
        </div>
      ));
    }
  };
  let content = linkStore();
  const evidence = <h3 key={`evidence-${props.incident.id}`}>Evidence:</h3>;
  content.unshift(evidence);

  const formatDate = new Date(props.incident.date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Popover
      zIndex={0}
      content={
        <div>
          {content}
          <div className="close-container">
            <IncidentModal
              incident={props.incident}
              modal={false}
              zIndex={2000}
            />
            <button onClick={handleHide} className="close">
              Close
            </button>
          </div>
        </div>
      }
      title={
        <div className="title-container">
          <div>{props.incident.title}</div> <div>{formatDate}</div>
        </div>
      }
      trigger={['click']}
      overlay={'menu'}
      visible={click}
      onVisibleChange={handleClick}
    >
      <img data-cy={`map-marker-${props.index}`} src={orangemarker} alt="map marker" className="marker"></img>
    </Popover>
  );
};

export default LocalPopOver;
