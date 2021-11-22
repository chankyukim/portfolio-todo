const loginForm = document.querySelector('.login-form');
const loginInput = document.querySelector('.login-input');
const greeting = document.querySelector('.greeting');

const USERNAME_KEY = 'username';

//submit
const handleSubmit = e => {
  e.preventDefault();

  const username = loginInput.value;
  savedName(username);
  nextPage();
  display(username);
};

const display = username => {
  greeting.innerText = `${username} `;
};

//다음 페이지로 이동
const nextPage = () => {
  location.href = '../todo.html';
};

//localstorage에 이름값 저장
const savedName = name => {
  localStorage.setItem(USERNAME_KEY, name);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

loginForm.addEventListener('submit', handleSubmit);
