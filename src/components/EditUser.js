import React from "react";
import { IndexLink, Link } from "react-router";

export default class EditUser extends React.Component {
	constructor() {
    super();
    this.state = {
      showRoles:false,      
      showApplicationList:false
    };
    this.showRoles = this.showRoles.bind(this);
    this.showApplicationList = this.showApplicationList.bind(this);
  }
  showRoles(){
    this.setState({showRoles: !this.state.showRoles});
  }
  showApplicationList(){
    this.setState({showApplicationList:!this.state.showApplicationList});
  }
  render() {
    return (
      <div>
            <div className="editUserSection row">
            	<div className="col-md-12">
            		Update User/ Prabhakar Venkatesan
     			</div>
     			<div className="col-md-12">     				
	     			<h3>Prabhakar Venkatesan</h3>
	     			<h5>pravenka@in.ibm.com</h5>
     			</div>
     			<div id="EditRoles" className="col-md-12">
	     			<div className="edit">
	     				<button onClick={this.showRoles}>edit</button>Roles
	     			</div>
	           		{this.state.showRoles &&  
	               <form role="form">	            	          
	                  <div className="form-group">
			            <table>
	       		 			<tbody>
	       		 				<tr><td className="col1"><input type="checkbox"/> Business Analyst</td><td className="col2"><input type="checkbox" value=""/> Test Lead</td></tr>       		 			
	       		 				<tr><td className="col1"><input type="checkbox" value=""/> Test Manager</td><td className="col2"><input type="checkbox" value=""/> Defect Manager</td></tr>
	       		 	   		</tbody>
	       		 		</table>
	                  </div>
                	</form>}	                
                </div>
                <div id="EditApps" className="col-md-12">
	     			<div className="edit">
	     				<button onClick={this.showApplicationList}>edit</button>Application List
	     			</div>
	            	{this.state.showApplicationList && 
	            	<form role="form">	            	          
	                  <div className="form-group">
	                  	<h4>Application 1</h4>  
			              <ul>
			                <li>OTFA-Admin</li>
			                <li>TDM-Tester</li>
			              </ul>
              			<p id="Edit_app">Edit</p> 
	                  </div>
                	</form> }	                
                </div>
            </div>            
            <div className="editUserfooter col-md-12">
                <button type="button" className="btn btn-ignite">
               		<IndexLink to="/useradministration">Update User</IndexLink>
            	</button>
            </div>      
      </div>
    );
  }
}

