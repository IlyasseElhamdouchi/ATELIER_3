const numbers = [1, 3, 4];

const factorielle = numbers.map(n => {
    let f = 1;
    for (let i = 1; i <= n; i++) f *= i;
    return f;
});
console.log(factorielle); // [1, 6, 24]

