import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import './css/SaveButton.css';

class SaveButton extends Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { state } = this.props;
    localStorage.setItem("BartoszToDo_state", JSON.stringify(state));
    console.log(JSON.stringify(state));
  }
  render() {
    const { showSidePanel } = this.props;
    return (
      <div className="save-button" onClick={this.handleClick} style={!showSidePanel ? {margin: "10px 0 0 10px"} : {}}>
        <FontAwesomeIcon icon={faSave} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
}

SaveButton = connect(mapStateToProps)(SaveButton);

export default SaveButton;