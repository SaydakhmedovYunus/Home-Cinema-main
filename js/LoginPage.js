document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === 'user' && password === 'pass') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = '../index.html';
    }else {
            alert('Не правильный логин или пароль');
        };
});