import React from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { IndexLink, Link } from "react-router";

const customStyles = {
	overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  	},
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


export default class AddApplication extends React.Component {
	constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      showApp1:false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addApp1 = this.addApp1.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  addApp1(){
    this.setState({showApp1:true,modalIsOpen: false});
  }
  render() {
    return (
    <div>
            <div className="row applicationList addUserSection">
            	<div className="col-md-12">
            		Add User/Basic Details/Application List
     			</div>

     			<div className="col-md-12 applicatioSection">
	     			<h3>Step 2</h3>
	     			<h4>User ID / Application List</h4>
	     			<div id="addApplication" className="applications">
	     				<a href="javascript:;" onClick={this.openModal}>
	     					<img src="../images/1484748073_add.png" alt="addApplication"/>
	     					<p>Add Application</p>
	     				</a>	     				
	     			</div>

            {this.state.showApp1 && <div className="applications" id="application_1">
              <h4>Application 1</h4>  
              <ul>
                <li>OTFA-Admin</li>
                <li>TDM-Tester</li>
              </ul>
              <p id="view_app">View</p>             
            </div>}
	     			
	     			<div className="applicationListFooter">
		     			<button type="button" id="addUserfooterBack" className="btn btn-ignite">
		                   	<IndexLink to="/">Back</IndexLink>
		                </button>
	                	<button type="button" id="addUserfooterCreateUser" className="btn btn-ignite">
	                   		<IndexLink to="/useradministration" >Create User</IndexLink>
	                	</button>
            </div>
	     		</div>
	     	</div> 

 		<Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div id="createForm">
                <form role="form">
                  <div className="form-group">
                   <select className="selectpicker">
					  <option>Application 1</option>
					  <option>Application 2</option>
					</select>
                  </div>
                   <div className="form-group">
                   <h4>Services & Roles</h4>
                   <div>	
                   		<ul>
                   			<li>OTFA</li>
                   			<li><input type="checkbox" value=""/> Super Admin</li>
                   			<li><input type="checkbox" value=""/> Admin</li>
                   			<li><input type="checkbox" value=""/> Tester</li>
                   			</ul>
                   		</div>
                   <div>
                   <ul> 	<li>TDM</li>
                   			<li><input type="checkbox" value=""/> Admin</li>
                   			<li><input type="checkbox" value=""/> Tester</li>
                   			</ul>
                   </div>
                   <div>
                     <ul>
                     		<li>Cognitive</li>
                   			<li><input type="checkbox" value=""/> User</li>
                   			</ul>
                   </div>
                  </div> 
               </form>  
	            <div className="addApplicationfooter">               
	                <button type="button" className="btn btn-ignite" onClick={this.addApp1}>
	                   Add
	                </button>
	                <button type="button" className="btn btn-ignite add-app">
	                  <a href="#">Cancel</a>
	                </button>
				</div>
        </div>
  		</Modal>

    </div>
    );
  }
}

