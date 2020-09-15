import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { Link } from 'react-router-dom';

const ViewChange = props => {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link
          to="/map"
          style={{
            color: 'black',
          }}
        >
          Map
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="/timeline"
          style={{
            color: 'black',
          }}
        >
          Timeline
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="/feed"
          style={{
            color: 'black',
          }}
        >
          Feed
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div id="viewchangeparent">
        <Dropdown overlay={menu} placement="topLeft">
          <Button
            style={{
              color: 'black',
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
