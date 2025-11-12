const goToQuiz = document.getElementById('goToQuiz');
const inputName = document.getElementById('inputName');
const form = document.getElementById('form');
const error = document.getElementById('error');
const register = document.getElementById('register');

goToQuiz.addEventListener('click', (e) => {
    e.preventDefault();

    if (inputName.value !== ''){
        register.style.display = 'none'
        inputName.classList.remove('error')
        error.innerHTML = ''
    }
    else{
        inputName.classList.add('error')
        const message = document.createElement('p')
        message.textContent = 'Введите имя!'
        message.style.color = 'red'
        error.appendChild(message)
    }
})