import React from "react";
import { Link } from "react-router";

import Nav from "./Nav";
import Header from "./Header";

const Layout = (props) => {

  return (
    <div>
        <Header/>
        <div class="row">
          <Nav location={location}/> 
           <div class="col col-md-6">
                 {props.children}
            </div>
         </div>
      </div>
  );
};

Layout.propTypes = { children: React.PropTypes.node };

export default Layout;
