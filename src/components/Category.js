import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSidePanel } from '../actions/index';
import './css/Category.css';
import Task from './Task';

class Category extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { toggleSidePanel } = this.props;
    toggleSidePanel();
  }
  render() {
    const { id, name, tasks } = this.props;
    const renderTask = task => <Task inCategory={id} title={task.title} description={task.description} color={task.color} isEdited={task.isEdited} id={task.id} key={task.id} />;
    return (
      <div className="category">
        <div className="category-header" onClick={this.handleClick}>
          <span>{name}</span>
        </div>
        <div className="category-body">
          {tasks.map(task => renderTask(task))}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleSidePanel: () => dispatch(toggleSidePanel())
  };
};

Category = connect(null, mapDispatchToProps)(Category);

export default Category;