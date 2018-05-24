export function factorial(num) {
    var f = 1;
    while (num >= 1) f *= num--;
    return f;
}

export function square(num) {
    return num * num;
}

// module.exports.fact = factorial;