import { ADD_CATEGORY, ADD_TASK, DELETE_TASK, MOVE_TASK_LEFT, MOVE_TASK_RIGHT, TOGGLE_SIDE_PANEL } from '../constants/action-types';
import initialState from './initialState';

const rootReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_CATEGORY:
      return { ...state, categories: [...state.categories, action.payload] };
    case ADD_TASK:
      return { ...state, categories: state.categories.map(category => action.payload.categoryID === category.id ? { ...category, tasks: [...category.tasks, action.payload.task]} : category) };
    case DELETE_TASK:
      return { ...state, categories: state.categories.map(category => ({ ...category, tasks: category.tasks.filter(task => task.id !== action.payload.id) }) ) };
    case MOVE_TASK_LEFT:
      return { ...state, categories: state.categories.map(category => category.id + 1 === action.payload.categoryID ? ({...category, tasks: [...category.tasks, action.payload.task]}) : ({ ...category, tasks: category.tasks.filter(task => task.id !== action.payload.task.id) }) ) };
    case MOVE_TASK_RIGHT:
      return { ...state, categories: state.categories.map(category => category.id - 1 === action.payload.categoryID ? ({...category, tasks: [...category.tasks, action.payload.task]}) : ({ ...category, tasks: category.tasks.filter(task => task.id !== action.payload.task.id) }) ) };
    case TOGGLE_SIDE_PANEL:
      return { ...state, showSidePanel: !state.showSidePanel };
    default:
      return { ...state };
  }
};

export default rootReducer;