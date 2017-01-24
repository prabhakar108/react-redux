import React from "react";
import { IndexLink, Link } from "react-router";
import PageOneContainer from '../containers/PageOneContainer';

export default class UserDashboard extends React.Component {
	constructor() {
    super();
    }  
  render() {
        
    return (
            <div id="userDetails"  className="row"> 
       			 	<div id="custom-search-input" className="col-md-12">
		                <div className="input-group col-md-8">
		                    <input type="text" className="form-control input-lg" placeholder="Search" />
		                    <span className="input-group-btn">
		                        <button className="btn btn-info btn-lg" type="button">
		                            <i className="glyphicon glyphicon-search"></i>
		                        </button>
		                    </span>
		                </div>
            		<div className="col-md-2">
	                	<a href="#"><img className="Settings" src="../images/menu1.png" alt="IBM logo"/></a>
	                </div>               		                	                
            	</div>
              <PageOneContainer/>                 
            </div>  
    );
  }
}

