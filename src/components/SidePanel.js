import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddButton from './AddButton';
import SaveButton from './SaveButton';
// import DeleteCategoryButton from './DeleteCategoryButton';
import './css/SidePanel.css';

class SidePanel extends Component {
  render() {
    const { showSidePanel } = this.props;
    return (
      <div className="side-panel" style={showSidePanel ? {minWidth: "80px"} : {minWidth: "0px"}}>
        <div className="side-panel-buttons-wrapper">
          <AddButton />
          <SaveButton />
          {/* <DeleteCategoryButton /> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { showSidePanel: state.showSidePanel };
};

SidePanel = connect(mapStateToProps)(SidePanel)

export default SidePanel;