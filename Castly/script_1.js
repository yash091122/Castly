const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const body = document.getElementById('body');  // Selecting the body element

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    body.classList.add("active");  // Add 'active' class to body to change background color
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    body.classList.remove("active");  // Remove 'active' class from body to revert background color
});
