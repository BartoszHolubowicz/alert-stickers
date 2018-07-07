import { stateCreator, category, task } from '../objects/index';

const initialState = localStorage.getItem("BartoszToDo_state") === null ? stateCreator(
  category("To Do" /*,
    task("Get a project done", "Yeah, not going to happen", "#f00"),
    task("Make those tasks and categories save", "Basically that"),
    task("Implement a modal with form for new tasks", "Title says it all.") */
  ),
  category("Doing" /*,
    task("Procrastination", "Never enough of that.", "#ff0"),
    task("Add task editing", "Step by step.", "#0f0") */
  ),
  category("Done" /*,
    task("Write a React + Redux app", "Oh yeah, baby!", "#0f0"),
    task("Get through second semester alive", "Going to be tough.") */
  )
) : JSON.parse(localStorage.getItem("BartoszToDo_state"));

export default initialState;