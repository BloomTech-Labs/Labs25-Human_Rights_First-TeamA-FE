import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router';
import { Result, Button } from 'antd';
const Landing = () => {
  const match = useHistory();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('consent')) === true) {
      match.push('/map');
    }
  }, [match]);
  const accept = () => {
    localStorage.setItem('consent', JSON.stringify(true));
    match.push('/map');
  };
  return (
    <div className="consent-page">
      <div className="upper-container">
        <h1>POLICE USE OF FORCE TRACKER</h1>
        <p>Track incidents of police use of force in the United States</p>
      </div>
      <div className="consent-container">
        <Result
          status="warning"
          title="THIS SITE CONTAINS IMAGES OF GRAPHIC VIOLENCE"
          extra={
            <div className="button-container">
              <a href="https://www.humanrightsfirst.org/" data-cy="abandon">
                <Button type="primary">Abandon</Button>
              </a>
              <Button
                id="continue-btn"
                type="primary"
                data-cy="continue"
                onClick={accept}
              >
                Continue
              </Button>
            </div>
          }
        />
      </div>
    </div>
  );
};
export default Landing;
