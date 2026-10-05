function logic1(){
    let output="";
    for(let i=1;i<5;i++){
        if(i==5){
            break;
        }
        output+=i+"\n";
    }
    document.getElementById("result1").value=output;
}
function logic2(){
    let output="";
    let i=1;
    while(i<=10){
        output+=i+"\n";
        if(i==3){
            break;
        }
        i++;
    }
    document.getElementById("result2").value=output;
}
function logic3(){
    let output="";
    for(let i=22;i<=30;i++){
        if(i%5==0){
            output+=i+"\n";
            break;
        }
    }
    document.getElementById("result3").value=output;
}
function logic4(){
    let output="";
    let n=60;
    while(n>=50){
        if(n%4==0){
            output+=n+"\n";
            break;
        }
        n--;
    }
    document.getElementById("result4").value=output;
}
function logic5(){
    let start=parseInt(document.getElementById("start").value);
    let end=parseInt(document.getElementById("end").value);
    let output="";
    let count=0;
    for(let i=start;i<=end;i++){
        output+=i+"\n";
        count++;
        if(count==3){
            break;
        }
    }
    document.getElementById("result5").value=output;
}
function logic6(){
    let output="";
    let count=0;
    for(let i=25;i>=13;i--){
        if(i%2==0){
            output+=i+"\n";
            count++;
        }
        if(count==2){
            break;
        }
    }
    document.getElementById("result6").value=output;
}
function logic7(){
    let output="";
    for(let i=1;i<=10;i++){
        if(i==5){
            continue;
        }
        output+=i+"\n";
    }
    document.getElementById("result7").value=output;
}
function logic8(){
    let output="";
    for(let i=10;i<=20;i++){
        if(i==13||i==17){
            continue;
        }
        output+=i+"\n";
    }
    document.getElementById("result8").value=output;
}
function logic9(){
    let output="";
    for(let i=2020;i<=2026;i++){
        if(i==2025){
            continue;
        }
        output+=i+"\n";
    }
    document.getElementById("result9").value=output;
}
function logic10(){
    let output="";
    let n=1;
    while(n<=10){
        if(n==5){
            n++;
            continue;
        }
        output+=n+"\n";
        n++;
    }
    document.getElementById("result10").value=output;
}
function logic11(){
    let output="";
    let n=2023;
    let i=2020;
    while(i<=2026){
        if(i==n){
            i++;
            continue;
        }
        output+=i+"\n";
        i++;
    }
    document.getElementById("result11").value=output;
}