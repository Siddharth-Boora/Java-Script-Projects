const todoList =[{
  name: 'wash dishes',
  dueDate: '2025-02-22'
}, {
  name: 'make dinner',
  dueDate: '2025-02-22'
}
];

renderTodoList();

function addTodo() {
  const InputElement = document.querySelector('.nameInput');
  const name = InputElement.value;

  const dateInputElement = document.querySelector('.dueDateInput');

  const dueDate = dateInputElement.value;
  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate,
  });

  InputElement.value = '';
  renderTodoList();
}
function renderTodoList() {
let todoListHTML = '';
for (let i = 0; i < todoList.length; i++) {
  const todoObject = todoList[i];
 // const name = todoObject.name;
 // const dueDate = todoObject.dueDate;
  const { name, dueDate } = todoObject;
  const html = 
  `<div class="nameDate">${name}</div>
    <div class="nameDate">${dueDate}</div> 
  <button class="deleteButton"
  onclick = "
  todoList.splice(${i}, 1);
  renderTodoList();
  ">Delete</button>`;
  todoListHTML += html;
}
document.querySelector('.todoListI').innerHTML = todoListHTML
}