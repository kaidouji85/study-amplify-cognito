import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Todo App</title>
</head>
<body>
<main>
  <h1>My todos</h1>
  <button id="addTodo">+ new</button>
  <ul id="todoList"></ul>
  <div>
    Try creating a new todo.
    <br>
    <a href="https://docs.amplify.aws/javascript/start/quickstart/">
      Review next step of this tutorial.
    </a>
  </div>
</main>
<script type="module" src="src/main.ts"></script>
</body>
</html>
`
