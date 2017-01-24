import React from "react";
import { IndexLink, Link } from "react-router";

export default class AddNewUser extends React.Component {
  render() {
    return (
      <div>
            <div  className="addUserSection">
            	<div className="col-md-12">
            		Add User/Basic Details
     			</div>
     			<div id="formAddNewUser" className="col-md-12">
	     			<h3>Step 1</h3>
	            	<form role="form">
	            		<div className="form-group">                    
	                      <input type="text" className="form-control" id="name" placeholder="Name"/>
	                  	</div>                  
	                  <div className="form-group">
	                      <input type="email" className="form-control" id="email" placeholder="E-mail"/>
	                  </div>    
	                  <div className="form-group">
	                      <input type="text" className="form-control" id="userid" placeholder="User Id"/>
	                  </div>                
	                  <div className="form-group">
	                  	<h3>Roles</h3>
			            <table>
	       		 			<tbody>
	       		 				<tr><td className="col1"><input type="checkbox"/> Business Analyst</td><td className="col2"><input type="checkbox" value=""/> Test Lead</td></tr>       		 			
	       		 				<tr><td className="col1"><input type="checkbox" value=""/> Test Manager</td><td className="col2"><input type="checkbox" value=""/> Defect Manager</td></tr>
	       		 	   		</tbody>
	       		 			</table>
	                  </div>
	                  <div className="addUserfooter">
	                    <button type="button" className="btn btn-ignite">
	                   		<IndexLink to="/addNewUser/addApplication">Next</IndexLink>
	                	</button>
	                	</div>
                	</form>  
                </div>
            </div>    
      </div>
    );
  }
}

