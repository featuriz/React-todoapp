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
