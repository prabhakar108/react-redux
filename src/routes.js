import React from 'react';
import ReactDOM from "react-dom";
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Welcome from "./components/pages/Welcome";
import UserAdministration from "./components/pages/UserAdministration";
import AddNewUser from "./components/AddNewUser";
import AddApplication from "./components/AddApplication";
import EditUser from "./components/EditUser";
import ApplicationAdministration from "./components/pages/ApplicationAdministration";
import ProjectAdministration from "./components/pages/ProjectAdministration";
import Tasklist from "./components/pages/Tasklist";
import ServiceCatalog from "./components/pages/ServiceCatalog";
import Dashboard from "./components/pages/Dashboard";


export default (
  <Route path="/" component={App}>
      <IndexRoute component={Welcome}/>
      <Route path="useradministration" component={UserAdministration}></Route>      
      <Route path="useradministration/addNewUser" component={AddNewUser}></Route>
      <Route path="/addNewUser/addApplication" component={AddApplication}></Route>
      <Route path="useradministration/editUser" component={EditUser}></Route>
      <Route path="applicationadministration" component={ApplicationAdministration}></Route>
      <Route path="projectadministration" component={ProjectAdministration}></Route>
      <Route path="tasklist" component={Tasklist}></Route>
      <Route path="servicecatalog" component={ServiceCatalog}></Route>
      <Route path="dashboard" component={Dashboard}></Route>
  </Route>
);
