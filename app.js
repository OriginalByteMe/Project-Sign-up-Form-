
function validateForm(){
    const password = document.getElementById('password');
    const confirm_password = document.getElementById('confirm_password');
    const password_error = document.getElementById('msg');

    if (password.value !== confirm_password.value) {
        password_error.innerText = '* Passwords do not match';
        password.classList.add('is-invalid');
        confirm_password.classList.add('is-invalid');
        return false;
    }
}
