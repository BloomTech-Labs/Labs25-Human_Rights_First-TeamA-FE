import React from 'react';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { Button } from 'antd';

const Landing = () => {
  return (
    <>
      <Card
        title="Requires your consent"
        style={{ width: 300 }}
        className="consent-card"
      >
        <a href="https://www.humanrightsfirst.org/">
          <Button type="primary">Take me away</Button>
        </a>
        <></>
        <></>
        <Link to="/home">
          <Button type="primary">Let me see!</Button>
        </Link>
      </Card>
    </>
  );
};
export default Landing;
