import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router';
import { Card } from 'antd';
import { Button } from 'antd';

const Landing = () => {
  const match = useHistory();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('consent')) === true) {
      match.push('/home');
    }
  }, []);

  const accept = () => {
    localStorage.setItem('consent', JSON.stringify(true));
    match.push('/home');
  };
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
        {/* <Link to="/home"> */}
        <Button type="primary" onClick={accept}>
          Let me see!
        </Button>
        {/* </Link> */}
      </Card>
    </>
  );
};
export default Landing;
