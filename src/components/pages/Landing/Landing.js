import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router';
import { Card } from 'antd';
import { Button } from 'antd';

const Landing = () => {
  const match = useHistory();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('consent')) === true) {
      match.push('/map');
    }
  }, []);

  const accept = () => {
    localStorage.setItem('consent', JSON.stringify(true));
    match.push('/map');
  };
  return (
    <div className="consent-container">
      <Card
        title={`THIS SITE CONTAINS IMAGES OF GRAPHIC VIOLENCE`}
        className="consent-card"
      >
        <div className="button-container">
          <a href="https://www.humanrightsfirst.org/">
            <Button type="primary">Abandon</Button>
          </a>
          <Button type="primary" onClick={accept}>
            Continue
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default Landing;
