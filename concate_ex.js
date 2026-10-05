let fname="FULLSTACK";
let middle="EXPERTS";
let lname="ACADEMY";
let fullName=fname+" "+middle+" "+lname;
console.log("Full Name:",fullName);

let Str="25";
let num=25;

n1=parseInt(Str);
console.log("Data type of n1:",typeof(n1));

let n=10;
let n2=parseFloat(n);
console.log("Data type of n2:",typeof(n2));

let str_num="hi25";
let n3=parseInt(str_num);
console.log("Data type of n3:",typeof(n3));

let n4=Number(Str);
console.log("Data type of n4:",typeof(n4));

document.getElementById("fullName").textContent=fullName;
document.getElementById("strValue").textContent=Str;
document.getElementById("numValue").textContent=num;
document.getElementById("n1").textContent=n1;
document.getElementById("n1Type").textContent=typeof(n1);
document.getElementById("n2").textContent=n2;
document.getElementById("n2Type").textContent=typeof(n2);
document.getElementById("n3").textContent=n3;
document.getElementById("n3Type").textContent=typeof(n3);
document.getElementById("n4").textContent=n4;
document.getElementById("n4Type").textContent=typeof(n4);