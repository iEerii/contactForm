document.addEventListener('DOMContentLoaded', () => {

    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const email = document.getElementById('email');
    const message = document.getElementById('messageId');
    const submitBtn = document.getElementById('submitBtn');
    
    const errorName = document.getElementById('fnameError');
    const errorLastName = document.getElementById('lnameError');
    const errorEmail = document.getElementById('emailError');
    const errorMessage = document.getElementById('messageError');
    const errorQuery = document.getElementById('errorQuery');
    const errorAgreeCheck = document.getElementById('agreementCheckbox');
    
    submitBtn.addEventListener('click', () => {
        const queryType = document.querySelector('input[name="query-type"]:checked');
        const agreeCheck = document.querySelector('input[name="agreeCheckbox"]:checked');
    
        if(!firstName.value) {
            errorName.textContent = 'This field is required';
            errorName.classList.add('error');
            firstName.classList.add('errorInput');
        }else{
            errorName.textContent = '';
            firstName.classList.remove('errorInput');
        }
    
        if(!lastName.value) {
            errorLastName.textContent = 'This field is required';
            errorLastName.classList.add('error');
            lastName.classList.add('errorInput');
        } else {
            errorLastName.textContent = '';
            lastName.classList.remove('errorInput');
        };
    
        if(!email.value) {
            errorEmail.textContent = 'Please enter a email address';
            errorEmail.classList.add('error');
            email.classList.add('errorInput');
        } else if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email.value)) {
            errorEmail.textContent = 'Please enter a valid email address';
            errorEmail.classList.add('error');
            email.classList.add('errorInput');
        } else {
            errorEmail.textContent = '';
            email.classList.remove('errorInput');
        };
    
        if(!queryType){
            errorQuery.textContent = 'Please select a query type';
            errorQuery.classList.add('error');
        } else {
            errorQuery.textContent = '';
        }
    
        if(!message.value){
            errorMessage.textContent = 'This field is required';
            errorMessage.classList.add('error');
            message.classList.add('errorInput');
        } else {
            errorMessage.textContent = '';
            message.classList.remove('errorInput');
        }
    
        if(!agreeCheck){
            errorAgreeCheck.textContent = 'To submit this form, please consent to being contacted';
            errorAgreeCheck.classList.add('error');
        } else {
            errorAgreeCheck.textContent = '';
        }

        if(!firstName.value || !lastName.value || !email.value || !message.value || queryType === null || agreeCheck === null){
            alert('You have no filled in or selected all the fields');
        } else {
            alert('Thanks for completin the form. We\'ll be in touch soon!');
        }
    });
});