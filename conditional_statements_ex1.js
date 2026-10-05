
function checkIf() {

    let n = Number(document.getElementById("ifN").value);

    if (n === 10) {
        document.getElementById("ifResult").innerHTML =
            "n is strictly equal to 10";
    }
    else {
        document.getElementById("ifResult").innerHTML =
            "The condition is false";
    }
}
function checkIfElse() {
    let n = Number(document.getElementById("elseN").value);
    let n1 = Number(document.getElementById("elseN1").value);
    if (n1 > n) {
        document.getElementById("elseResult").innerHTML =
            "n1 is greater than n";
    }
    else {
        document.getElementById("elseResult").innerHTML =
            "n is greater than or equal to n1";
    }
}
function checkElseIf() {
    let number = Number(document.getElementById("gradeNumber").value);
    if (number >= 90) {
        document.getElementById("elseIfResult").innerHTML =
            "IF condition is true";
    }
    else if (number >= 60) {
        document.getElementById("elseIfResult").innerHTML =
            "IF condition is false and first ELSE IF condition is true";
    }
    else if (number >= 40) {
        document.getElementById("elseIfResult").innerHTML =
            "First ELSE IF is false and second ELSE IF is true";
    }
    else {
        document.getElementById("elseIfResult").innerHTML =
            "All conditions are false, so ELSE block executed";
    }
}
function checkAnd() {
    let n = Number(document.getElementById("andN").value);
    let n1 = Number(document.getElementById("andN1").value);
    if (n === 10 && n1 === 10) {
        document.getElementById("andResult").innerHTML =
            "Both n and n1 are equal to 10";
    }
    else {
        document.getElementById("andResult").innerHTML =
            "Not both n and n1 are equal to 10";
    }
}
function checkTruthyFalsy() {
    let selectedValue =
        document.getElementById("truthyValue").value;
    let value;
    if (selectedValue === "0") {
        value = 0;
    }
    else if (selectedValue === "") {
        value = "";
    }
    else if (selectedValue === "null") {
        value = null;
    }
    else if (selectedValue === "undefined") {
        value = undefined;
    }
    else if (selectedValue === "NaN") {
        value = NaN;
    }
    else if (selectedValue === "false") {
        value = false;
    }
    else if (selectedValue === "true") {
        value = true;
    }
    else if (selectedValue === "10") {
        value = 10;
    }
    else {
        value = "hello";
    }
    if (value) {

        document.getElementById("truthyResult").innerHTML =
            "Truthy value";
    }
    else {

        document.getElementById("truthyResult").innerHTML =
            "Falsy value";
    }
}