
function calculatePercentage(){
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let pro = n2 - n1;
    let percentage = (pro / n1) * 100;
    document.getElementById("profit_per").value = percentage;
}

