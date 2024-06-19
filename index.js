const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const generalEnquiry = document.getElementById('general-enquiry');
const supportRequest = document.getElementById('support-request');
const message = document.getElementById('messageId');
const consent = document.getElementById('consent');
const submitBtn = document.getElementById('submitBtn');

const errorName = document.getElementById('fnameError');

submitBtn.addEventListener('click', () => {
    if(!firstName.value) {
        errorName.textContent = 'This field is required';
        errorName.classList.add('error');
        firstName.classList.add('errorInput');
    }else{
        errorName.textContent = '';
        firstName.classList.remove('errorInput');
    }
});

const errorLastName = document.getElementById('lnameError');

submitBtn.addEventListener('click', () => {
    if(!lastName.value) {
        errorLastName.textContent = 'This field is required';
        errorLastName.classList.add('error');
        lastName.classList.add('errorInput');
    } else {
        errorLastName.textContent = '';
        lastName.classList.remove('errorInput');
    };
});

const errorMessage = document.getElementById('messageError');

submitBtn.addEventListener('click', () => {
    if(!email.value) {
        errorMessage.textContent = 'Please enter a valid email address';
        errorMessage.classList.add('error');
        email.classLista.add('errorInput');
    } else {
        errorMessage.textContent = '';
        email.classList.remove('errorInput');
    };
});