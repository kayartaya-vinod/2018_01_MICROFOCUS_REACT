var sayHello = (name, city) => {
    console.log(`Hello ${name}, are you from ${city}?`);
};

console.log(typeof sayHello);
sayHello('vinod', 'bangalore');

let square = n => n * n;
console.log('typeof square is', typeof square);
console.log(`square of 123 is ${square(123)}`);

let line = (n = 80) => {
    let st = ''
    for (let i = 0; i < n; i++) st += '-';
    console.log(st);
};
line();
line(30);