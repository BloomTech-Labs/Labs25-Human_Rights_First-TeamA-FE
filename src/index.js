import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import { Landing } from './components/pages/Landing/index';
import Map from './components/pages/Incidents/Map/Map';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import 'antd/dist/antd.dark.less';
import TimelineLabel from './components/pages/Incidents/Timeline/timeline';
// import 'antd/dist/antd.less';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  return (
    <>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/home">
        <Map />
      </Route>
      <Route path="/timeline">
        <TimelineLabel />
      </Route>
      <Route path="/cards">
        <div> card path </div>
      </Route>
    </>
  );
}
