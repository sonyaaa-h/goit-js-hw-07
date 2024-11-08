const inputElem = document.querySelector("#name-input");
const spanElem = document.querySelector("#name-output");

inputElem.addEventListener("input", getHello);

function getHello(event) {
    const inputName = event.target.value.trim()
    
    if(inputName){
        spanElem.textContent = inputName;
    }else {
        spanElem.textContent = "Anonymous";
    }

    return inputName;

}


