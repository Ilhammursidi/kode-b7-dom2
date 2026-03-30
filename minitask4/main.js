const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(user.value.length < 5 || password.value.length < 5) {
        alert('Username and password must be at least 5 characters long.');
        return;
    }
    localStorage.setItem('users', JSON.stringify({user: user.value, password: password.value}));
    window.location.href = '/minitask4/index.html';
})
 
