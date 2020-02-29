let l = +prompt('Enter the length of the circumference, mm');

while ( l <= 0 || isNaN(l)) {
    alert('Your length of the circumference is not correct');
    l = +prompt('Enter the length of the circumference, mm');
}

let p = +prompt('Enter the perimeter of square, mm');

while ( p <= 0 || isNaN(p)) {
    alert('Your the perimeter of square is not correct');
    p = +prompt('Enter the length of the circumference, mm');
}

let r = l / (2 * Math.PI);

r = +r.toFixed(2);

let a = p / 4;

a = +a.toFixed(2);

result = a / r;


if ( result === 2) {
    alert('yes');
} else {
    alert('not');
}