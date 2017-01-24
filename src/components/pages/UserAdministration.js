import React from "react";
import { IndexLink, Link } from "react-router";
import UserDashboard from "../UserDashboard";
 
export default class UserAdministration extends React.Component {
    
  render() {
    return (
     <div>     
       <div className="row">
       		<div id="addNewUser" className="col-md-12">
       		    <IndexLink to="useradministration/addNewUser">
                  <img className="Add User" src="../images/icon-user.png" alt="IBM logo"/>Add New User
              </IndexLink>
       		</div>                                 
        </div>  
        <UserDashboard/>        
      </div>
    );
  }
}

