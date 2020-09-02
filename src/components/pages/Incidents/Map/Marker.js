import React, { useState } from 'react';
import { Popover } from 'antd';
const orangemarker = require('../../../../resources/images/orange_blue_marker.png');

const Marker = props => {
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);

  const handleHide = () => {
    setClick(false);
    setHover(false);
  };

  const handleHover = visible => {
    setHover(visible);
    setClick(false);
  };

  const handleClick = visible => {
    setHover(false);
    setClick(visible);
  };

  const linkStore = () => {
    if (props.incident.links.length > 0) {
      return props.incident.links.map(link => (
        <div className="evidence">
          {' '}
          <a href={link}>{link} </a>
        </div>
      ));
    }
  };
  let content = linkStore();
  const evidence = <h3>Evidence:</h3>;
  content.unshift(evidence);

  return (
    <>
      <Popover
        content={content}
        title={
          <div className="title-container">
            <div>{props.incident.title}</div> <div>{props.incident.date}</div>
          </div>
        }
        trigger="hover"
        visible={hover}
        onVisibleChange={handleHover}
      >
        <Popover
          content={
            <div>
              {content}
              <div className="close-container">
                <button onClick={handleHide} className="close">
                  Close
                </button>
              </div>
            </div>
          }
          title={
            <div className="title-container">
              <div>{props.incident.title}</div> <div>{props.incident.date}</div>
            </div>
          }
          trigger="click"
          visible={click}
          onVisibleChange={handleClick}
        >
          {/* <divclassName="marker"></div> */}
          <img src={orangemarker} alt="map marker" className="marker"></img>
        </Popover>
      </Popover>
    </>
  );
};

export default Marker;
