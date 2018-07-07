import React, { Component } from 'react';
import { connect } from 'react-redux';
import { task } from '../objects/index';
import { addTask } from '../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './css/AddButton.css';

class AddButton extends Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { addTask } = this.props;
    const categoryID = 0;
    const newTask = task(prompt("Enter the task name:", "Example task"), prompt("Enter the task description:", "This is an example task"), prompt("Enter hex code of task's label color (leave empty for no label):"));
    addTask(categoryID, newTask);
  }
  render() {
    const { showSidePanel } = this.props;
    return (
      <div className="add-button" onClick={this.handleClick} style={!showSidePanel ? {margin: "10px 0 0 10px"} : {}}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { categories: state.categories, showSidePanel: state.showSidePanel };
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: (categoryName, task) => dispatch(addTask(categoryName, task))
  };
}

AddButton = connect(mapStateToProps, mapDispatchToProps)(AddButton);

export default AddButton;