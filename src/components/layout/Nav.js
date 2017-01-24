import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
  }
  render() {
    const featuredClass = location.pathname === "/" ? "active" : "";
    const useradministrationClass = location.pathname.match(/^\/useradministration/) ? "active" : "";
    const applicationadministrationClass = location.pathname.match(/^\/applicationadministration/) ? "active" : "";
    const projectadministrationClass = location.pathname.match(/^\/projectadministration/) ? "active" : "";
    const tasklistClass = location.pathname.match(/^\/tasklist/) ? "active" : "";
    const servicesatalogClass = location.pathname.match(/^\/servicesatalog/) ? "active" : "";
    const dashboardClass = location.pathname.match(/^\/dashboard/) ? "active" : "";
    return (
      <div>  
      <div className="col col-md-4">            
            <ul className="igniteSidebar-nav nav">
              <li>
                <div className="profileHeader">
                <img src="../images/icon_avatar-s.png" alt="user avatar"/>
                <p>Admin</p>
            </div>
              </li>
             <li className={featuredClass}>
                <IndexLink to="/">Welcome</IndexLink>
              </li>
              <li className={useradministrationClass}>
                <IndexLink to="useradministration">User Administration</IndexLink>
              </li>
              <li className={applicationadministrationClass}>
                <IndexLink to="applicationadministration">Application Administration</IndexLink>
              </li>
              <li className={projectadministrationClass}>
                <IndexLink to="projectadministration">Project Administration</IndexLink>
              </li>
              <li className={servicesatalogClass}>
                <Link to="tasklist">Task List</Link>
              </li>
              <li className={servicesatalogClass}>
                <Link to="servicecatalog">Service Catalog</Link>
              </li>
              <li className={dashboardClass}>
                <IndexLink to="dashboard">Dashboard</IndexLink>
              </li>
            </ul>            
          </div>
      </div>
    );
  }
}
