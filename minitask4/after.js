
const authBtn = document.getElementById("authBtn")
const userData = JSON.parse(localStorage.getItem('users'));
const header = document.querySelector('header');
const logout = document.getElementById('logout');

if (userData) {
    authBtn.innerHTML = `Welcome, ${userData.user}!`;
    header.setAttribute("style", "background-color: lightgreen;");
    authBtn.removeAttribute("href");
    logout.setAttribute("style", "display: flex; width: fit-content; border: 1px solid black;");
    logout.addEventListener('click', () => {
        localStorage.removeItem('users');
        window.location.href = '/minitask4/index.html';
    });
}