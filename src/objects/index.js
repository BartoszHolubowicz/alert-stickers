import uuidv1 from 'uuid';

var categoryID = 0;

export const stateCreator = (...categories) => {
  return {
    showSidePanel: true,
    categories: [...categories]
  };
};
export const category = (name = "", ...tasks) => {
  return {
    id: categoryID++,
    name,
    tasks: [...tasks]
  }
};
export const task = (title = "", description = "", color = "") => {
  return {
    id: uuidv1(),
    title,
    description,
    color,
    isEdited: false
  } 
};