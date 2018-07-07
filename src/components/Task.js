import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import { deleteTask, moveTaskLeft, moveTaskRight } from '../actions/index';
import './css/Task.css';

class Task extends Component {
  constructor () {
    super();
    this.state = {
      mouseOver: false
    }
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.handleClickMoveLeft = this.handleClickMoveLeft.bind(this);
    this.handleClickMoveRight = this.handleClickMoveRight.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleClickDelete() {
    const { id, categories, deleteTask } = this.props;
    let taskToDelete;
    categories.map(category => ({ ...category, tasks: category.tasks.filter(task => {
      if(task.id === id)
        taskToDelete = task;
      return task.id === id;
    }) }) );
    deleteTask(taskToDelete);
  }
  handleClickMoveLeft() {
    const { id, categories, inCategory, moveTaskLeft } = this.props;
    let taskToMove;
    categories.map(category => ({ ...category, tasks: category.tasks.filter(task => {
      if(task.id === id)
        taskToMove = task;
      return task.id === id;
    }) }) );
    moveTaskLeft(inCategory, taskToMove);
  }
  handleClickMoveRight() {
    const { id, categories, inCategory, moveTaskRight } = this.props;
    let taskToMove;
    categories.map(category => ({ ...category, tasks: category.tasks.filter(task => {
      if(task.id === id)
        taskToMove = task;
      return task.id === id;
    }) }) );
    moveTaskRight(inCategory, taskToMove);
  }
  handleMouseOver() {
    this.setState({ mouseOver: true });
  }
  handleMouseLeave() {
    this.setState({ mouseOver: false });
  }
  render() {
    const { inCategory, title, description, color, categories } = this.props;
    const { mouseOver } = this.state;
    const taskTitle = title !== "" ? <span className="task-title">{title}</span> : <span className="task-noTitle">{"No title"}</span>,
          taskDescription = description !== "" ? <span className="task-description">{description}</span> : <span className="task-noDescription">{"No description. Edit me ASAP!"}</span>,
          taskOptions = <span className="task-options">{mouseOver ? <span>
                          <span className="task-option-delete" onClick={this.handleClickDelete}><FontAwesomeIcon icon={faTimes} /></span>
                          {inCategory !== 0 ? <span className="task-option-arrow" onClick={this.handleClickMoveLeft}><FontAwesomeIcon icon={faCaretLeft} /></span> : <span className="task-option-arrow-disabled"><FontAwesomeIcon icon={faCaretLeft} /></span>}
                          {inCategory !== categories.length - 1 ? <span className="task-option-arrow" onClick={this.handleClickMoveRight}><FontAwesomeIcon icon={faCaretRight} /></span> : <span className="task-option-arrow-disabled"><FontAwesomeIcon icon={faCaretRight} /></span>}
                        </span> : ""}</span>;
    
    return (
      <div className="task" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
        <div className="task-header" style={color !== "" ? {borderLeft: `4px solid ${color}`} : {borderLeft: 0}}>
          {taskTitle}
        </div>
        <div className="task-body">
          {taskDescription}
          {taskOptions}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { categories: state.categories };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteTask: task => dispatch(deleteTask(task)),
    moveTaskLeft: (categoryID, task) => dispatch(moveTaskLeft(categoryID, task)),
    moveTaskRight: (categoryID, task) => dispatch(moveTaskRight(categoryID, task))
  };
};

Task = connect(mapStateToProps, mapDispatchToProps)(Task);

export default Task;