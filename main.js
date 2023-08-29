import { validateLogin } from './/validate';

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click' , () => {
    const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');

const login = loginInput.value;
const password = passwordInput.value;

if (validateLogin(login, password)) {
    alert('Login bem-sucedido');
} else {
    alert('Credenciais invalidas. Tente novamente');
}
});