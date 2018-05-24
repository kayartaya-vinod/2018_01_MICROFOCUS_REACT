let names = ['vinod', 'shyam', 'harish', 'ramesh'];

// es4 style
for (var i = 0; i < names.length; i++) {
    console.log('typeof i is', typeof(i),  names[i]);
}

// es5 style 'for in loop'
console.log('es5 for in loop: ')
for(i in names) {
    console.log('typeof i is', typeof(i), names[i]);
}

let p1 = {name: 'Vinod', email: 'vinod@vinod.co'};
p1.city = 'Bangalore' ;
for(let key in p1) { // p1 is now considered as a collection of its keys
    console.log(key, '-->', p1[key]);
}

function processName(name, index, arr){
    // console.log(arr);
    console.log('the name at index', index, 'is', name);
}

names.forEach(processName);

// es6 style 'for of loop'
console.log('es6 style for of loop');
for(let name of names) {
    console.log('hello, '+ name +'!');
}

