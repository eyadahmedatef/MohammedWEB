//global variable
const resultDiv = document.getElementById("resultDiv");
const specialCharacters = ["/", "*", "+", "-"];

function addValue(newValue) {
    if(resultDiv.innerText == "0"){
        resultDiv.innerText = newValue;
    } else {     

        const oldString = resultDiv.innerText;

        const lastPosition = oldString.length - 1;

        const lastCharacter = oldString[lastPosition];

        if (specialCharacters.includes(lastCharacter) && specialCharacters.includes(newValue)) {
            
            var newString = oldString.substring(0, lastPosition);
            newString += newValue;
            resultDiv.innerText = newString;

        } else {

            resultDiv.innerText += newValue;
            
        }

    }
}

function clearScreen() {
    resultDiv.innerText = "0";
}


function calculate() {
    const equation = resultDiv.innerText;
    const result = eval(equation);
    resultDiv.innerText = result;
}
const colorInput = document.getElementById("colorInput");

const colorResult = document.getElementById("colorResult");

const body = document.body;   

colorInput.addEventListener("click",  function () {
    body.style.backgroundColor = colorInput.value;
});