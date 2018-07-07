import { ADD_TASK, ADD_CATEGORY, DELETE_TASK, TOGGLE_SIDE_PANEL, MOVE_TASK_LEFT, MOVE_TASK_RIGHT } from '../constants/action-types';

export const addCategory = category => {
  return {
    type: ADD_CATEGORY,
    payload: category
  };
};
export const addTask = (categoryID, task) => {
  return {
    type: ADD_TASK,
    payload: {
      categoryID,
      task
    }
  };
};
export const deleteTask = task => {
  return {
    type: DELETE_TASK,
    payload: task
  };
};
export const moveTaskLeft = (categoryID, task) => {
  return {
    type: MOVE_TASK_LEFT,
    payload: {
      categoryID,
      task
    }
  };
};
export const moveTaskRight = (categoryID, task) => {
  return {
    type: MOVE_TASK_RIGHT,
    payload: {
      categoryID,
      task
    }
  };
};
export const toggleSidePanel = () => {
  return {
    type: TOGGLE_SIDE_PANEL
  };
};