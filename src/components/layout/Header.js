import React from "react";


export default class Header extends React.Component {
  render() {
    return (
        <div className="row">
        <div className="igniteHeader col-md-12">
               <a className="navbar-brand" href="#"><img className="ibmLogo" src="../images/ibm-logo-white.gif" alt="IBM logo"/> IGNITE</a>
               <ul className="global-header-right">
                  <li className="help"><a href="javascript:void(0);" id="help" title="Help">Help</a></li>
                </ul>
        </div>
      </div>
    );
  }
}
