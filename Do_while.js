

function checkEven() {
let i=1;
let choice;
do{
let n=parseInt(document.getElementById("number").value);
if(n%2==0){
document.getElementById("result").value=n+" is even number";
}
else{
document.getElementById("result").value=n+" is not an even number";
}
choice=prompt("do you want to continue?y/n");
}while(choice==='y'||choice==='Y');}