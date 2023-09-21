//Get references to the form and its input elements
const form = document.querySelector('form');
const inputElements = form.querySelectorAll('input[type="text"]:not([name="submitButton"]), input[type="email"], input[type="tel"], input[type="password"]');
const spans = form.querySelectorAll('span.invalid.ut-chara');

//Function to validate the text input fields
function validateForm() {
    let isValid = true;

    inputElements.forEach((input, index) => {
        //Check if the input is empty or contains invalid data
        if (input.value.trim() === '') {
            spans[index].textContent = 'This field is required.';
            isValid = false;
        } else {
            spans[index].textContent = '';

            //Additional validations based on input type
            if (input.type === 'tel' && !/^\d{9}$/.test(input.value)) {
                spans[index].textContent = 'Phone number must be a 9-digit number.';
                isValid = false;
            }

            if (input.type === 'password' && input.name !== 'confirm-password' && input.value.length < 7) {
                spans[index].textContent = 'Password must be at least 7 characters long.';
                isValid = false;
            }

            if (input.type === 'password' && input.name === 'confirm-password') {
                const password = form.querySelector('input[name="password"]').value;
                if (input.value !== password) {
                    spans[index].textContent = 'Passwords do not match.';
                    isValid = false;
                }
            }
        }
    });

    return isValid;
}

//Add a submit event listener to the form
form.addEventListener('submit', (e) => {
    //Prevent the form from submitting by default
    e.preventDefault();

    //Validate the text input fields
    const isFormValid = validateForm();

    //If the form is valid, you can submit it, or you can perform other actions
    if (isFormValid) {
        console.log("ACCEPT")
    }
});
