const formElem = document.querySelector(".login-form");

formElem.addEventListener("submit", sendForm);

function sendForm(event) {
    event.preventDefault();

    const elements = event.target.elements;

    if (elements.email.value.trim() && elements.password.value.trim()) {
        const info = {
            email: elements.email.value.trim(),
            password: elements.password.value.trim()
        }
        console.log(info);

        event.target.reset();
    } else {
        alert(`All form fields must be filled in`)
    }
}

