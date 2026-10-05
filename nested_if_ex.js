function checkNumber(){
    let n=Number(document.getElementById("number").value);
    let result=document.getElementById("result");

    if(n>0){
        console.log(`${n} is positive`);
        if(n%2==0){
            console.log(`${n} is even`);
            result.innerHTML=`${n} is positive<br>${n} is even`;
        }
        else{
            console.log(`${n} is odd`);
            result.innerHTML=`${n} is positive<br>${n} is odd`;
        }
    }
    else{
        console.log(`${n} is negative`);
        result.innerHTML=`${n} is negative`;
    }
}