const username = document.querySelector('.greeting');
const loadedName = localStorage.getItem('username');

const loadUser = () => {
  console.log('load');
  username.innerText = loadedName;
};

window.addEventListener('load', loadUser);
