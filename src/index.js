import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { Landing } from './components/pages/Landing/index';
import { axiosBase } from './utils/axiosBase';
import { IncidentContext } from './state/contexts/index';
import TimelineLabel from './components/pages/Incidents/Timeline/timeline';
import Map from './components/pages/Incidents/Map/Map';
import ViewChange from './components/pages/ViewChange/viewchange';
import './styles/css/index.css';
import 'antd/dist/antd.dark.less';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  const [incidents, setIncidents] = useState([]);
  const match = useHistory();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('consent')) !== true) {
      match.push('/');
    }
    axiosBase()
      .get('/incidents')
      .then(res => {
        setIncidents(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [match]);

  return (
    <>
      <IncidentContext.Provider value={incidents}>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/map">
          <Map />
          <ViewChange />
        </Route>
        <Route path="/timeline">
          <TimelineLabel />
          <ViewChange />
        </Route>
      </IncidentContext.Provider>
    </>
  );
}
