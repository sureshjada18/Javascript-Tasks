function logic1(){
    let output="";
    let n=10;
    while(n<=30){
        output+=n+"\n";
        n=n+10;
    }
    document.getElementById("result1").value=output;
}
function logic2(){
    let output="";
    let i=4;
    while(i<=16){
        output+=i+"\n";
        i=i+3;
    }
    document.getElementById("result2").value=output;
}
function logic3(){
    let output="";
    let i=10;
    while(i>=1){
        output+=i+"\n";
        i=i-1;
    }
    document.getElementById("result3").value=output;
}
function logic4(){
    let output="";
    let i=95;
    while(i>=5){
        output+=i+"\n";
        i=i-5;
    }
    document.getElementById("result4").value=output;
}
function logic5(){
    let sum=0;
    for(let i=2;i<=6;i++){
        sum+=i;
    }
    let output="The sum of the sequence is: "+sum+"\n";
    sum=0;
    let i1=2;
    while(i1<=6){
        sum+=i1;
        i1++;
    }
    output+="The sum of the sequence is: "+sum;
    document.getElementById("result5").value=output;
}
function logic6(){
    let sum=0;
    let n=1;
    while(n<=10){
        sum+=n;
        n++;
    }
    document.getElementById("result6").value=sum;
}
function logic7(){
    let fact=1;
    let n=parseInt(document.getElementById("factorialNumber").value);
    if(isNaN(n)||n<0){
        document.getElementById("result7").value="Please enter a valid number";
        return;
    }
    for(let i=1;i<=n;i++){
        fact*=i;
    }
    document.getElementById("result7").value=`The Factorial of ${n}=${fact}`;
}
function logic8(){
    let output="";
    for(let i=1;i<=3;i++){
        let line="";
        for(let j=1;j<=4;j++){
            line=line+" "+j;
        }
        output+=line+"\n";
    }
    document.getElementById("result8").value=output;
}
function logic9(){
    let output="";
    for(let i=1;i<=10;i++){
        if(i%2===0){
            output+=i+"\n";
        }
    }
    document.getElementById("result9").value=output;
}
function logic10(){
    let output="";
    for(let i=1;i<=5;i++){
        let fact=1;
        for(let j=i;j>=1;j--){
            fact*=j;
        }
        output+=fact+"\n";
    }
    document.getElementById("result10").value=output;
}