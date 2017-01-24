import React from 'react';
import { DropdownList } from 'react-widgets';
import BootstrapTable from 'reactjs-bootstrap-table';
import Logger from 'simple-console-logger';
import { selectionFromString } from '../util';
import Notifier from 'react-bs-notifier';

import { IndexLink, Link } from "react-router";

const log = Logger.getLogger("PageOne");

function noop() {} // get rid of warnings about checkbox change handler

class PageOne extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onShowHeader = this.onShowHeader.bind(this);
    this.onAutoResize = this.onAutoResize.bind(this);
    this.setSelected = this.setSelected.bind(this);
    this.changeTableClass = this.changeTableClass.bind(this);
    this.changeActiveClass = this.changeActiveClass.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onSelectType = this.onSelectType.bind(this);
    this.onClickLink = this.onClickLink.bind(this);
    this.onSort = this.onSort.bind(this);
    this.onChangeSelectText = this.onChangeSelectText.bind(this);
  }

  onSort(col, dir) {
    log.debug('onSort: ' + col + ' ' + dir);
    this.props.sort(col, dir);
  }

  onClickLink(row) {
    const message =
    'You clicked item ' + row.id + ' random number ' + row.rand +
    '. This column has a renderer that displays a link with ' +
    'style bst-no-select so that clicking it does not change the selection.';
    this.props.showAlert(message, row.id);
  }

  onSelectType(value) {
    log.debug('select type: ' + value);
    this.props.setSelectType(value);
  }

  changeTableClass(val) {
    this.props.setTableClass(val);
  }

  changeActiveClass(val) {
    this.props.setActiveClass(val);
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.setSelected();
    }
  }

  setSelected() {
    if (this.refs.selectedInput) {
      log.debug('setSelected: ' + this.refs.selectedInput.value);
      let newSelection = selectionFromString(this.refs.selectedInput.value);
      this.props.setSelected(newSelection);
    }
  }

  onShowHeader(e) {
    log.debug('onShowHeader: ' + e.target.checked);
    this.props.showHeader(e.target.checked);
  }

  onAutoResize(e) {
    log.debug('onAutoResize: ' + e.target.checked);
    this.props.autoResize(e.target.checked);
  }

  onChangeSelectText(e) {
    log.debug('onChangeSelectText: ' + e.target.checked);
    this.props.setDisableSelectText(e.target.checked);
  }

  onChange(newSelection) {
    this.props.setSelected(newSelection);
  }

  render() {
    let resize = null;
    if (this.props.options.resize) {
      resize = {extra: 0, minSize: 200, elements: ['header', 'footer']};
    }
    log.debug('resize option is ' + resize);

    let select = [
      'none',
      'single',
      'multiple'
    ];

    let tableClass = [
      'table',
      'table table-hover',
      'table table-bordered table-hover',
      'table table-bordered table-hover table-condensed',
    ];

    let activeClass = [
      'active',
      'info',
      'success',
      'warning'
    ];

    let columns = [
      { name: 'id', display: 'ID', width: 1 },
      { name: 'User_id', display: 'User Id' },
      { name: 'email', display: 'E-mail' },
      { name: 'role', display: 'Role' }
    ];

    let buttonsDisabled = false;
    if (this.props.selectedCount == 0){
     buttonsDisabled = true;
    }
    let editButtonsDisabled = true;
    if (this.props.selectedCount == 1) {
      editButtonsDisabled = false;
    }

    return (
      <div>
        <div className="col-md-12 section">
            <BootstrapTable data={this.props.data}
              headers={this.props.options.headers}
              select={this.props.options.select}
              tableClass={this.props.options.tableClass}
              disableSelectText={this.props.options.disableSelectText}
              activeClass={this.props.options.activeClass}
              selected={this.props.selected}
              onChange={this.onChange}
              onSort={this.onSort}
              columns={columns}>

              <div style={{margin: '3em', border: '1px solid gray', padding: '1em'}} className="well well-success">
                <p>This DIV is shown when there is no data in the table. When empty the table renders
                the child element of the table.</p>
                <p>Click Reload Data to load new data.</p>
              </div>

            </BootstrapTable>             
        </div>        
        <div className="col-md-12 footer">
         <button className="btn btn-ignite-edit" disabled={editButtonsDisabled}>
              <IndexLink to="useradministration/editUser"> Edit </IndexLink>
          </button>
          <button className="btn btn-ignite-delete" onClick={this.props.deleteSelected} disabled={buttonsDisabled}>
               Delete
          </button>
        </div>
        </div>
    );
  }
}

PageOne.propTypes = { data: React.PropTypes.array };
PageOne.defaultProps = { data: [] };

export default PageOne;
