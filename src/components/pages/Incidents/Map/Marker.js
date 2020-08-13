import React, { useState } from 'react';
import { Popover } from 'antd';

const Marker = props => {
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);

  const handleHide = () => (setClick(false), setHover(false));

  const handleHover = visible => (setHover(visible), setClick(false));

  const handleClick = visible => (setHover(false), setClick(visible));

  const linkStore = () => {
    if (props.incident.evidence.length > 0) {
      return props.incident.evidence.map(link => (
        <div
          style={{
            textOverflow: 'ellipsis',
            width: '500px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
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
        style={{ width: '500px' }}
        content={content}
        title={`${props.incident.title} ${props.incident.date}`}
        trigger="hover"
        visible={hover}
        onVisibleChange={handleHover}
      >
        <Popover
          style={{ width: '500px' }}
          content={
            <div>
              {content}
              <a onClick={handleHide} className="close">
                Close
              </a>
            </div>
          }
          title={`${props.incident.title} ${props.incident.date}`}
          trigger="click"
          visible={click}
          onVisibleChange={handleClick}
        >
          <div
            className="marker"
            style={{ width: '25px', height: '25px', backgroundColor: 'red' }}
          ></div>
        </Popover>
      </Popover>
    </>
  );
};

export default Marker;
