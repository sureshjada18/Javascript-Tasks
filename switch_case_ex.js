function switchExample(){
    let n=document.getElementById("switchValue").value;
    let output="";
    switch(n){
        case "1":
        output="case 1 will be executed";
        break;
        case "2":
        output="case 2 will be executed";
        break;
        case "3":
        output="case '3' will be executed";
        break;
        default:
        output="no,case values matches the expression,so default will be executed";
        break;
    }
    document.getElementById("switchResult").value=output;
}
function calculator(){
    let op=document.getElementById("operator").value;
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    let output="";
    switch(op){
        case "+":
        output=`sum=${n1+n2}`;
        break;
        case "-":
        output=`sub=${n1-n2}`;
        break;
        case "*":
        output=`mul=${n1*n2}`;
        break;
        case "/":
        output=`div=${n1/n2}`;
        break;
        default:
        output="no,case values matches the expression,so default will be executed";
        break;
    }
    document.getElementById("calculatorResult").value=output;
}
function fallThrough(){
    let op=document.getElementById("fallOperator").value;
    let n1=10;
    let n2=5;
    let output="";
    switch(op){
        case "+":
        output+=`sum=${n1+n2}\n`;
        case "-":
        output+=`sub=${n1-n2}\n`;
        case "*":
        output+=`mul=${n1*n2}\n`;
        case "/":
        output+=`div=${n1/n2}\n`;
        default:
        output+="no,case values matches the expression,so default will be executed";
    }
    document.getElementById("fallResult").value=output;
}