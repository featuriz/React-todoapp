# Todos's

Created a project and do clean by removing unwanted files (test, css)

## 1 List

Updated App.js

- Added state array of todos
- Pass this props to Todos.js

Then added new Todos.js

- UI Component :: so only function
- Added
  - return parent-body
  - List map props from App.js

## 2 Delete

Updated App.js

- Created deleteTodo function
- Pass this function to Todos.js
- When clicked from Todos.js
  - Receives id
  - Create new list 'const todos' with filtered values
  - set this to state
  - NOTE: todos // todos: todos // If key and value are same

Todos.js

- Added a button
- Click event to deleteTodo function (from App.js)
- pass id

## 3 New

Created AddForm

- It's a class component
- With a form and a state
- render a form
  - onChange - Update state
  - onSubmit - e.preventDefault() and log

App.js

- import AddForm
- new function addTodo
- pass this function as props (addTodo) to AddForm while render.

AddForm.js

- on handleSubmit pass the state to props (addTodo)
- clear the state
- update input value to state
  - so it clears the state after submit

App.js

- random id
- create new todos
  - add to old one
- update the state

END!
