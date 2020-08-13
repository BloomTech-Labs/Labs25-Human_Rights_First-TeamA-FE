import React, { useState } from 'react';
import { Popover } from 'antd';

const Marker = props => {
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);

  const handleHide = () => (setClick(false), setHover(false));

  const handleHover = visible => (setHover(visible), setClick(false));

  const handleClick = visible => (setHover(false), setClick(visible));

  return (
    <>
      <Popover
        style={{ width: '500px' }}
        content="Hello"
        title="Hi There"
        trigger="hover"
        visible={hover}
        onVisibleChange={handleHover}
      >
        <Popover
          style={{ width: '500px' }}
          content="Hello"
          title="Hi There"
          trigger="click"
          visible={click}
          onVisibleChange={handleClick}
        >
          <div
            className="marker"
            style={{ width: '25px', height: '25px', backgroundColor: 'red' }}
          ></div>
          <a onClick={handleHide}>Close</a>
        </Popover>
      </Popover>
    </>
  );
};

export default Marker;
