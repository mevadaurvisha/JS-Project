
    let unit = parseInt(document.getElementById("unit").textContent);

    let amount = 0;
    if (unit <= 50){
        amount = unit * 1;
    }
    else if (unit <= 150){
        amount = 50 * 1 + (unit - 50) * 2;
    } 
    else if (unit <= 250){
        amount = 50 * 1 + 100 * 2 + (unit - 150) * 3;
    } 
    else{
        amount = 50 * 1 + 100 * 2 + 100 * 3 + (unit - 250) * 4;
    }

    if (unit > 150){
        let surcharge = (amount * 20) / 100;
        amount += surcharge;
    }

    document.getElementById("amount").textContent = "Rs. " + amount.toFixed(2);

    document.querySelector('#unit').innerHTML = 'Units Consumed : ';
    document.querySelector('#amount').innerHTML = 'Total Amount to Pay : ';
