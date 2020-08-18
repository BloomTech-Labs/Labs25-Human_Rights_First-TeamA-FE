import React from 'react';
import ReactDOM from 'react-dom';
import { Menu, Dropdown, Button } from 'antd';

const ViewChange = props => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="">
          Map
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="">
          Timeline
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="">
          Feed
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div id="viewchangeparent">
        <Dropdown overlay={menu} placement="topLeft">
          <Button
            style={{
              backgroundColor: 'lightgrey',
              position: 'fixed',
              left: '2%',
              bottom: '5%',
            }}
          >
            Choose Visual
          </Button>
        </Dropdown>
      </div>
    </>
  );
};

export default ViewChange;
