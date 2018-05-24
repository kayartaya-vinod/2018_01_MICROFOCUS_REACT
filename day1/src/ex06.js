let emps = [
    { name: 'John doe', salary: 4000, dept: 'admin' },
    { name: 'Allen smith', salary: 2000, dept: 'accounts' },
    { name: 'Robert miller', salary: 4500, dept: 'admin' }
];

let totalSal = emps.reduce((acc, emp) => acc + emp.salary, 0);
console.log('Total salary: $', totalSal);

let adminSal = emps.filter(emp => emp.dept == 'admin')
    .reduce((acc, emp) => acc + emp.salary, 0);
console.log('Total salary in admin dept: $', adminSal);

let names = emps.map(e => e.name);
console.log('employee names', names);