//create billTotal value to store the user input
let billTotal = document.querySelector("#billTotal");

//makes output to store the output
let dvOutput = document.querySelector("#dvOutput");

function calcTip(){
    //assuming tip is 15%
    let tip = billTotal.value * .15;
    //calculate the final value of the bill by adding the billTotal and tip. use parseFloat so that the numbers are treated as numbers instead of a string and can show decimal places
    let billAndTip = parseFloat(tip) + parseFloat(billTotal.value);
    dvOutput.innerHTML = "Tip: $" + tip + ". Total: $" + billAndTip;
}