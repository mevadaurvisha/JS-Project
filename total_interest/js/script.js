
let R;
let P = 1000;
let N = 6

    if (N > 0 && N <= 3){
        R = 3;
    } 
    else if (N > 3 && N <= 5){
        R = 5;
    } 
    else if (N > 5 && N <= 8){
        R = 8;
    } 
    else if (N > 8 && N <= 12){
        R = 12;
    } 
    else{
        R = 15;
    }

    let Interest = (P * R * N) / 100;

    document.querySelector('.total-interest').innerHTML = 'Total Interest is : ' + Interest;
