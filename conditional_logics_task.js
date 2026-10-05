function logic1() {
    let n = Number(document.getElementById("n1").value);

    if (n > 0) {
        document.getElementById("result1").innerText =
            "n is a positive number";
    }
   
}


function logic2() {
    let n = Number(document.getElementById("n2").value);

    if (n % 2 == 0) {
        document.getElementById("result2").innerText =
            "n is an even number";
    }
    
}


function logic3() {
    let n = Number(document.getElementById("n3").value);

    if (n % 2 == 0 && n % 5 == 0) {
        document.getElementById("result3").innerText =
            "The number is divisible by both 2 and 5";
    }
  
}


function logic4() {
    let n = Number(document.getElementById("n4").value);

    if (n > 0 || n % 2 == 0 || n > 100) {
        document.getElementById("result4").innerText =
            "The number is positive, even, or greater than 100";
    }
   
}


function logic5() {
    let a = Number(document.getElementById("a5").value);
    let b = Number(document.getElementById("b5").value);
    let c = Number(document.getElementById("c5").value);

    if (a + b > c && b + c > a && a + c > b) {
        document.getElementById("result5").innerText =
            "Valid triangle";
    }
    
}


function logic6() {
    let x = Number(document.getElementById("x6").value);
    let x1 = Number(document.getElementById("x61").value);
    let x2 = Number(document.getElementById("x62").value);
    let x3 = Number(document.getElementById("x63").value);

    if ((x > x1 && x > x2 && x > x3) || x % 2 == 0) {
        document.getElementById("result6").innerText =
            "The number is greater than the other three numbers or it is even";
    }
    
}


function logic7() {
    let number = Number(document.getElementById("number7").value);

    if (number >= 0) {
        document.getElementById("result7").innerText =
            "Given number is positive";
    }
    else {
        document.getElementById("result7").innerText =
            "Given number is negative";
    }
}


function logic8() {
    let number = Number(document.getElementById("number8").value);

    if (number % 2 == 0) {
        document.getElementById("result8").innerText =
            "Even";
    }
    else {
        document.getElementById("result8").innerText =
            "Odd";
    }
}


function logic9() {
    let a = Number(document.getElementById("a9").value);
    let b = Number(document.getElementById("b9").value);

    if (
        (a % 2 == 0 && b % 2 == 0) ||
        (a % 2 != 0 && b % 2 != 0)
    ) {
        document.getElementById("result9").innerText =
            "The addition result would be even";
    }
    else {
        document.getElementById("result9").innerText =
            "The addition result would be odd";
    }
}


function logic10() {
    let t1 = Number(document.getElementById("t10").value);
    let t2 = Number(document.getElementById("t101").value);
    let t3 = Number(document.getElementById("t102").value);

    if (
        t1 ** 2 + t2 ** 2 == t3 ** 2 ||
        t2 ** 2 + t3 ** 2 == t1 ** 2 ||
        t1 ** 2 + t3 ** 2 == t2 ** 2
    ) {
        document.getElementById("result10").innerText =
            "Given sides form a right-angle triangle";
    }
    else {
        document.getElementById("result10").innerText =
            "Given sides do not form a right-angle triangle";
    }
}


function logic11() {
    let year = Number(document.getElementById("year11").value);

    if (
        year % 400 === 0 ||
        (year % 4 === 0 && year % 100 !== 0)
    ) {
        document.getElementById("result11").innerText =
            "Leap Year";
    }
    else {
        document.getElementById("result11").innerText =
            "Not a Leap Year";
    }
}


function logic12() {
    let q1 = Number(document.getElementById("q12a").value);
    let q2 = Number(document.getElementById("q12b").value);
    let q3 = Number(document.getElementById("q12c").value);

    let q_ex = q2 ** 2 - (4 * q1 * q3);

    if (q_ex >= 0) {
        document.getElementById("result12").innerText =
            "Equation has real roots";
    }
    else {
        document.getElementById("result12").innerText =
            "Equation has imaginary roots";
    }
}


function logic13() {
    let marks = Number(document.getElementById("marks13").value);

    if (marks > 90) {
        document.getElementById("result13").innerText =
            "A+ grade";
    }
    else if (marks > 80) {
        document.getElementById("result13").innerText =
            "A grade";
    }
    else if (marks > 70) {
        document.getElementById("result13").innerText =
            "B grade";
    }
    else if (marks > 60) {
        document.getElementById("result13").innerText =
            "C grade";
    }
    else if (marks > 50) {
        document.getElementById("result13").innerText =
            "D grade";
    }
    else if (marks > 40) {
        document.getElementById("result13").innerText =
            "E grade";
    }
    else {
        document.getElementById("result13").innerText =
            "Fail";
    }
}


function logic14() {
    let bill = Number(document.getElementById("bill14").value);

    if (bill > 1000) {
        document.getElementById("result14").innerText =
            "20% discount applied";
    }
    else if (bill > 800) {
        document.getElementById("result14").innerText =
            "15% discount applied";
    }
    else if (bill > 600) {
        document.getElementById("result14").innerText =
            "10% discount applied";
    }
    else if (bill > 500) {
        document.getElementById("result14").innerText =
            "5% discount applied";
    }
    else {
        document.getElementById("result14").innerText =
            "No discount";
    }
}


function logic15() {
    let a = Number(document.getElementById("a15").value);
    let b = Number(document.getElementById("b15").value);
    let c = Number(document.getElementById("c15").value);

    if (a > b && a > c) {
        document.getElementById("result15").innerText =
            "A is largest";
    }
    else if (b > a && b > c) {
        document.getElementById("result15").innerText =
            "B is largest";
    }
    else {
        document.getElementById("result15").innerText =
            "C is largest";
    }
}


function logic16() {
    let q1 = Number(document.getElementById("a16").value);
    let q2 = Number(document.getElementById("b16").value);
    let q3 = Number(document.getElementById("c16").value);

    let q_ex = q2 ** 2 - (4 * q1 * q3);

    if (q_ex > 0) {
        document.getElementById("result16").innerText =
            "Equation has different real roots";
    }
    else if (q_ex == 0) {
        document.getElementById("result16").innerText =
            "Equation has same roots";
    }
    else {
        document.getElementById("result16").innerText =
            "Equation has imaginary roots";
    }
}


function logic17() {
    let income = Number(document.getElementById("income17").value);
    let tax;

    if (income <= 250000) {
        tax = 0;
    }
    else if (income <= 500000) {
        tax = (income - 250000) * 0.05;
    }
    else if (income <= 1000000) {
        tax = (250000 * 0.05) +
              ((income - 500000) * 0.20);
    }
    else {
        tax = (250000 * 0.05) +
              (500000 * 0.20) +
              ((income - 1000000) * 0.30);
    }

    document.getElementById("result17").innerText =
        "Tax = ₹" + tax;
}


function logic18() {
    let java = Number(document.getElementById("java18").value);
    let python = Number(document.getElementById("python18").value);
    let dbms = Number(document.getElementById("dbms18").value);
    let html = Number(document.getElementById("html18").value);
    let javascript = Number(document.getElementById("javascript18").value);

    let total =
        java +
        python +
        dbms +
        html +
        javascript;

    let average = total / 5;
    let result;

    if (
        java < 35 ||
        python < 35 ||
        dbms < 35 ||
        html < 35 ||
        javascript < 35
    ) {
        result = "Fail";
    }
    else if (average >= 90) {
        result = "A+";
    }
    else if (average >= 80) {
        result = "A";
    }
    else if (average >= 70) {
        result = "B";
    }
    else if (average >= 60) {
        result = "C";
    }
    else {
        result = "D";
    }

    document.getElementById("result18").innerText =
        "Total = " + total +
        " | Average = " + average +
        " | Grade = " + result;
}