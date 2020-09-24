import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { Link } from 'react-router-dom';

const ViewChange = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link
          className={
            window.location.href.includes('/map')
              ? 'viewchange-link-active'
              : 'viewchange-link'
          }
          to="/map"
        >
          Map
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          data-cy="timeline"
          className={
            window.location.href.includes('/timeline')
              ? 'viewchange-link-active'
              : 'viewchange-link'
          }
          to="/timeline"
        >
          Timeline
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div id="viewchangeparent">
        <Dropdown overlay={menu} trigger={['click']} placement="topLeft">
          <Button
            data-cy="choose-visual"
            className={
              window.location.href.includes('/timeline')
                ? 'viewchange-button-timeline'
                : ''
            }
          >
            Choose Visual
          </Button>
        </Dropdown>
      </div>
    </>
  );
};

export default ViewChange;
