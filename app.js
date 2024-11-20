let currentInput = ''; 

function clearDisplay() {
    currentInput = '';
    document.getElementById("display").value = currentInput;
}
const appendToDisplay = (value) => {
    currentInput += value;
    document.getElementById("display").value = currentInput;
}
const calculateResult = () => {
    try {       
        let result = eval(currentInput);
        if (!isFinite(result)) {
            result = "Erreur";
        }
        currentInput = result.toString();
        document.getElementById("display").value = currentInput;
    } catch (error) {
       document.getElementById("display").value = "Erreur";
        currentInput = '';
    }
}
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById("display").value = currentInput;
}
