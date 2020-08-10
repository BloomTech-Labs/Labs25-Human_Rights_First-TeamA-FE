import React from 'react';
import ReactDOM from 'react-dom';
import { Landing } from './components/pages/Landing/index';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import 'antd/dist/antd.less';

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
    <Route exact path="/">
      <Landing />
    </Route>
  );
}
