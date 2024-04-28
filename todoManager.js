const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
let todos = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = input.value.trim();
    if (todoText !== '') {
        addTodo(todoText);
        input.value = '';
    }
});

function addTodo(text) {
    const todo = {
        id: Date.now(),
        text: text,
        complete: false
    };
    todos.push(todo);
    displayTodos();
}

function displayTodos() {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const todoItem = document.createElement('li');
        todoItem.innerHTML = `
            <input type="checkbox" ${todo.complete ? 'checked' : ''}>
            <span class="${todo.complete ? 'complete' : ''}">${todo.text}</span>
            <button class="delete-btn">X</button>
        `;
        todoItem.querySelector('input').addEventListener('change', function() {
            todo.complete = !todo.complete;
            displayTodos();
        });
        todoItem.querySelector('.delete-btn').addEventListener('click', function() {
            todos = todos.filter(item => item.id !== todo.id);
            displayTodos();
        });
        todoList.appendChild(todoItem);
    });
}
