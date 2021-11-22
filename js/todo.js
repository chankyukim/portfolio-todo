'use strict';
//loaded todo
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-form input');
const todoList = document.querySelector('.todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteToDo = e => {
  // console.log(e);
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
};

const paintToDo = newToDo => {
  const li = document.createElement('li');

  li.id = newToDo.id;

  const span = document.createElement('span');
  span.innerText = newToDo.text;
  const button = document.createElement('button');
  button.setAttribute('class', 'fa fa-trash');
  button.addEventListener('click', deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
};

const handleSubmit = e => {
  e.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = '';
  const toDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(toDoObj);
  paintToDo(toDoObj);
  console.log('submit');
};

todoForm.addEventListener('submit', handleSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;
  // console.log(toDos);
  parseToDos.forEach(paintToDo);
}

//loaded username
const username = document.querySelector('.username');
const loadedName = localStorage.getItem('username');

const loadUser = () => {
  username.innerText = loadedName;
};

window.addEventListener('load', loadUser);
