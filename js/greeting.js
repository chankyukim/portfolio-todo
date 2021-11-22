const loginForm = document.querySelector('.login-form');
const loginInput = document.querySelector('.login-input');

const USERNAME_KEY = 'username';

//submit
const handleSubmit = e => {
  e.preventDefault();

  const username = loginInput.value;
  savedName(username);
  nextPage();
};

//다음 페이지로 이동
const nextPage = () => {
  location.href = '../todo.html';
};

//localstorage에 이름값 저장
const savedName = name => {
  localStorage.setItem(USERNAME_KEY, name);
};

loginForm.addEventListener('submit', handleSubmit);
