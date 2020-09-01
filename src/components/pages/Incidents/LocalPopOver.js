import React, { useState } from 'react';
import { Popover } from 'antd';
const baton = require('../../../resources/images/baton.png');

const LocalPopOver = props => {
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
    if (props.incident.evidence.length > 0) {
      return props.incident.evidence.map(link => (
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
                <a onClick={handleHide} className="close">
                  Close
                </a>
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
          {props.marker ? (
            <img src={baton} alt="baton" className="marker"></img>
          ) : null}
          {props.text ? (
            <p>{props.incident.title + props.incident.date}</p>
          ) : null}
        </Popover>
      </Popover>
    </>
  );
};

export default LocalPopOver;
