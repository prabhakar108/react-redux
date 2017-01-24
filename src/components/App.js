import React from 'react';
import Logger from 'simple-console-logger';

import Header from "./layout/Header";
import Nav from "./layout/Nav";

Logger.configure({level: 'debug'});

require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');
require('react-widgets/dist/css/react-widgets.css');

const App = (props) => {

  return (
    <div>
    <Header/>
      <div className="row">
        <Nav/>
        <div className="col col-md-6">
          {props.children}
        </div>
      </div>
    </div>
  );
};

App.propTypes = { children: React.PropTypes.node };

export default App;
