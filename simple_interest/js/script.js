let p = 5000;
let r = 20;
let t = 2;

let A = p * ( 1 + r * t);

Interest = A - p;


document.querySelector('.type').innerHTML = 'Interest Bill';
document.querySelector('.principle-amount').innerHTML = 'Principle Amount : ' + p;
document.querySelector('.rate-interest').innerHTML = 'Rate Interest : ' + r;
document.querySelector('.duration').innerHTML = 'Time-Duration : ' + t;
document.querySelector('.accured-ammount').innerHTML = 'Accured Ammount : ' + A;
document.querySelector('.interest').innerHTML = 'Total Interest : ' + Interest;
document.querySelector('.button').innerHTML = 'Click for result...';

