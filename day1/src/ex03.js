let p1 = { name: 'Vinod', city: 'Mysore' };
p1.email = 'vinod@vinod.co';
sayHello(p1);
sayHello_v1(p1);

// es6 style
function sayHello({ name, city, email }) {
    console.log(`Hello ${name}! How's weather in ${city}?`);
    console.log(`I have sent an email to ${email}`)
}

// es5 style
function sayHello_v1(p) {
    console.log(`Hello ${p.name}! How's weather in ${p.city}?`);
    console.log(`I have sent an email to ${p.email}`)
}