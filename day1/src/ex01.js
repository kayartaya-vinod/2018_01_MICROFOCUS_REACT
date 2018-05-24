let name = 'Vinod';
let email = 'vinod@vinod.co';
let city = 'Bangalore';

// escape strings
let msg = `Name: ${name} 

Email: ${email} 

City: ${city}.`;

console.log(msg);
// alert(msg);

// object construction using variables
// es5 style
let p1 = {name: name, "first-name": name, 'city': city, email: email};
console.log(p1);

// es6 style
let p2 = {name, email, city, age: 44};
console.log(p2);

console.log(`Name is ${p1['first-name']}`);

function info(p){
    return p.name + ' - ' + p.email;
}

console.log(`Information is ${info(p1)}`);

function dateISO(constPart, date){
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}

let dt = new Date();
console.log(dateISO`${dt}`);